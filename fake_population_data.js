/*****************************************************************************
 fake_population_data.js
 
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

function makeFakePopulationDataVortex() {
  var metricPopulation = new Metric("Population (fake)", Datatype.STRING);
  
  // Axes
  var axisGender = new Axis("Gender");
  var axisCountry = new Axis("Country");
  var axisYear = new Axis("Year");
  var axisRuralUrban = new Axis("Rural/Urban");

  // Gender buckets
  var bucketGenderBoth = axisGender.makeNewBucket("Both sexes", true);
  var bucketGenderMale = axisGender.makeNewBucket("Male");
  var bucketGenderFemale = axisGender.makeNewBucket("Female");

  // Country buckets
  var bucketCountryAll = axisCountry.makeNewBucket("All", true);
  var bucketCountryIndia = axisCountry.makeNewBucket("India");
  var bucketCountryChina = axisCountry.makeNewBucket("China");

  // Rural/Urban buckets
  var bucketRuralUrbanBoth = axisRuralUrban.makeNewBucket("Both", true);
  var bucketRural = axisRuralUrban.makeNewBucket("Rural");
  var bucketUrban = axisRuralUrban.makeNewBucket("Urban");
  
  // Year buckets
  var bucketYear1948 = axisYear.makeNewBucket("1948");
  var bucketYear1949 = axisYear.makeNewBucket("1949");


  var populationDataVortex = new DataVortex([axisGender, axisCountry, axisRuralUrban, axisYear]);
  populationDataVortex.metricList.push(metricPopulation);
  
  // --------------
  // bucketYear1948
  // --------------


  // bucketRuralUrbanBoth
  populationDataVortex.setValue(metricPopulation, "mf_ic_ru_48", [bucketGenderBoth, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_ic_ru_48", [bucketGenderMale, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_ic_ru_48", [bucketGenderFemale, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_i_ru_48", [bucketGenderBoth, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_i_ru_48", [bucketGenderMale, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_i_ru_48", [bucketGenderFemale, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_c_ru_48", [bucketGenderBoth, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_c_ru_48", [bucketGenderMale, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_c_ru_48", [bucketGenderFemale, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1948])
  
  
  // bucketRural
  populationDataVortex.setValue(metricPopulation, "mf_ic_r_48", [bucketGenderBoth, bucketCountryAll, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_ic_r_48", [bucketGenderMale, bucketCountryAll, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_ic_r_48", [bucketGenderFemale, bucketCountryAll, bucketRural, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_i_r_48", [bucketGenderBoth, bucketCountryIndia, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_i_r_48", [bucketGenderMale, bucketCountryIndia, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_i_r_48", [bucketGenderFemale, bucketCountryIndia, bucketRural, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_c_r_48", [bucketGenderBoth, bucketCountryChina, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_c_r_48", [bucketGenderMale, bucketCountryChina, bucketRural, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_c_r_48", [bucketGenderFemale, bucketCountryChina, bucketRural, bucketYear1948])

  
  // bucketUrban
  populationDataVortex.setValue(metricPopulation, "mf_ic_u_48", [bucketGenderBoth, bucketCountryAll, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_ic_u_48", [bucketGenderMale, bucketCountryAll, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_ic_u_48", [bucketGenderFemale, bucketCountryAll, bucketUrban, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_i_u_48", [bucketGenderBoth, bucketCountryIndia, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_i_u_48", [bucketGenderMale, bucketCountryIndia, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_i_u_48", [bucketGenderFemale, bucketCountryIndia, bucketUrban, bucketYear1948])

  populationDataVortex.setValue(metricPopulation, "mf_c_u_48", [bucketGenderBoth, bucketCountryChina, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "m_c_u_48", [bucketGenderMale, bucketCountryChina, bucketUrban, bucketYear1948])
  populationDataVortex.setValue(metricPopulation, "f_c_u_48", [bucketGenderFemale, bucketCountryChina, bucketUrban, bucketYear1948])

  
  // --------------
  // bucketYear1949
  // --------------

  // bucketRuralUrbanBoth
  populationDataVortex.setValue(metricPopulation, 1119, [bucketGenderBoth, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2119, [bucketGenderMale, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3119, [bucketGenderFemale, bucketCountryAll, bucketRuralUrbanBoth, bucketYear1949])
  
  populationDataVortex.setValue(metricPopulation, 1219, [bucketGenderBoth, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2219, [bucketGenderMale, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3219, [bucketGenderFemale, bucketCountryIndia, bucketRuralUrbanBoth, bucketYear1949])

  populationDataVortex.setValue(metricPopulation, 1319, [bucketGenderBoth, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2319, [bucketGenderMale, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3319, [bucketGenderFemale, bucketCountryChina, bucketRuralUrbanBoth, bucketYear1949])
  
  
  // bucketRural
  populationDataVortex.setValue(metricPopulation, 1129, [bucketGenderBoth, bucketCountryAll, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2129, [bucketGenderMale, bucketCountryAll, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3129, [bucketGenderFemale, bucketCountryAll, bucketRural, bucketYear1949])

  populationDataVortex.setValue(metricPopulation, 1229, [bucketGenderBoth, bucketCountryIndia, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2229, [bucketGenderMale, bucketCountryIndia, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3229, [bucketGenderFemale, bucketCountryIndia, bucketRural, bucketYear1949])

  populationDataVortex.setValue(metricPopulation, 1329, [bucketGenderBoth, bucketCountryChina, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2329, [bucketGenderMale, bucketCountryChina, bucketRural, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3329, [bucketGenderFemale, bucketCountryChina, bucketRural, bucketYear1949])

  
  // bucketUrban
  populationDataVortex.setValue(metricPopulation, 1139, [bucketGenderBoth, bucketCountryAll, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2139, [bucketGenderMale, bucketCountryAll, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3139, [bucketGenderFemale, bucketCountryAll, bucketUrban, bucketYear1949])

  populationDataVortex.setValue(metricPopulation, 1239, [bucketGenderBoth, bucketCountryIndia, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2239, [bucketGenderMale, bucketCountryIndia, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3239, [bucketGenderFemale, bucketCountryIndia, bucketUrban, bucketYear1949])

  populationDataVortex.setValue(metricPopulation, 1339, [bucketGenderBoth, bucketCountryChina, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 2339, [bucketGenderMale, bucketCountryChina, bucketUrban, bucketYear1949])
  populationDataVortex.setValue(metricPopulation, 3339, [bucketGenderFemale, bucketCountryChina, bucketUrban, bucketYear1949])

  return populationDataVortex;
}
