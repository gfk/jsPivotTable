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
PivotTable.listOfPivotTables = new Array();

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
  if (this.rowAxes == null && this.columnAxes == null) {
    alert("(rowAxes == null || columnAxes == null)");
    var numRows = Math.floor(dimensionOfPivotTable/2);
    var numColumns = Math.ceil(dimensionOfPivotTable/2);
    this.rowAxes = new Array();
    this.columnAxes = new Array();
    for (var row = 0; row < numRows; row++) {
      this.rowAxes.push(this.dataVortex.axisList[row]);
    }
    for (var column = 0; column < numColumns; column++) {
      this.columnAxes.push(this.dataVortex.axisList[column + numRows]);
    }
  } else {
    if (this.rowAxes == null) this.rowAxes = new Array();
    if (this.columnAxes == null) this.columnAxes = new Array();
  }
  
  PivotTable.listOfPivotTables[this.layoutButtonId] = this;
}

// -------------------------------------------------------------------
// PivotTable.display()
//   public method
// -------------------------------------------------------------------
PivotTable.prototype.display = function () {
  var tableDiv = document.getElementById(this.divId);
  var arrayOfStrings = new Array();
  var dimensionOfPivotTable = this.dataVortex.axisList.length;
  
  // add HTML to start table
  arrayOfStrings.push("<h2>" + this.dataVortex.metricList[0].name + "</h2>");
  arrayOfStrings.push("<table class=\"pivotTable\">");
  arrayOfStrings.push("<tbody>");
  
  // Start the top row of column headers
  arrayOfStrings.push("<tr>");                                
  
  // Create the special upper-left cell
  var rowspanValue = Math.max(this.columnAxes.length, 1);
  var colspanValue = Math.max(this.rowAxes.length, 1);
  arrayOfStrings.push("<th rowspan=\"" + rowspanValue + "\" colspan=\"" + colspanValue + "\">"); 
  arrayOfStrings.push("<input type=\"button\" class=\"layoutButton\" id=\"" + this.layoutButtonId + "\" name=\"layout\" value=\"Change Layout\"></input>");
  arrayOfStrings.push("</th>");

  // Create all the column headers
  if (this.columnAxes.length == 0) {
    if (this.showLayoutControls) {
      arrayOfStrings.push("<th>");
      // arrayOfStrings.push(this.getAxisSelectionMenuHTML(null, null));
      // arrayOfStrings.push("<br/>" + this.getMoveAxisButtonHTML(null, null));
      arrayOfStrings.push("</th>");
    }
    arrayOfStrings.push("<th>" + "value" + "</th>");  
  } else {
    for (var column = 0; column < this.columnAxes.length; column++) {
      if (column > 0) {
        arrayOfStrings.push("<tr>");
      }
      
      // if we're in layout mode, then create layout controls for this column axis
      if (this.showLayoutControls) {
        arrayOfStrings.push("<th>");
        arrayOfStrings.push(this.getAxisSelectionMenuHTML(null, column));
        arrayOfStrings.push("<br/>" + this.getMoveAxisButtonHTML(null, column));
        arrayOfStrings.push("</th>");
      }
      
      // create header cells for this row of column headers
      var numRepeats = 1;
      for (var i = 0; i < column; i++) {
        numRepeats = this.columnAxes[i].bucketList.length * numRepeats; 
      }
      for (var repeat = 0; repeat < numRepeats; repeat++) {
        for (var x = 0; x < this.columnAxes[column].bucketList.length; x++) { 
          var numberOfSpannedColumnsForEachHeaderColumn = 1;
          for (var i = (column + 1); i < this.columnAxes.length; i++) {
            numberOfSpannedColumnsForEachHeaderColumn = this.columnAxes[i].bucketList.length * numberOfSpannedColumnsForEachHeaderColumn; 
          }
          arrayOfStrings.push("<th colspan=\"" + numberOfSpannedColumnsForEachHeaderColumn + "\">" + this.columnAxes[column].bucketList[x].name + "</th>"); 
        }
      }
      arrayOfStrings.push("</tr>");
    }
  }

  // If we're in layout mode, then create a special row with layout controls 
  // for all the row axes.
  if (this.showLayoutControls) {
    arrayOfStrings.push("<tr>");
    if (this.rowAxes.length == 0) {
      arrayOfStrings.push("<th>");
      // arrayOfStrings.push(this.getAxisSelectionMenuHTML(null, null));
      // arrayOfStrings.push("<br/>" + this.getMoveAxisButtonHTML(null, null));
      arrayOfStrings.push("</th>");
    } else {
      for (var row = 0; row < this.rowAxes.length; row++) {
        arrayOfStrings.push("<th>");
        arrayOfStrings.push(this.getAxisSelectionMenuHTML(row, null));
        arrayOfStrings.push("<br/>" + this.getMoveAxisButtonHTML(row, null));
        arrayOfStrings.push("</th>");
      }
    }
    arrayOfStrings.push("<th></th>");    
    var numberOfColumnCellsSpanned = 1;
    for (var i = 0; i < this.columnAxes.length; i++) {
      numberOfColumnCellsSpanned = this.columnAxes[i].bucketList.length * numberOfColumnCellsSpanned; 
    }
    arrayOfStrings.push("<th colspan=\"" + numberOfColumnCellsSpanned + "\"></th>");
    arrayOfStrings.push("</tr>");                                  
  }
  
  // Create all the data rows
  var pti = new Array(this.dataVortex.axisList.length);
  for (var i = 0; i < this.dataVortex.axisList.length; i++) {
    pti[i] = null;
  }
  var offsetOfRow = new Array();
  for (var i = 0; i < this.rowAxes.length; i++) {
    offsetOfRow[i] = getIndexOfElementInArray(this.rowAxes[i], this.dataVortex.axisList);
  }
  var offsetOfColumn = new Array();
  for (var i = 0; i < this.columnAxes.length; i++) {
    offsetOfColumn[i] = getIndexOfElementInArray(this.columnAxes[i], this.dataVortex.axisList);
  }
  this.addRowsToArrayOfStrings(arrayOfStrings, offsetOfRow, offsetOfColumn, pti, 0, false, true);

  // add HTML to close table
  arrayOfStrings.push("</tbody>");
  arrayOfStrings.push("</table>");
  
  // take all the HTML and put it in the document
  // elementMainArea.appendChild(outerDiv);
  var finalString = arrayOfStrings.join("");
  tableDiv.innerHTML = finalString;
  
  // add event handlers for the newly created UI elements
  layoutButton = document.getElementById(this.layoutButtonId);
  layoutButton.onclick = clickOnLayoutButton;
  
  return;
}

