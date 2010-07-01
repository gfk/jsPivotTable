/*global PivotTable Datatype window */
/*jslint white: true, browser: true, devel: true, onevar: false, sub: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, indent: 2 */

/*****************************************************************************
 pivot_table.js
 
******************************************************************************
 Written in 2004 by 
    Brian Douglas Skinner <brian.skinner@gumption.org>
  
 Copyright rights relinquished under the Creative Commons  
 Public Domain Dedication:
    http://creativecommons.org/licenses/publicdomain/
  
 You can copy freely from this file.  This work may be freely reproduced, 
 distributed, transmitted, used, modified, built upon, or otherwise exploited
 by anyone for any purpose.
  
 This work is provided on an "AS IS" basis, without warranties or conditions 
 of any kind, either express or implied, including, without limitation, any 
 warranties or conditions of title, non-infringement, merchantability, or 
 fitness for a particular purpose. You are solely responsible for determining 
 the appropriateness of using or distributing the work and assume all risks 
 associated with use of this work, including but not limited to the risks and 
 costs of errors, compliance with applicable laws, damage to or loss of data 
 or equipment, and unavailability or interruption of operations.

 In no event shall the authors or contributors have any liability for any 
 direct, indirect, incidental, special, exemplary, or consequential damages,
 however caused and on any theory of liability, whether in contract, strict 
 liability, or tort (including negligence), arising in any way out of or in 
 connection with the use or distribution of the work.
*****************************************************************************/

// -------------------------------------------------------------------
// PivotTable class constants
// -------------------------------------------------------------------
PivotTable.LAYOUT_BUTTON_ID_PREFIX = "layoutButtonIn";
PivotTable.SELECT_MENU_ID_PREFIX = "selectMenuIn";
PivotTable.MOVE_AXIS_BUTTON_ID_PREFIX = "moveAxisButtonIn";

// -------------------------------------------------------------------
// PivotTable class properties
// -------------------------------------------------------------------
PivotTable.listOfPivotTables = [];

// -------------------------------------------------------------------
// new PivotTable()
//   public constructor
// -------------------------------------------------------------------
function PivotTable(divId, dataVortex, rowAxes, columnAxes) {

  // Properties
  this.divId = divId;
  this.layoutButtonId = PivotTable.LAYOUT_BUTTON_ID_PREFIX + this.divId;
  this.dataVortex = dataVortex;
  this.rowAxes = rowAxes;
  this.columnAxes = columnAxes;
  this.showLayoutControls = false;

  // If we weren't told which of the axes should be rows and which should be columns,
  // then just make something up.  Have the first half of the axes be rows, and the
  // second half be columns.
  if (this.rowAxes === null && this.columnAxes === null) {
    alert("(rowAxes == null || columnAxes == null)");
    var dimensionOfPivotTable = this.dataVortex.axisList.length;
    var numRows = Math.floor(dimensionOfPivotTable / 2);
    var numColumns = Math.ceil(dimensionOfPivotTable / 2);
    this.rowAxes = [];
    this.columnAxes = [];
    for (var row = 0; row < numRows; row += 1) {
      this.rowAxes.push(this.dataVortex.axisList[row]);
    }
    for (var column = 0; column < numColumns; column += 1) {
      this.columnAxes.push(this.dataVortex.axisList[column + numRows]);
    }
  } else {
    if (this.rowAxes === null) {
      this.rowAxes = [];
    }
    if (this.columnAxes === null) {
      this.columnAxes = [];
    }
  }
  
  PivotTable.listOfPivotTables[this.layoutButtonId] = this;
}

// -------------------------------------------------------------------
// PivotTable.getIndexOfElementInArray()
//
// Given an element and an array that contains the element, returns
// an integer i such that: (array[i] == element)
// -------------------------------------------------------------------
PivotTable.getIndexOfElementInArray = function (element, array, addIfAbsent) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    if (element === array[i]) {
      return i;
    }
  }
  if (addIfAbsent) {
    array.push(element);
    return (array.length - 1);
  }
  return null;
};

