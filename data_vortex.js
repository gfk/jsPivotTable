/*global Bucket Datatype */
/*jslint white: true, browser: true, devel: true, onevar: false, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, indent: 2 */

/*****************************************************************************
 data_vortex.js
 
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
// Datatype constants
// -------------------------------------------------------------------
Datatype.STRING  = new Datatype("string");
Datatype.NUMBER  = new Datatype("number");
Datatype.PERCENT = new Datatype("percent");
Datatype.MONEY   = new Datatype("money");

// -------------------------------------------------------------------
// new Datatype()
//   public constructor
// -------------------------------------------------------------------
function Datatype(name) {
  this.name = name;
}

// -------------------------------------------------------------------
// new Metric()
//   public constructor
// -------------------------------------------------------------------
function Metric(name, datatype) {

  // Properties
  this.name = name;
  this.datatype = datatype;
}

// -------------------------------------------------------------------
// new Axis()
//   public constructor
// -------------------------------------------------------------------
function Axis(name) {

  // Properties
  this.name = name;
  this.bucketList = [];
  this.totalBucket = null;
}

// -------------------------------------------------------------------
// Axis.makeNewBucket()
//   public method
// -------------------------------------------------------------------
Axis.prototype.makeNewBucket = function (name, total) {
  var newBucket = new Bucket(name, this, total);
  this.bucketList.push(newBucket);
  newBucket.axisIndex = (this.bucketList.length - 1);
  return newBucket;
};

// -------------------------------------------------------------------
// Axis.getBucketFromName()
//   public method
// -------------------------------------------------------------------
Axis.prototype.getBucketFromName = function (name) {
  for (var i = 0; i < this.bucketList.length; i += 1) {
    if (this.bucketList[i].name === name) {
      return this.bucketList[i];
    }
  }
  return null;
};

// -------------------------------------------------------------------
// new Bucket()
//   public constructor
// -------------------------------------------------------------------
function Bucket(name, axis, total) {

  // Properties
  this.name = name;
  this.axis = axis;
  this.axisIndex = null;
  this.total = (total ? true : false);
}

// -------------------------------------------------------------------
// new DataVortex()
//   public constructor
// -------------------------------------------------------------------
function DataVortex(axisList) {

  // Public Properties
  this.axisList = axisList;       // Array of Axis objects
  this.metricList = [];  // Array of Metric objects
  this.nestedArraysOfData = [];  // n-dimensional Array of Arrays of Arrays

  // Private Properties
  var self = this;

  // -------------------------------------------------------------------
  // DataVortex.setValueAt()
  //
  // Given a value and a list of offsets -- like [8, 12, 3, 44] or [9, 22]
  // sets the corresponding data vortex cell to the new value -- for example:
  // this.nestedArraysOfData[8][12][3][44] = value;
  //   or 
  // this.nestedArraysOfData[9][22] = value;
  // -------------------------------------------------------------------
  this.setValueAt = function (value, listOfArrayOffsets) {
    if (listOfArrayOffsets === null || listOfArrayOffsets.length === 0) {
      self.nestedArraysOfData = value;
      return;
    }
    if (self.nestedArraysOfData === undefined) {
      self.nestedArraysOfData = [];
    }
    var currentArray = self.nestedArraysOfData;
    var numOffsets = listOfArrayOffsets.length;
    for (var i = 0; i < (numOffsets - 1); i += 1) {
      var currentOffset = listOfArrayOffsets[i];
      if (currentArray[currentOffset] === undefined) {
        currentArray[currentOffset] = [];
      }
      currentArray = currentArray[currentOffset];
    }
    var lastOffset = listOfArrayOffsets[(listOfArrayOffsets.length - 1)];
    currentArray[lastOffset] = value;
  };
  
  // -------------------------------------------------------------------
  // DataVortex.getValueAt()
  //
  // Given a list of offsets -- like [8, 12, 3, 44] or [9, 22]
  // gets the value of the corresponding data vortex cell -- for example:
  // this.nestedArraysOfData[8][12][3][44] = value;
  //   or 
  // this.nestedArraysOfData[9][22] = value;
  // -------------------------------------------------------------------
  this.getValueAt = function (listOfArrayOffsets) {
    var i = 0;
    if ((listOfArrayOffsets === null) || (listOfArrayOffsets.length === 0) || (listOfArrayOffsets.length !== this.axisList.length)) {
      return null;
    }
    for (i = 0; i < this.axisList.length; i += 1) {
      if (listOfArrayOffsets[i] === null) {
        return null; // This is where we should return the total instead of null
      }
    }
    var cellValue = null;
    var currentObject = self.nestedArraysOfData;
    for (i = 0; i < self.axisList.length; i += 1) {
      if (currentObject[listOfArrayOffsets[i]]) {
        currentObject = currentObject[listOfArrayOffsets[i]];
      } else {
        currentObject = 0;
        break;
      }
    }
    cellValue = currentObject;
    return cellValue;
  };

  this.getlistOfArrayOffsets = function (bucketList) {
    var listOfArrayOffsets = [];
    for (var i = 0; i < self.axisList.length; i += 1) {
      var axisInQuestion = self.axisList[i];
      var indexAlongThisAxis = 0;
      for (var j = 0; j < bucketList.length; j += 1) {
        if (axisInQuestion === bucketList[j].axis) {
          indexAlongThisAxis = bucketList[j].axisIndex;
          break;
        }
      }
      listOfArrayOffsets[i] = indexAlongThisAxis;
    }
    return listOfArrayOffsets;
  };

  // -------------------------------------------------------------------
  // DataVortex.setValue()
  // -------------------------------------------------------------------
  this.setValue = function (metric, value, bucketList) {
    // var indexOfMetric = this.getMetricIndexFromMetric(metric);
    this.setValueAt(value, this.getlistOfArrayOffsets(bucketList));
  };

  // -------------------------------------------------------------------
  // DataVortex.getValue()
  // -------------------------------------------------------------------
  this.getValue = function (metric, bucketList) {
    // var indexOfMetric = this.getMetricIndexFromMetric(metric);
    return this.getValueAt(this.getlistOfArrayOffsets(bucketList));
  };
}

