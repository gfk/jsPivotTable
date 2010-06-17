/*****************************************************************************
 test_page.js
 
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
// onLoad()
// 
// Calls all the functions that do initialization when the page is 
// first loaded.
// -------------------------------------------------------------------
function onLoad() {
  elementMainArea = document.getElementById("mainArea");
  numberOfCallsToDebug = 0;

  var gastaxVortex = makeGastaxDataVortex();
  var gastaxPivot  = new PivotTable("tableOne", gastaxVortex, [gastaxVortex.axisList[2], gastaxVortex.axisList[0]], [gastaxVortex.axisList[1]]);

  var fakePopVortex = makeFakePopulationDataVortex();
  var fakePopPivot  = new PivotTable("tableTwo", fakePopVortex, [fakePopVortex.axisList[2], fakePopVortex.axisList[3]], [fakePopVortex.axisList[0], fakePopVortex.axisList[1]]);
  // var fakePopPivotThree = new PivotTable("tableThree", fakePopVortex, [fakePopVortex.axisList[0], fakePopVortex.axisList[1], fakePopVortex.axisList[2]], [fakePopVortex.axisList[3]]);
  // var fakePopPivotFour  = new PivotTable("tableFour", fakePopVortex, [fakePopVortex.axisList[0], fakePopVortex.axisList[1], fakePopVortex.axisList[2], fakePopVortex.axisList[3]], []);
  // var fakePopPivotFour  = new PivotTable("tableFour", fakePopVortex, [], [fakePopVortex.axisList[0], fakePopVortex.axisList[1], fakePopVortex.axisList[2], fakePopVortex.axisList[3]]);

  gastaxPivot.display();
  fakePopPivot.display();
  // fakePopPivotThree.display();
  // fakePopPivotFour.display();
  
  // var literacyVortex = makeLiteracyDataVortex();
  // var literacyPivot = new PivotTable("tableFour", literacyVortex, [literacyVortex.axisList[1]], [literacyVortex.axisList[0], literacyVortex.axisList[2]]);
  // literacyPivot.display();
}


// ===================================================================
// RE-USABLE HELPER FUNCTIONS
//   |
//   |
//   V

// -------------------------------------------------------------------
// Given an object, get all the values of all the object's properties,
// and display them in the debug <textarea> at the bottom of the page.
// -------------------------------------------------------------------
function displayObjectInDebugTextarea(someObject) {
  var outputText = "";
  for (var i in someObject) {
    outputText += i + " == " + someObject[i] + "\n";
  }
  displayDebugText(outputText);
}

// -------------------------------------------------------------------
// Given a text string, display the text in the debug <textarea> at
// the bottom of the page.
// -------------------------------------------------------------------
function displayDebugText(someText) {
  numberOfCallsToDebug++;
  if (numberOfCallsToDebug > 20) {
    return;
  }
  var elementDebugOutput = document.getElementById("debugOutput");
  elementDebugOutput.value += someText + "\n\n============================\n\n";
  elementDebugOutput.style.visibility = "visible";
  elementDebugOutput.style.display = "block";
}


// ===================================================================
// REGISTER FOR WINDOW EVENTS
//   |
//   |
//   V

window.onload = onLoad;
window.onerror = displayObjectInDebugTextarea;
// window.onresize = onWindowResize;

// THE END
// ===================================================================