PivotTable.prepareTableObject = (function () {
  var is_array = function (value) {
    return ((typeof value === 'object') && (value) && (value instanceof Array));
  };
  
  return function (inTableObject) {
    var meta = inTableObject.meta || {};
    meta.nbElements = 0;
    meta.total      = [];
    for (var i in inTableObject) {
      if (inTableObject.hasOwnProperty(i) && i !== 'meta') {
        meta.nbElements += 1;
        if (inTableObject[i].cellData !== undefined) { // Base case
          var empty = true;
          if (is_array(inTableObject[i].cellData[0])) {
            // Multi-level cellData, we need to merge this and calculate totals
            var baseArray = [], total = [];
            for (var l = 0, o = inTableObject[i].cellData.length; l < o; l += 1) {
              // Calculate row totals
              for (var p = 0, q = inTableObject[i].cellData[l].length; p < q; p += 1) {
                total[p]  = total[p] || 0;
                total[p] += inTableObject[i].cellData[l][p];
              }
              baseArray = baseArray.concat(inTableObject[i].cellData[l]);
            }
            inTableObject[i].cellData = baseArray.concat(total);
          }
          for (var j = 0, n = inTableObject[i].cellData.length; j < n; j += 1) {
            // Calculate col totals
            meta.total[j] = meta.total[j] || 0;
            if (inTableObject[i].cellData[j] !== 0) {
              meta.total[j] += inTableObject[i].cellData[j];
              empty = false;
            }
          }
          if (empty) {
            meta.nbElements -= 1;
            delete inTableObject[i];
          }
        } else { // Recursion
          meta.nbElements += PivotTable.prepareTableObject(inTableObject[i]).nbElements;
          if (inTableObject[i].meta.nbElements === 0) {
            meta.nbElements -= 1;
            delete inTableObject[i];
          } else {
            for (var k = 0, m = inTableObject[i].meta.total.length; k < m; k += 1) {
              // Calculate col totals
              meta.total[k]  = meta.total[k] || 0;
              meta.total[k] += inTableObject[i].meta.total[k];
            }
          }
        }
      }
    }
    inTableObject.meta = meta;
    return meta;
  };
}());

PivotTable.makeHTML = (function () {
  var makeHTMLData = function (inTableObject, colspanValue) {
    var toBeHTML = "";
    
    for (var i in inTableObject) {
      if (inTableObject.hasOwnProperty(i) && i !== 'meta') {
        if (i === 'total') {
          // (Sub-)Total
          toBeHTML += "<th colspan=\"" + (colspanValue) + "\">Total " + inTableObject[i]['name'] + "</th><td>" + inTableObject[i]['value'].join("</td><td>") + "</td></tr>\n<tr>";
        } else if (inTableObject[i].cellData !== undefined) {
          // Data
          toBeHTML += "<th>" + inTableObject.meta.axisName + ':' + i + "</th><td>" + inTableObject[i].cellData.join("</td><td>") + "</td>";
          toBeHTML += "</tr>\n<tr>";
        } else {
          // Headers
          toBeHTML += "<th rowspan=\"" + inTableObject[i].meta.nbElements + "\">" + inTableObject.meta.axisName + ':' + i + "</th>" + makeHTMLData(inTableObject[i], colspanValue - 1) + "</tr>\n";
          toBeHTML += "<tr>" + makeHTMLData({ 'total' : { 'name': i, 'value': inTableObject[i].meta.total} }, colspanValue - 1) + "</tr>\n";
        }
      }
    }
    return toBeHTML.substring(0, toBeHTML.length - 4);
  };
  
  return function (inTableObject, tableDiv) {
    var toBeHTML = "";
    
    // Open table
    toBeHTML += "<table class=\"pivotTable\">\n<tbody><tr>";
    
    // Create the special upper-left cell
    toBeHTML += "<th rowspan=\"" + inTableObject.meta.rowspanValue + "\" colspan=\"" + inTableObject.meta.colspanValue + "\">";
    toBeHTML += "<input type=\"button\" class=\"layoutButton\" id=\"paramBtn\" name=\"layout\" value=\"Param\"></input>";
    toBeHTML += "</th>";
    
    // Table headers
    var colHeaders = inTableObject.meta.colHeaders;
    for (var column = 0, len = colHeaders.length; column < len; column += 1) {
      if (column > 0) {
        toBeHTML += "<tr>\n";
      }
      for (var x = 0, m = colHeaders[column].cols.length; x < m; x += 1) { 
        var col = colHeaders[column].cols[x];
        if (col.nbElements > 1) {
          toBeHTML += "<th colspan=\"" + col.nbElements + "\">";
        } else {
          toBeHTML += "<th>";
        }
        toBeHTML += colHeaders[column].axisName + ':' + col.bucketName + "</th>\n";
      }
      toBeHTML += "</tr>\n";
    }
    
    // Table data
    toBeHTML += makeHTMLData(inTableObject, inTableObject.meta.colspanValue + 1);
    
    // Close the table
    toBeHTML += "</tbody>\n</table>\n";
    
    tableDiv.innerHTML = toBeHTML;
  };
}());

