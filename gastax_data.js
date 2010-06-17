/*****************************************************************************
 gastax_data.js
 
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

function makeGastaxDataVortex() {
  var metricAccounts = new Metric("Gas Tax Accounting", Datatype.MONEY);
  
  // Axes
  var axisYear = new Axis("Year");
  var axisCharity = new Axis("Charity");
  var axisForm = new Axis("Form");
  
  // Year buckets
  var bucketYear2001 = axisYear.makeNewBucket("2001");
  var bucketYear2002 = axisYear.makeNewBucket("2002");
  var bucketYear2003 = axisYear.makeNewBucket("2003");

  // Charity buckets
  var bucketCharityGreenbelt = axisCharity.makeNewBucket("Greenbelt Alliance");
  var bucketCharityITDP      = axisCharity.makeNewBucket("Inst. For TDP");
  var bucketCharityIBF       = axisCharity.makeNewBucket("Intl. Bike Fund");
  var bucketCharityNEI       = axisCharity.makeNewBucket("Nortwest Earth Inst.");
  var bucketCharityPlantIt   = axisCharity.makeNewBucket("Plant-it 2020");
  var bucketCharityRMI       = axisCharity.makeNewBucket("Rocky Mountain Inst.");
  var bucketCharityNature    = axisCharity.makeNewBucket("Nature Conservancy");
  var bucketCharityTrees     = axisCharity.makeNewBucket("Trees for the Future");
  var bucketCharityUCS       = axisCharity.makeNewBucket("Union of Con. Sci.");

  // Amount buckets
  var bucketFormCash      = axisForm.makeNewBucket("Cash");
  var bucketFormStock     = axisForm.makeNewBucket("Stock");
  var bucketFormGoods     = axisForm.makeNewBucket("Goods");
  var bucketFormServices  = axisForm.makeNewBucket("Services");


  var gastaxDataVortex = new DataVortex([axisYear, axisCharity, axisForm]);
  gastaxDataVortex.metricList.push(metricAccounts);
  
  // --------------
  // bucketYear2001
  // --------------
  gastaxDataVortex.setValue(metricAccounts,  61.46, [bucketYear2001, bucketCharityGreenbelt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityGreenbelt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  61.46, [bucketYear2001, bucketCharityGreenbelt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityGreenbelt, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  92.18, [bucketYear2001, bucketCharityITDP, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityITDP, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  92.18, [bucketYear2001, bucketCharityITDP, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityITDP, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 178.22, [bucketYear2001, bucketCharityIBF, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityIBF, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 178.22, [bucketYear2001, bucketCharityIBF, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityIBF, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2001, bucketCharityNEI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2001, bucketCharityNEI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2001, bucketCharityNEI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2001, bucketCharityNEI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityPlantIt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityPlantIt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityPlantIt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityPlantIt, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityRMI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityRMI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityRMI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityRMI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityNature, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityNature, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityNature, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityNature, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityTrees, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityTrees, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts,  98.33, [bucketYear2001, bucketCharityTrees, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityTrees, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 135.20, [bucketYear2001, bucketCharityUCS, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityUCS, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 135.20, [bucketYear2001, bucketCharityUCS, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2001, bucketCharityUCS, bucketFormServices])


  // --------------
  // bucketYear2002
  // --------------
  gastaxDataVortex.setValue(metricAccounts, 113.96, [bucketYear2002, bucketCharityGreenbelt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2002, bucketCharityGreenbelt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 175.42, [bucketYear2002, bucketCharityGreenbelt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2002, bucketCharityGreenbelt, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 239.32, [bucketYear2002, bucketCharityITDP, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,  82.00, [bucketYear2002, bucketCharityITDP, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 331.50, [bucketYear2002, bucketCharityITDP, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 332.00, [bucketYear2002, bucketCharityITDP, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 199.43, [bucketYear2002, bucketCharityIBF, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 128.00, [bucketYear2002, bucketCharityIBF, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 377.65, [bucketYear2002, bucketCharityIBF, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 378.00, [bucketYear2002, bucketCharityIBF, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 113.96, [bucketYear2002, bucketCharityNEI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 114.00, [bucketYear2002, bucketCharityNEI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 113.96, [bucketYear2002, bucketCharityNEI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 114.00, [bucketYear2002, bucketCharityNEI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 170.94, [bucketYear2002, bucketCharityPlantIt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,  19.00, [bucketYear2002, bucketCharityPlantIt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 269.27, [bucketYear2002, bucketCharityPlantIt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 269.00, [bucketYear2002, bucketCharityPlantIt, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 182.34, [bucketYear2002, bucketCharityRMI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,  31.00, [bucketYear2002, bucketCharityRMI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 280.67, [bucketYear2002, bucketCharityRMI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 281.00, [bucketYear2002, bucketCharityRMI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 182.34, [bucketYear2002, bucketCharityNature, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,  31.00, [bucketYear2002, bucketCharityNature, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 280.67, [bucketYear2002, bucketCharityNature, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 281.00, [bucketYear2002, bucketCharityNature, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 113.96, [bucketYear2002, bucketCharityTrees, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2002, bucketCharityTrees, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 212.29, [bucketYear2002, bucketCharityTrees, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2002, bucketCharityTrees, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 222.23, [bucketYear2002, bucketCharityUCS, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 107.00, [bucketYear2002, bucketCharityUCS, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 357.43, [bucketYear2002, bucketCharityUCS, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 357.00, [bucketYear2002, bucketCharityUCS, bucketFormServices])

  
  // --------------
  // bucketYear2003
  // --------------
  gastaxDataVortex.setValue(metricAccounts,  84.10, [bucketYear2003, bucketCharityGreenbelt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2003, bucketCharityGreenbelt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 259.52, [bucketYear2003, bucketCharityGreenbelt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityGreenbelt, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 105.72, [bucketYear2003, bucketCharityITDP, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityITDP, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 437.23, [bucketYear2003, bucketCharityITDP, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 582.00, [bucketYear2003, bucketCharityITDP, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 138.16, [bucketYear2003, bucketCharityIBF, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityIBF, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 515.82, [bucketYear2003, bucketCharityIBF, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 628.00, [bucketYear2003, bucketCharityIBF, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts,  84.10, [bucketYear2003, bucketCharityNEI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2003, bucketCharityNEI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 198.06, [bucketYear2003, bucketCharityNEI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 114.00, [bucketYear2003, bucketCharityNEI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 105.72, [bucketYear2003, bucketCharityPlantIt, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityPlantIt, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 375.00, [bucketYear2003, bucketCharityPlantIt, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 519.00, [bucketYear2003, bucketCharityPlantIt, bucketFormServices])
  
  gastaxDataVortex.setValue(metricAccounts, 105.72, [bucketYear2003, bucketCharityRMI, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityRMI, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 386.39, [bucketYear2003, bucketCharityRMI, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 531.00, [bucketYear2003, bucketCharityRMI, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 116.54, [bucketYear2003, bucketCharityNature, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityNature, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 397.21, [bucketYear2003, bucketCharityNature, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 531.00, [bucketYear2003, bucketCharityNature, bucketFormServices])
  
  gastaxDataVortex.setValue(metricAccounts, 105.72, [bucketYear2003, bucketCharityTrees, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts,   0.00, [bucketYear2003, bucketCharityTrees, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 318.02, [bucketYear2003, bucketCharityTrees, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityTrees, bucketFormServices])

  gastaxDataVortex.setValue(metricAccounts, 127.35, [bucketYear2003, bucketCharityUCS, bucketFormCash])
  gastaxDataVortex.setValue(metricAccounts, 250.00, [bucketYear2003, bucketCharityUCS, bucketFormStock])
  gastaxDataVortex.setValue(metricAccounts, 484.78, [bucketYear2003, bucketCharityUCS, bucketFormGoods])
  gastaxDataVortex.setValue(metricAccounts, 607.00, [bucketYear2003, bucketCharityUCS, bucketFormServices])

  return gastaxDataVortex;
}