// -------------------------------------------------------------------
// getIndexOfElementInArray()
//
// Given an element and an array that contains the element, returns
// an integer i such that: (array[i] == element)
// -------------------------------------------------------------------
function getIndexOfElementInArray(element, array, addIfAbsent) {
  for (var i = 0; i < array.length; i++) {
    if (element == array[i]) {
      return i;
    }
  }
  if (addIfAbsent) {
    array.push(element);
    return (array.length - 1);
  }
  return null;
}

// -------------------------------------------------------------------
// PivotTable.addRowsToArrayOfStrings()
// -------------------------------------------------------------------
PivotTable.prototype.addRowsToArrayOfStrings = function (arrayOfStrings, offsetOfRow, offsetOfColumn, pti, rowAxisIndex, inside, evenNotOdd) {
  if (!rowAxisIndex) rowAxisIndex = 0;
  if (this.rowAxes.length == 0) {
    arrayOfStrings.push("<tr>");
    arrayOfStrings.push("<th>" + "value" + "</th>");
    if (this.showLayoutControls) {
      arrayOfStrings.push("<th></th>");
    }
    this.addCellsToArrayOfStrings(arrayOfStrings, offsetOfColumn, pti, 0, evenNotOdd);
    arrayOfStrings.push("</tr>");  
  } else {
    for (var z = 0; z < this.rowAxes[rowAxisIndex].bucketList.length; z++) {
      pti[offsetOfRow[rowAxisIndex]] = z; 
      if (!inside || z > 0) arrayOfStrings.push("<tr>");
      var numberOfRowsToSpan = 1;
      for (var i = (rowAxisIndex + 1); i < this.rowAxes.length; i++) {
        numberOfRowsToSpan = this.rowAxes[i].bucketList.length * numberOfRowsToSpan; 
      }
      arrayOfStrings.push("<th rowspan=\"" + numberOfRowsToSpan + "\">" + this.rowAxes[rowAxisIndex].bucketList[z].name  + "</th>");
      var nestedRowIndex = rowAxisIndex + 1;
      if (nestedRowIndex < this.rowAxes.length) {
        evenNotOdd = !evenNotOdd;
        this.addRowsToArrayOfStrings(arrayOfStrings, offsetOfRow, offsetOfColumn, pti, nestedRowIndex, true, evenNotOdd);
      } else {
        if (this.showLayoutControls) {
          arrayOfStrings.push("<th></th>");
        }
        this.addCellsToArrayOfStrings(arrayOfStrings, offsetOfColumn, pti, 0, evenNotOdd);
        arrayOfStrings.push("</tr>");  
      }
    }
  }
}