// -------------------------------------------------------------------
// PivotTable.generateTableObject()
//   public method
// -------------------------------------------------------------------
PivotTable.prototype.generateTableObject = function () {
  var copyColumnAxes = function (ca) {
    var colAxes = [];
    for (var i = 0, l = ca.length; i < l; i += 1) {
      var colAxis        = {};
      colAxis.name       = ca[i].name;
      colAxis.bucketList = [];
      for (var j = 0, k = ca[i].bucketList.length; j < k; j += 1) {
        var bl  = {};
        bl.name = ca[i].bucketList[j].name;
        colAxis.bucketList.push(bl);
      }
      colAxes.push(colAxis);
    }
    return colAxes;
  };
  
  var i = 0,
      l = 0;

  // Create all the column headers
  var colAxes = copyColumnAxes(this.columnAxes);
  if (colAxes.length > 1) {
    // Add a "Total" header if we have more than one column.
    colAxes[0].bucketList.push({ "name": "Total" });
  }
  var colHeaders = [];
  for (var column = 0, len = colAxes.length; column < len; column += 1) {
    var axisHeader = {};
    axisHeader.axisName = colAxes[column].name;
    axisHeader.cols     = [];
    
    // create header cells for this row of column headers
    var numRepeats = 1;
    for (i = 0; i < column; i += 1) {
      numRepeats *= colAxes[i].bucketList.length; 
    }
    for (var repeat = 0; repeat < numRepeats; repeat += 1) {
      for (var x = 0, m = colAxes[column].bucketList.length; x < m; x += 1) { 
        var numberOfSpannedColumnsForEachHeaderColumn = 1;
        for (i = (column + 1), l = colAxes.length; i < l; i += 1) {
          numberOfSpannedColumnsForEachHeaderColumn *= colAxes[i].bucketList.length;
        }
        var colHeader = {};
        colHeader.bucketName = colAxes[column].bucketList[x].name;
        colHeader.nbElements = numberOfSpannedColumnsForEachHeaderColumn;
        axisHeader.cols.push(colHeader);
      }
    }
    colHeaders.push(axisHeader);
  }
  
  // Create all the data rows
  var pti = new Array(this.dataVortex.axisList.length);
  for (i = 0, l = this.dataVortex.axisList.length; i < l; i += 1) {
    pti[i] = null;
  }
  var offsetOfRow = [];
  for (i = 0, l = this.rowAxes.length; i < l; i += 1) {
    offsetOfRow[i] = PivotTable.getIndexOfElementInArray(this.rowAxes[i], this.dataVortex.axisList);
  }
  var offsetOfColumn = [];
  for (i = 0, l = this.columnAxes.length; i < l; i += 1) {
    offsetOfColumn[i] = PivotTable.getIndexOfElementInArray(this.columnAxes[i], this.dataVortex.axisList);
  }
  var tableObject = this.addRowsToTableObject(offsetOfRow, offsetOfColumn, pti, 0, false);
  
  tableObject.meta.colHeaders   = colHeaders;
  tableObject.meta.rowspanValue = Math.max(this.columnAxes.length, 1);
  tableObject.meta.colspanValue = Math.max(this.rowAxes.length, 1);
  PivotTable.prepareTableObject(tableObject);

  return tableObject;
};

