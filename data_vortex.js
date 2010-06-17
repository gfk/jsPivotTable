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
  this.bucketList = new Array();
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
}

// -------------------------------------------------------------------
// Axis.getBucketFromName()
//   public method
// -------------------------------------------------------------------
Axis.prototype.getBucketFromName = function (name) {
  for (var i=0; i<this.bucketList.length; i++) {
    if (this.bucketList[i].name == name) {
      return this.bucketList[i];
    }
  }
  return null;
}

// -------------------------------------------------------------------
// new Bucket()
//   public constructor
// -------------------------------------------------------------------
function Bucket(name, axis, total) {

  // Properties
  this.name = name;
  this.axis = axis;
  this.axisIndex = null;
  this.total = (total ? true : false );
}

// -------------------------------------------------------------------
// new DataVortex()
//   public constructor
// -------------------------------------------------------------------
function DataVortex(axisList) {

  // Public Properties
  this.axisList = axisList;       // Array of Axis objects
  this.metricList = new Array();  // Array of Metric objects
  this.nestedArraysOfData = new Array();  // n-dimensional Array of Arrays of Arrays

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
  function setValueAt(value, listOfArrayOffsets) {
    if (listOfArrayOffsets == null || listOfArrayOffsets.length == 0) {
      self.nestedArraysOfData = value;
      return;
    }
    if (self.nestedArraysOfData == null) self.nestedArraysOfData = new Array();
    var currentArray = self.nestedArraysOfData;
    var numOffsets = listOfArrayOffsets.length;
    for (var i = 0; i < (numOffsets - 1); i++) {
      var currentOffset = listOfArrayOffsets[i];
      if (currentArray[currentOffset] == null) currentArray[currentOffset] = new Array();
      currentArray = currentArray[currentOffset];
    }
    var lastOffset = listOfArrayOffsets[(listOfArrayOffsets.length - 1)];
    currentArray[lastOffset] = value;
  }
  
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
    if ((listOfArrayOffsets == null) || (listOfArrayOffsets.length == 0) || (listOfArrayOffsets.length != this.axisList.length)) {
      return null;
    }
    for (var i = 0; i < this.axisList.length; i++) {
      if (listOfArrayOffsets[i] == null) return null;
    }
    var cellValue = null;
    var currentObject = self.nestedArraysOfData;
    for (var i = 0; i < self.axisList.length; i++) {
      currentObject = currentObject[listOfArrayOffsets[i]];
    }
    cellValue = currentObject;
    return cellValue;
  };

  // -------------------------------------------------------------------
  // DataVortex.setValue()
  // -------------------------------------------------------------------
  this.setValue = function (metric, value, bucketList) {
    // var indexOfMetric = this.getMetricIndexFromMetric(metric);
    var listOfArrayOffsets = new Array();
    for (var i = 0; i < self.axisList.length; i++) {
      var axisInQuestion = self.axisList[i];
      var indexAlongThisAxis = 0;
      for (var j = 0; j < bucketList.length; j++) {
        if (axisInQuestion == bucketList[j].axis) {
          indexAlongThisAxis = bucketList[j].axisIndex;
          break;
        }
      }
      listOfArrayOffsets[i] = indexAlongThisAxis;
    }
    setValueAt(value, listOfArrayOffsets);
  };
}