// -------------------------------------------------------------------
// PivotTable.addCellsToArrayOfStrings()
// -------------------------------------------------------------------
PivotTable.prototype.addCellsToArrayOfStrings = function (arrayOfStrings, offsetOfColumn, pti, columnIndex, evenNotOdd) {
  if (!columnIndex) columnIndex = 0;
  if (this.columnAxes.length == 0) {
    if (this.dataVortex.metricList[0].datatype == Datatype.MONEY) {
      // FIX-ME -- display this as a bar chart      
      var cellValueFloat = this.dataVortex.getValueAt(pti);
      var cellValueString = this.getFormatedCellValue(cellValueFloat);
      var maxValue = 800.00; // FIX-ME!
      var width = (cellValueFloat / maxValue) * 100; // 100 Percent
      var evenOddColor = evenNotOdd ? "rgb(40%,60%,40%)" : "rgb(40%,40%,60%)";
      arrayOfStrings.push("<td class=\"outerBar\"><input disabled type=\"text\" class=\"innerBar\" value=\"" + cellValueString + "\" size=\"1\" style=\"width: " + width + "%; background: " + evenOddColor + "\"></input></td>");
    } else {
      var cellValue = this.dataVortex.getValueAt(pti);
      cellValue = this.getFormatedCellValue(cellValue);
      var evenOddText = evenNotOdd ? "even" : "odd";
      arrayOfStrings.push("<td class=\"" + evenOddText + "\">" + cellValue + "</td>");
    }
  } else {
    for (var x = 0; x < this.columnAxes[columnIndex].bucketList.length; x++) {
      pti[offsetOfColumn[columnIndex]] = x;
      nestedColumnIndex = columnIndex + 1;
      if (nestedColumnIndex < this.columnAxes.length) {
        evenNotOdd = !evenNotOdd;
        this.addCellsToArrayOfStrings(arrayOfStrings, offsetOfColumn, pti, nestedColumnIndex, evenNotOdd);
      } else {
        var cellValue = this.dataVortex.getValueAt(pti);
        cellValue = this.getFormatedCellValue(cellValue);
        var evenOddText = evenNotOdd ? "even" : "odd";
        arrayOfStrings.push("<td class=\"" + evenOddText + "\">" + cellValue + "</td>");
      }
    }
  }
}

// -------------------------------------------------------------------
// PivotTable.getFormatedCellValue()
// -------------------------------------------------------------------
PivotTable.prototype.getFormatedCellValue = function (cellValue) {
  var returnValue = cellValue;
  switch (this.dataVortex.metricList[0].datatype) {
    case (Datatype.MONEY):
        var number = cellValue;
        var negative = (number < 0);
	number = Math.abs(number);
	number = parseInt((number + .005) * 100); // parseInt((number + .005) * 100);
	number = number / 100;
	returnValue = new String(number);
	if (returnValue.indexOf(".") < 0) { 
          returnValue += ".00"; 
        }
	if (returnValue.indexOf(".") == (returnValue.length - 2)) { 
          returnValue += "0"; 
        }
        if (negative) returnValue = "(" + returnValue + ")";
        returnValue = "$" + returnValue;
      break;
    default:
      returnValue = cellValue;
      break;
  }
  return returnValue;
}