// -------------------------------------------------------------------
// PivotTable.display()
//   public method
// -------------------------------------------------------------------
PivotTable.prototype.display = function () {
  PivotTable.makeHTML(this.generateTableObject(), document.getElementById(this.divId));
};

// -------------------------------------------------------------------
// PivotTable.addRowsToTableObject()
// -------------------------------------------------------------------
PivotTable.prototype.addRowsToTableObject = function (offsetOfRow, offsetOfColumn, pti, rowAxisIndex, inside) {
  var tableObject = {};
  tableObject.meta = {};
  if (!rowAxisIndex) {
    rowAxisIndex = 0;
  }
  
  tableObject.meta.axisName = this.rowAxes[rowAxisIndex].name;
  
  if (this.rowAxes.length !== 0) {
    for (var z = 0, l = this.rowAxes[rowAxisIndex].bucketList.length; z < l; z += 1) {
      pti[offsetOfRow[rowAxisIndex]] = z; 
      var nestedRowIndex = rowAxisIndex + 1;
      var bucketName = this.rowAxes[rowAxisIndex].bucketList[z].name;
      if (nestedRowIndex < this.rowAxes.length) {
        tableObject[bucketName] = this.addRowsToTableObject(offsetOfRow, offsetOfColumn, pti, nestedRowIndex, true);
      } else {
        tableObject[bucketName] = {};
        tableObject[bucketName].cellData = this.addCellsToTableObject(offsetOfColumn, pti, 0);  
      }
    }
  }
  return tableObject;
};


// -------------------------------------------------------------------
// PivotTable.addCellsToTableObject()
// -------------------------------------------------------------------
PivotTable.prototype.addCellsToTableObject = function (offsetOfColumn, pti, columnIndex) {
  var tabletable = [];
  if (!columnIndex) {
    columnIndex = 0;
  }
  if (this.columnAxes.length !== 0) {
    for (var x = 0, l = this.columnAxes[columnIndex].bucketList.length; x < l; x += 1) {
      pti[offsetOfColumn[columnIndex]] = x;
      var nestedColumnIndex = columnIndex + 1;
      if (nestedColumnIndex < this.columnAxes.length) {
        tabletable[x] = this.addCellsToTableObject(offsetOfColumn, pti, nestedColumnIndex);
      } else {
        tabletable[x] = this.dataVortex.getValueAt(pti);
      }
    }
  }
  return tabletable;
};

// -------------------------------------------------------------------
// PivotTable.getFormatedCellValue()
// -------------------------------------------------------------------
PivotTable.prototype.getFormatedCellValue = function (cellValue) {
  var returnValue = cellValue;
  if (this.dataVortex.metricList[0].datatype === Datatype.MONEY) {
    var number = cellValue;
    var negative = (number < 0);
    number = Math.abs(number);
    number = parseInt((number + 0.005) * 100, 10); // parseInt((number + .005) * 100);
    number = number / 100;
    returnValue = number + ''; // Convert to string
    if (returnValue.indexOf(".") < 0) { 
      returnValue += ".00"; 
    }
    if (returnValue.indexOf(".") === (returnValue.length - 2)) { 
      returnValue += "0"; 
    }
    if (negative) {
      returnValue = "(" + returnValue + ")";
    }
    returnValue = "$" + returnValue;
  }
  return returnValue;
};