// -------------------------------------------------------------------
// PivotTable.getAxisSelectionMenuHTML()
//
// Creates an HTML <select><option> list.
// -------------------------------------------------------------------
PivotTable.prototype.getAxisSelectionMenuHTML = function (rowNumber, columnNumber) {
  var selectedAxis = null;
  if (rowNumber != null) selectedAxis = this.rowAxes[rowNumber];
  if (columnNumber != null) selectedAxis = this.columnAxes[columnNumber];
  var selectionMenuId = PivotTable.SELECT_MENU_ID_PREFIX + this.divId + "_" + rowNumber + "_" + columnNumber;
  var returnString = "<select id=\"" + selectionMenuId + "\" name=\"" + selectionMenuId + "\" row=\"" + rowNumber + "\" column=\"" + columnNumber + "\">";
  var selectedText;
  for (var i = 0; i < this.dataVortex.axisList.length; i++ ) {
    var axisOption = this.dataVortex.axisList[i];
    selectedText = (axisOption == selectedAxis) ? "selected" : "";
    returnString += "<option " + selectedText + " value=\"" + axisOption.name + "\" onclick=\"clickOnAxisSelectionMenu(event)\">" + axisOption.name + "</option>:";
  }
  // selectedText = (selectedAxis == null) ? "selected" : "";
  // returnString += "<option " + selectedText + " value=\"" + "none" + "\" onclick=\"clickOnAxisSelectionMenu(event)\">" + "none" + "</option>:";
  returnString += "</select>";
  
  PivotTable.listOfPivotTables[selectionMenuId] = this;
  return returnString;
}

// -------------------------------------------------------------------
// PivotTable.getMoveAxisButtonHTML()
//
// Creates an HTML <select><option> list.
// -------------------------------------------------------------------
PivotTable.prototype.getMoveAxisButtonHTML = function (rowNumber, columnNumber) {
  var selectedAxis = null;
  var buttonLabel = null;
  if (rowNumber != null) {
    selectedAxis = this.rowAxes[rowNumber];
    buttonLabel = "row -> column";
  }
  if (columnNumber != null) {
    selectedAxis = this.columnAxes[columnNumber];
    buttonLabel = "column -> row";
  }
  var buttonId = PivotTable.MOVE_AXIS_BUTTON_ID_PREFIX + this.divId + "_" + rowNumber + "_" + columnNumber;
  var returnString = "<input type=\"button\" class=\"moveAxisButton\" id=\"" + buttonId + "\" name=\"" + buttonId + "\" row=\"" + rowNumber + "\" column=\"" + columnNumber + "\" value=\"" + buttonLabel + "\" onclick=\"clickOnMoveAxisButton(event)\"></input>";

  PivotTable.listOfPivotTables[buttonId] = this;
  return returnString;
}

// -------------------------------------------------------------------
// Called when the user clicks on the big "Change Layout" button.
// -------------------------------------------------------------------
function clickOnLayoutButton(eventObject) {
  var pivotTable = PivotTable.listOfPivotTables[this.id];
  pivotTable.showLayoutControls = (pivotTable.showLayoutControls ? false : true);
  pivotTable.display();
}

// -------------------------------------------------------------------
// Called when the user clicks on any of the move-axis buttons.
// -------------------------------------------------------------------
function clickOnMoveAxisButton(eventObject) {
  if (!eventObject) var eventObject = window.event;
  var button = getTargetFromEvent(eventObject);
  var pivotTable = PivotTable.listOfPivotTables[button.id];

  var rowNumber = null;
  var columnNumber = null;
  var rowText = button.getAttribute("row");
  var columnText = button.getAttribute("column");
  if (rowText != "null") rowNumber = parseInt(rowText);
  if (columnText != "null") columnNumber = parseInt(columnText);

  var axisBeingMoved = null;
  if (rowNumber != null) {
    axisBeingMoved = pivotTable.rowAxes[rowNumber];
    pivotTable.rowAxes = copyArrayButRemoveElementAtOffset(pivotTable.rowAxes, rowNumber);
    pivotTable.columnAxes.push(axisBeingMoved);
  }
  if (columnNumber != null) {
    axisBeingMoved = pivotTable.columnAxes[columnNumber];
    pivotTable.columnAxes = copyArrayButRemoveElementAtOffset(pivotTable.columnAxes, columnNumber);
    pivotTable.rowAxes.push(axisBeingMoved);
  }
  pivotTable.display();
}

// -------------------------------------------------------------------
// Called when the user clicks on any of the axis-pivot option-select
// controls.
// -------------------------------------------------------------------
function clickOnAxisSelectionMenu(eventObject) {
  if (!eventObject) var eventObject = window.event;
  var htmlElement = getTargetFromEvent(eventObject);
  var pivotTable = PivotTable.listOfPivotTables[htmlElement.parentNode.id];
  
  var rowNumber = null;
  var columnNumber = null;
  var rowText = htmlElement.parentNode.getAttribute("row");
  var columnText = htmlElement.parentNode.getAttribute("column");
  if (rowText != "null") rowNumber = parseInt(rowText);
  if (columnText != "null") columnNumber = parseInt(columnText);
  
  var displacedAxis = null;
  if (rowNumber != null) displacedAxis = pivotTable.rowAxes[rowNumber];
  if (columnNumber != null) displacedAxis = pivotTable.columnAxes[columnNumber]; 
  
  var newChoiceName = htmlElement.value;
  var newChoiceAxis = pivotTable.getAxisFromName(newChoiceName);
  if (newChoiceAxis != null) {
    for (i = 0; i < pivotTable.rowAxes.length; i++) {
      if (pivotTable.rowAxes[i] == newChoiceAxis) {
        pivotTable.rowAxes[i] = displacedAxis;
      }
    }
    for (i = 0; i < pivotTable.columnAxes.length; i++) {
      if (pivotTable.columnAxes[i] == newChoiceAxis) {
        pivotTable.columnAxes[i] = displacedAxis;
      }
    }
    if (rowNumber != null) pivotTable.rowAxes[rowNumber] = newChoiceAxis;
    if (columnNumber != null) pivotTable.columnAxes[columnNumber] = newChoiceAxis;
  } else {
    alert("FIX ME");
  }
  if (rowNumber == null && columnNumber == null) {
    alert("FIX ME");
  }
  pivotTable.display();
}

// -------------------------------------------------------------------
// PivotTable.getAxisFromName()
//   public method
// -------------------------------------------------------------------
PivotTable.prototype.getAxisFromName = function (name) {
  for (var i = 0; i < this.dataVortex.axisList.length; i++) {
    if (this.dataVortex.axisList[i].name == name) {
      return this.dataVortex.axisList[i];
    }
  }
  return null;
}

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
//  copyArrayButRemoveElementAtOffset(["aa", "bb", "cc", "dd"], 2)
// will return a new array ["aa", "bb", "dd"]
// -------------------------------------------------------------------
function copyArrayButRemoveElementAtOffset(array, offset) {
  if ((array.length > 0) && (offset >= 0) && (array.length > offset)) {
    var newArray = new Array(array.length - 1);
    for (var i = 0; i < offset; i++) {
      newArray[i] = array[i]
    }
    for (var j = offset; j < (array.length - 1); j++) {
      newArray[j] = array[j + 1];
    }
    return newArray;
  }
  return array;
}

// -------------------------------------------------------------------
// Given an event object, returns the HTML element that was the 
// target of the event.  Should work for IE, Mozilla, and _some_ other 
// browsers.
// -------------------------------------------------------------------
function getTargetFromEvent(eventObject) {
  var target = null;
  if (eventObject.target) {
    target = eventObject.target;
  } else {
    if (eventObject.srcElement) {
      target = eventObject.srcElement;
    }
  }
  if (target && target.nodeType == 3) { // defeat Safari bug
    target = target.parentNode;
  }
  return target;
}