// -------------------------------------------------------------------
// PivotTable.getAxisSelectionMenuHTML()
//
// Creates an HTML <select><option> list.
// -------------------------------------------------------------------
PivotTable.prototype.getAxisSelectionMenuHTML = function (rowNumber, columnNumber) {
  var selectedAxis = null;
  if (rowNumber !== null) {
    selectedAxis = this.rowAxes[rowNumber];
  }
  if (columnNumber !== null) {
    selectedAxis = this.columnAxes[columnNumber];
  }
  var selectionMenuId = PivotTable.SELECT_MENU_ID_PREFIX + this.divId + "_" + rowNumber + "_" + columnNumber;
  var returnString = "<select id=\"" + selectionMenuId + "\" name=\"" + selectionMenuId + "\" row=\"" + rowNumber + "\" column=\"" + columnNumber + "\">";
  var selectedText;
  for (var i = 0, l = this.dataVortex.axisList.length; i < l; i += 1) {
    var axisOption = this.dataVortex.axisList[i];
    selectedText = (axisOption === selectedAxis) ? "selected" : "";
    returnString += "<option " + selectedText + " value=\"" + axisOption.name + "\" onclick=\"PivotTable.clickOnAxisSelectionMenu(event)\">" + axisOption.name + "</option>:";
  }
  // selectedText = (selectedAxis == null) ? "selected" : "";
  // returnString += "<option " + selectedText + " value=\"" + "none" + "\" onclick=\"PivotTable.clickOnAxisSelectionMenu(event)\">" + "none" + "</option>:";
  returnString += "</select>";
  
  PivotTable.listOfPivotTables[selectionMenuId] = this;
  return returnString;
};

// -------------------------------------------------------------------
// PivotTable.getMoveAxisButtonHTML()
//
// Creates an HTML <select><option> list.
// -------------------------------------------------------------------
PivotTable.prototype.getMoveAxisButtonHTML = function (rowNumber, columnNumber) {
  var selectedAxis = null;
  var buttonLabel = null;
  if (rowNumber !== null) {
    selectedAxis = this.rowAxes[rowNumber];
    buttonLabel = "row -> column";
  }
  if (columnNumber !== null) {
    selectedAxis = this.columnAxes[columnNumber];
    buttonLabel = "column -> row";
  }
  var buttonId = PivotTable.MOVE_AXIS_BUTTON_ID_PREFIX + this.divId + "_" + rowNumber + "_" + columnNumber;
  var returnString = "<input type=\"button\" class=\"moveAxisButton\" id=\"" + buttonId + "\" name=\"" + buttonId + "\" row=\"" + rowNumber + "\" column=\"" + columnNumber + "\" value=\"" + buttonLabel + "\" onclick=\"PivotTable.clickOnMoveAxisButton(event)\"></input>";

  PivotTable.listOfPivotTables[buttonId] = this;
  return returnString;
};

// -------------------------------------------------------------------
// Called when the user clicks on the big "Change Layout" button.
// -------------------------------------------------------------------
PivotTable.clickOnLayoutButton = function (eventObject) {
  var pivotTable = PivotTable.listOfPivotTables[this.id];
  pivotTable.showLayoutControls = (pivotTable.showLayoutControls ? false : true);
  pivotTable.display();
};

// ===================================================================
// RE-USABLE HELPER FUNCTIONS
//   |
//   |
//   V

// -------------------------------------------------------------------
// Given an _array_ and the _offset_ of one element in the array, 
// return a new array which has all the same elements, except for the 
// element that was at _offset_.
//
// For example:
//  PivotTable.copyArrayButRemoveElementAtOffset(["aa", "bb", "cc", "dd"], 2)
// will return a new array ["aa", "bb", "dd"]
// -------------------------------------------------------------------
PivotTable.copyArrayButRemoveElementAtOffset = function (array, offset) {
  var len = array.length;
  if ((len > 0) && (offset >= 0) && (len > offset)) {
    var newArray = new Array(len - 1);
    for (var i = 0; i < offset; i += 1) {
      newArray[i] = array[i];
    }
    for (var j = offset; j < (len - 1); j += 1) {
      newArray[j] = array[j + 1];
    }
    return newArray;
  }
  return array;
};

// -------------------------------------------------------------------
// Given an event object, returns the HTML element that was the 
// target of the event.  Should work for IE, Mozilla, and _some_ other 
// browsers.
// -------------------------------------------------------------------
PivotTable.getTargetFromEvent = function (eventObject) {
  var target = null;
  if (eventObject.target) {
    target = eventObject.target;
  } else {
    if (eventObject.srcElement) {
      target = eventObject.srcElement;
    }
  }
  if (target && target.nodeType === 3) { // defeat Safari bug
    target = target.parentNode;
  }
  return target;
};

// -------------------------------------------------------------------
// Called when the user clicks on any of the move-axis buttons.
// -------------------------------------------------------------------
PivotTable.clickOnMoveAxisButton = function (eventObject) {
  if (!eventObject) {
    eventObject = window.event;
  }
  var button = PivotTable.getTargetFromEvent(eventObject);
  var pivotTable = PivotTable.listOfPivotTables[button.id];

  var rowNumber = null;
  var columnNumber = null;
  var rowText = button.getAttribute("row");
  var columnText = button.getAttribute("column");
  if (rowText !== "null") {
    rowNumber = parseInt(rowText, 10);
  }
  if (columnText !== "null") {
    columnNumber = parseInt(columnText, 10);
  }

  var axisBeingMoved = null;
  if (rowNumber !== null) {
    axisBeingMoved = pivotTable.rowAxes[rowNumber];
    pivotTable.rowAxes = PivotTable.copyArrayButRemoveElementAtOffset(pivotTable.rowAxes, rowNumber);
    pivotTable.columnAxes.push(axisBeingMoved);
  }
  if (columnNumber !== null) {
    axisBeingMoved = pivotTable.columnAxes[columnNumber];
    pivotTable.columnAxes = PivotTable.copyArrayButRemoveElementAtOffset(pivotTable.columnAxes, columnNumber);
    pivotTable.rowAxes.push(axisBeingMoved);
  }
  pivotTable.display();
};

// -------------------------------------------------------------------
// Called when the user clicks on any of the axis-pivot option-select
// controls.
// -------------------------------------------------------------------
PivotTable.clickOnAxisSelectionMenu = function (eventObject) {
  var i = 0,
      l = 0;
  if (!eventObject) {
    eventObject = window.event;
  }
  var htmlElement = PivotTable.getTargetFromEvent(eventObject);
  var pivotTable = PivotTable.listOfPivotTables[htmlElement.parentNode.id];
  
  var rowNumber = null;
  var columnNumber = null;
  var rowText = htmlElement.parentNode.getAttribute("row");
  var columnText = htmlElement.parentNode.getAttribute("column");
  if (rowText !== "null") {
    rowNumber = parseInt(rowText, 10);
  }
  if (columnText !== "null") {
    columnNumber = parseInt(columnText, 10);
  }
  
  var displacedAxis = null;
  if (rowNumber !== null) {
    displacedAxis = pivotTable.rowAxes[rowNumber];
  }
  if (columnNumber !== null) {
    displacedAxis = pivotTable.columnAxes[columnNumber]; 
  }
  
  var newChoiceName = htmlElement.value;
  var newChoiceAxis = pivotTable.getAxisFromName(newChoiceName);
  if (newChoiceAxis !== null) {
    for (i = 0, l = pivotTable.rowAxes.length; i < l; i += 1) {
      if (pivotTable.rowAxes[i] === newChoiceAxis) {
        pivotTable.rowAxes[i] = displacedAxis;
      }
    }
    for (i = 0, l = pivotTable.columnAxes.length; i < l; i += 1) {
      if (pivotTable.columnAxes[i] === newChoiceAxis) {
        pivotTable.columnAxes[i] = displacedAxis;
      }
    }
    if (rowNumber !== null) {
      pivotTable.rowAxes[rowNumber] = newChoiceAxis;
    }
    if (columnNumber !== null) {
      pivotTable.columnAxes[columnNumber] = newChoiceAxis;
    }
  } else {
    alert("FIX ME");
  }
  if (rowNumber === null && columnNumber === null) {
    alert("FIX ME");
  }
  pivotTable.display();
};

// -------------------------------------------------------------------
// PivotTable.getAxisFromName()
//   public method
// -------------------------------------------------------------------
PivotTable.prototype.getAxisFromName = function (name) {
  for (var i = 0; i < this.dataVortex.axisList.length; i += 1) {
    if (this.dataVortex.axisList[i].name === name) {
      return this.dataVortex.axisList[i];
    }
  }
  return null;
};

