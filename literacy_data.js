/*****************************************************************************
 literacy_data.js
 
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
// setDataModelVariables()
//
// Initializes global variables.
// -------------------------------------------------------------------
function makeLiteracyDataVortex() {
  metricLiteracyRate = new Metric("Literacy rates, aged 15-24, per cent (UNESCO)", Datatype.PERCENT);

  // Axes
  axisGender = new Axis("Gender");
  axisCountry = new Axis("Country");
  axisTime = new Axis("Time");

  // Gender buckets
  bucketGenderBoth = axisGender.makeNewBucket("Both sexes", true);
  bucketGenderMale = axisGender.makeNewBucket("Male");
  bucketGenderFemale = axisGender.makeNewBucket("Female");
 
  // Country buckets
  bucketCountryAll = axisCountry.makeNewBucket("All", true);
  
  // Year buckets
  bucket1990 = axisTime.makeNewBucket("1990");
  bucket1991 = axisTime.makeNewBucket("1991");
  bucket1992 = axisTime.makeNewBucket("1992");
  bucket1993 = axisTime.makeNewBucket("1993");
  bucket1994 = axisTime.makeNewBucket("1994");
  bucket1995 = axisTime.makeNewBucket("1995");
  bucket1996 = axisTime.makeNewBucket("1996");
  bucket1997 = axisTime.makeNewBucket("1997");
  bucket1998 = axisTime.makeNewBucket("1998");
  bucket1999 = axisTime.makeNewBucket("1999");
  bucket2000 = axisTime.makeNewBucket("2000");
  bucket2001 = axisTime.makeNewBucket("2001");
  bucket2002 = axisTime.makeNewBucket("2002");
  bucket2003 = axisTime.makeNewBucket("2003");
  
  giantDataVortex = new DataVortex([axisGender, axisCountry, axisTime]);
  giantDataVortex.metricList.push(metricLiteracyRate);
  parseDataSet();
  return giantDataVortex;
}

// -------------------------------------------------------------------
// parseRecord()
// -------------------------------------------------------------------
function parseRecord(genderBucket, countryName, v1990, v1991, v1992, v1993, v1994, v1995, v1996, v1997, v1998, v1999, v2000, v2001, v2002, v2003, v2004) {
  var countryBucket = axisCountry.getBucketFromName(countryName);
  if (countryBucket == null) {
    countryBucket = axisCountry.makeNewBucket(countryName);
  }
  giantDataVortex.setValue(metricLiteracyRate, v1990, [genderBucket, countryBucket, bucket1990]);
  giantDataVortex.setValue(metricLiteracyRate, v1991, [genderBucket, countryBucket, bucket1991]);
  giantDataVortex.setValue(metricLiteracyRate, v1992, [genderBucket, countryBucket, bucket1992]);
  giantDataVortex.setValue(metricLiteracyRate, v1993, [genderBucket, countryBucket, bucket1993]);
  giantDataVortex.setValue(metricLiteracyRate, v1994, [genderBucket, countryBucket, bucket1994]);
  giantDataVortex.setValue(metricLiteracyRate, v1995, [genderBucket, countryBucket, bucket1995]);
  giantDataVortex.setValue(metricLiteracyRate, v1996, [genderBucket, countryBucket, bucket1996]);
  giantDataVortex.setValue(metricLiteracyRate, v1997, [genderBucket, countryBucket, bucket1997]);
  giantDataVortex.setValue(metricLiteracyRate, v1998, [genderBucket, countryBucket, bucket1998]);
  giantDataVortex.setValue(metricLiteracyRate, v1999, [genderBucket, countryBucket, bucket1999]);
  giantDataVortex.setValue(metricLiteracyRate, v2000, [genderBucket, countryBucket, bucket2000]);
  giantDataVortex.setValue(metricLiteracyRate, v2001, [genderBucket, countryBucket, bucket2001]);
  giantDataVortex.setValue(metricLiteracyRate, v2002, [genderBucket, countryBucket, bucket2002]);
  giantDataVortex.setValue(metricLiteracyRate, v2003, [genderBucket, countryBucket, bucket2003]);
}

// -------------------------------------------------------------------
// parseDataSet()
// -------------------------------------------------------------------
function parseDataSet() {

  // both sexes
  parseRecord(bucketGenderBoth, "All",100,100,100,100,100,100,100,100,100,100,100,100,100,100);
  parseRecord(bucketGenderBoth, "Albania",94.8,95.1,95.5,95.8,96.2,96.6,96.8,97.1,97.3,97.6,97.8,98,98.2,98.3);
  parseRecord(bucketGenderBoth, "Algeria",77.3,78.6,79.8,81.1,82.4,83.7,84.6,85.6,86.6,87.5,88.5,89.2,89.9,90.6);
  parseRecord(bucketGenderBoth, "Argentina",98.2,98.2,98.3,98.3,98.3,98.4,98.4,98.5,98.5,98.5,98.6,98.6,98.6,98.7);
  parseRecord(bucketGenderBoth, "Armenia",99.5,99.6,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Bahamas",96.5,96.5,96.6,96.7,96.8,96.9,97,97,97.1,97.2,97.2,97.3,97.4,97.5);
  parseRecord(bucketGenderBoth, "Bahrain",95.6,96,96.4,96.7,97.1,97.4,97.6,97.8,98,98.2,98.4,98.5,98.6,98.7);
  parseRecord(bucketGenderBoth, "Bangladesh",42,42.7,43.3,43.9,44.5,45.1,45.8,46.5,47.1,47.8,48.4,49.1,49.7,50.3);
  parseRecord(bucketGenderBoth, "Barbados",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Belarus",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Belize",96,96.2,96.5,96.7,96.9,97.1,97.3,97.5,97.6,97.8,98,98.1,98.2,98.4);
  parseRecord(bucketGenderBoth, "Benin",40.4,41.8,43.1,44.4,45.7,47,48.3,49.5,50.7,52,53.1,54.3,55.5,56.7);
  parseRecord(bucketGenderBoth, "Bolivia",92.6,92.9,93.3,93.7,94,94.4,94.7,95,95.3,95.6,95.8,96.1,96.3,96.5);
  parseRecord(bucketGenderBoth, "Botswana",83.3,83.8,84.4,84.9,85.5,86.1,86.5,86.9,87.4,87.8,88.3,88.7,89.1,89.6);
  parseRecord(bucketGenderBoth, "Brazil",91.8,92.3,92.8,93.2,93.7,94.1,94.4,94.6,94.9,95.1,95.3,95.5,95.6,95.8);
  parseRecord(bucketGenderBoth, "Brunei Darussalam",97.9,98.1,98.3,98.6,98.8,99,99.1,99.2,99.2,99.3,99.4,99.4,99.5,99.5);
  parseRecord(bucketGenderBoth, "Bulgaria",99.4,99.5,99.5,99.5,99.5,99.6,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderBoth, "Burkina Faso",24.9,25.8,26.7,27.6,28.5,29.5,30.5,31.5,32.6,33.6,34.6,35.8,36.9,38);
  parseRecord(bucketGenderBoth, "Burundi",51.6,52.8,54.1,55.3,56.6,57.9,59.1,60.3,61.5,62.7,63.9,65.1,66.1,67.2);
  parseRecord(bucketGenderBoth, "Cambodia",73.5,73.9,74.4,74.8,75.3,75.8,76.4,77,77.7,78.5,79.1,79.7,80.3,80.8);
  parseRecord(bucketGenderBoth, "Cameroon",81.1,82.1,83.2,84.2,85.2,86.2,86.9,87.7,88.5,89.2,90,90.5,91.1,91.6);
  parseRecord(bucketGenderBoth, "Cape Verde",81.5,82.2,82.9,83.6,84.3,85,85.6,86.2,86.8,87.4,88,88.6,89.1,89.6);
  parseRecord(bucketGenderBoth, "Central African Republic",52.1,53.6,55.2,56.8,58.4,60,61.5,62.9,64.4,65.9,67.3,68.7,70,71.3);
  parseRecord(bucketGenderBoth, "Chad",48,49.9,51.7,53.5,55.4,57.3,59.2,61.1,63,64.8,66.6,68.3,69.9,71.4);
  parseRecord(bucketGenderBoth, "Chile",98.1,98.2,98.2,98.3,98.4,98.5,98.6,98.6,98.7,98.8,98.9,98.9,99,99);
  parseRecord(bucketGenderBoth, "China",95.3,95.6,95.8,96,96.3,96.5,96.8,97,97.3,97.5,97.7,97.9,98.1,98.3);
  parseRecord(bucketGenderBoth, "China, Hong Kong Special Administrative Region",98.2,98.4,98.5,98.7,98.8,99,99.1,99.1,99.2,99.3,99.4,99.4,99.4,99.4);
  parseRecord(bucketGenderBoth, "China, Macao Special Administrative Region",97.2,97.4,97.6,97.8,98,98.2,98.4,98.5,98.7,98.8,98.9,99,99,99.1);
  parseRecord(bucketGenderBoth, "Colombia",94.9,95.1,95.4,95.6,95.8,96,96.2,96.3,96.5,96.7,96.9,97,97.2,97.3);
  parseRecord(bucketGenderBoth, "Comoros",56.7,56.9,57.1,57.2,57.5,57.7,57.9,58.1,58.3,58.5,58.6,58.8,59,59.2);
  parseRecord(bucketGenderBoth, "Congo",92.5,93.1,93.8,94.4,95,95.6,96,96.3,96.7,97,97.4,97.6,97.8,98);
  parseRecord(bucketGenderBoth, "Costa Rica",97.4,97.5,97.6,97.7,97.8,97.9,97.9,98,98.1,98.2,98.3,98.3,98.4,98.5);
  parseRecord(bucketGenderBoth, "Cote d'Ivoire",52.6,53.5,54.4,55.3,56.2,57,57.9,58.8,59.7,60.6,61.5,62.4,63.4,64.4);
  parseRecord(bucketGenderBoth, "Croatia",99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Cuba",99.3,99.3,99.4,99.5,99.6,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Cyprus",99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Democratic Republic of the Congo",68.9,70.4,71.7,73.1,74.4,75.7,77,78.2,79.4,80.6,81.7,82.7,83.7,84.6);
  parseRecord(bucketGenderBoth, "Djibouti",73.2,74.5,75.7,76.7,77.8,79,80.1,81.1,82.1,83.1,84,84.9,85.7,86.5);
  parseRecord(bucketGenderBoth, "Dominican Republic",87.5,87.9,88.3,88.7,89.1,89.5,89.8,90.1,90.5,90.8,91.1,91.4,91.7,92);
  parseRecord(bucketGenderBoth, "Ecuador",95.5,95.7,95.9,96,96.2,96.4,96.6,96.7,96.9,97,97.2,97.3,97.5,97.6);
  parseRecord(bucketGenderBoth, "Egypt",61.3,62.2,63,63.9,64.8,65.6,66.5,67.3,68.1,68.9,69.7,70.5,71.2,72);
  parseRecord(bucketGenderBoth, "El Salvador",83.8,84.3,84.8,85.2,85.7,86.1,86.5,86.9,87.3,87.7,88.2,88.5,88.9,89.3);
  parseRecord(bucketGenderBoth, "Equatorial Guinea",92.7,93.3,93.7,94.2,94.7,95.2,95.6,95.9,96.3,96.6,96.9,97.2,97.4,97.6);
  parseRecord(bucketGenderBoth, "Eritrea",60.9,61.8,62.8,63.8,64.8,65.7,66.6,67.5,68.4,69.3,70.2,71.1,72,72.8);
  parseRecord(bucketGenderBoth, "Estonia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.7,99.7,99.7,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderBoth, "Ethiopia",43,44.2,45.4,46.6,47.8,49,50.2,51.4,52.6,53.8,55,56.2,57.4,58.6);
  parseRecord(bucketGenderBoth, "Fiji",97.8,98,98.1,98.3,98.4,98.6,98.7,98.8,98.9,99,99.1,99.2,99.2,99.3);
  parseRecord(bucketGenderBoth, "Gambia",42.2,43.7,45.2,46.6,48.2,49.7,51.2,52.6,54.2,55.7,57.2,58.6,60.1,61.6);
  parseRecord(bucketGenderBoth, "Ghana",81.8,82.8,83.9,84.9,86,87.1,87.9,88.7,89.5,90.3,91.1,91.6,92.2,92.7);
  parseRecord(bucketGenderBoth, "Greece",99.5,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Guatemala",73.4,74,74.7,75.3,75.9,76.5,77,77.6,78.1,78.6,79.1,79.6,80.1,80.6);
  parseRecord(bucketGenderBoth, "Guinea-Bissau",44.1,45.5,46.8,48.2,49.6,51,52.4,53.8,55.3,56.7,58.1,59.5,60.8,62.2);
  parseRecord(bucketGenderBoth, "Guyana",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Haiti",54.8,55.8,56.8,57.8,58.8,59.7,60.7,61.6,62.5,63.5,64.4,65.3,66.2,67);
  parseRecord(bucketGenderBoth, "Honduras",79.7,80.2,80.8,81.4,82,82.5,83,83.5,84,84.6,85.1,85.5,85.9,86.4);
  parseRecord(bucketGenderBoth, "Hungary",99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "India",64.3,65.1,65.9,66.8,67.6,68.5,69.3,70.1,70.9,71.8,72.6,73.3,74.1,74.8);
  parseRecord(bucketGenderBoth, "Indonesia",95,95.3,95.6,95.9,96.3,96.6,96.8,97,97.3,97.5,97.7,97.9,98,98.2);
  parseRecord(bucketGenderBoth, "Iran (Islamic Republic of)",86.3,87.2,88.2,89.1,90,90.9,91.5,92.1,92.7,93.2,93.8,94.2,94.6,95.1);
  parseRecord(bucketGenderBoth, "Iraq",41,41.3,41.7,42,42.4,42.7,43.1,43.5,43.8,44.2,44.6,45,45.4,45.7);
  parseRecord(bucketGenderBoth, "Israel",98.7,98.8,98.8,98.9,99,99,99.1,99.2,99.3,99.3,99.4,99.5,99.5,99.6);
  parseRecord(bucketGenderBoth, "Italy",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Jamaica",91.2,91.5,91.8,92.1,92.4,92.8,93,93.3,93.5,93.8,94,94.3,94.5,94.7);
  parseRecord(bucketGenderBoth, "Jordan",96.7,97,97.2,97.5,97.8,98.1,98.3,98.5,98.8,99,99.2,99.3,99.4,99.5);
  parseRecord(bucketGenderBoth, "Kazakhstan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Kenya",89.8,90.4,91.1,91.7,92.3,92.9,93.4,93.8,94.3,94.7,95.1,95.5,95.8,96.1);
  parseRecord(bucketGenderBoth, "Korea, Republic of",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Kuwait",87.5,88.1,88.7,89.2,89.8,90.4,90.8,91.2,91.6,92,92.4,92.7,93.1,93.4);
  parseRecord(bucketGenderBoth, "Lao People's Democratic Republic",70.1,70.9,71.6,72.4,73.2,74,74.8,75.6,76.4,77.1,77.9,78.6,79.3,80);
  parseRecord(bucketGenderBoth, "Latvia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Lebanon",92.1,92.4,92.7,93.1,93.4,93.7,94,94.3,94.6,94.9,95.2,95.4,95.6,95.8);
  parseRecord(bucketGenderBoth, "Lesotho",87.2,87.5,87.9,88.3,88.6,89,89.3,89.7,89.9,90.2,90.5,90.8,91.1,91.4);
  parseRecord(bucketGenderBoth, "Liberia",57.2,58.6,60.1,61.6,63,64.2,65.1,65.9,66.7,67.7,68.8,69.8,70.8,71.9);
  parseRecord(bucketGenderBoth, "Libyan Arab Jamahiriya",91,91.6,92.3,92.9,93.6,94.3,94.7,95.2,95.6,96,96.5,96.7,97,97.2);
  parseRecord(bucketGenderBoth, "Lithuania",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Madagascar",72.2,73.1,73.9,74.7,75.5,76.3,77,77.8,78.6,79.4,80.1,80.8,81.5,82.2);
  parseRecord(bucketGenderBoth, "Malawi",63.2,64,64.8,65.7,66.5,67.3,68.1,68.9,69.6,70.3,71.1,71.8,72.5,73.2);
  parseRecord(bucketGenderBoth, "Malaysia",94.8,95.1,95.4,95.7,96.1,96.4,96.6,96.9,97.1,97.3,97.6,97.7,97.9,98);
  parseRecord(bucketGenderBoth, "Maldives",98.1,98.2,98.3,98.4,98.5,98.6,98.7,98.8,98.9,99,99.1,99.1,99.2,99.2);
  parseRecord(bucketGenderBoth, "Mali",27.6,28.5,29.3,30.1,30.9,31.7,32.6,33.5,34.4,35.3,36.1,37.1,38,38.9);
  parseRecord(bucketGenderBoth, "Malta",97.5,97.6,97.8,97.9,98,98.1,98.2,98.3,98.4,98.5,98.6,98.6,98.7,98.8);
  parseRecord(bucketGenderBoth, "Martinique",99.6,99.6,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Mauritania",45.8,46.1,46.4,46.7,47,47.3,47.6,48,48.3,48.6,48.9,49.3,49.6,50);
  parseRecord(bucketGenderBoth, "Mauritius",91.1,91.4,91.7,92,92.3,92.6,92.9,93.1,93.3,93.6,93.8,94,94.2,94.5);
  parseRecord(bucketGenderBoth, "Mexico",95.2,95.4,95.6,95.8,96,96.2,96.4,96.5,96.7,96.9,97,97.2,97.3,97.4);
  parseRecord(bucketGenderBoth, "Mongolia",98.9,98.9,98.9,98.9,98.9,98.9,98.9,98.9,99,99,99,99.1,99.1,99.1);
  parseRecord(bucketGenderBoth, "Morocco",55.3,56.6,57.8,59.1,60.3,61.5,62.7,63.8,65,66.1,67.3,68.4,69.5,70.6);
  parseRecord(bucketGenderBoth, "Mozambique",48.8,50,51.1,52.3,53.5,54.7,55.9,57,58.2,59.4,60.6,61.7,62.8,64);
  parseRecord(bucketGenderBoth, "Myanmar",88.2,88.5,88.8,89.1,89.3,89.6,89.9,90.2,90.4,90.7,90.9,91.2,91.4,91.6);
  parseRecord(bucketGenderBoth, "Namibia",87.4,87.9,88.4,88.8,89.3,89.7,90.1,90.5,90.9,91.2,91.6,91.9,92.3,92.6);
  parseRecord(bucketGenderBoth, "Nepal",46.6,48.1,49.7,51.3,53,54.6,55.8,57,58.2,59.3,60.4,61.6,62.7,63.8);
  parseRecord(bucketGenderBoth, "Netherlands Antilles",97.5,97.6,97.6,97.7,97.8,97.9,97.9,98,98.1,98.1,98.2,98.3,98.3,98.4);
  parseRecord(bucketGenderBoth, "Nicaragua",68.2,68.6,68.9,69.3,69.6,69.9,70.3,70.6,71,71.3,71.6,72,72.3,72.6);
  parseRecord(bucketGenderBoth, "Niger",17,17.6,18.1,18.7,19.2,19.8,20.4,21.1,21.7,22.4,23,23.8,24.5,25.2);
  parseRecord(bucketGenderBoth, "Nigeria",73.6,75.1,76.6,78.1,79.6,81.1,82.3,83.4,84.6,85.8,86.9,87.8,88.6,89.4);
  parseRecord(bucketGenderBoth, "Oman",85.6,87.3,88.9,90.6,92.3,94,94.7,95.5,96.3,97.1,97.9,98.2,98.5,98.8);
  parseRecord(bucketGenderBoth, "Pakistan",47.4,48.6,49.7,50.8,51.9,53,53.8,54.6,55.4,56.2,57,57.8,58.7,59.6);
  parseRecord(bucketGenderBoth, "Panama",95.3,95.4,95.6,95.7,95.9,96,96.2,96.3,96.5,96.6,96.7,96.9,97,97.1);
  parseRecord(bucketGenderBoth, "Papua New Guinea",68.6,69.4,70.1,70.8,71.5,72.2,72.9,73.6,74.3,75,75.7,76.3,76.9,77.6);
  parseRecord(bucketGenderBoth, "Paraguay",95.6,95.7,95.9,96,96.2,96.4,96.5,96.7,96.8,96.9,97.1,97.2,97.3,97.4);
  parseRecord(bucketGenderBoth, "Peru",94.5,94.7,95,95.2,95.5,95.7,95.9,96.1,96.3,96.5,96.7,96.9,97.1,97.2);
  parseRecord(bucketGenderBoth, "Philippines",97.3,97.4,97.6,97.8,97.9,98.1,98.2,98.4,98.5,98.6,98.7,98.8,98.9,99);
  parseRecord(bucketGenderBoth, "Poland",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Portugal",99.5,99.6,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Puerto Rico",96.1,96.3,96.5,96.6,96.8,96.9,97.1,97.2,97.3,97.4,97.5,97.6,97.7,97.8);
  parseRecord(bucketGenderBoth, "Qatar",90.3,90.9,91.4,91.9,92.5,93,93.4,93.7,94.1,94.4,94.8,95,95.3,95.6);
  parseRecord(bucketGenderBoth, "Republic of Moldova",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Reunion",95.1,95.4,95.6,95.9,96.1,96.4,96.6,96.8,97,97.2,97.5,97.6,97.7,97.9);
  parseRecord(bucketGenderBoth, "Romania",99.3,99.3,99.3,99.4,99.4,99.5,99.5,99.5,99.6,99.6,99.6,99.6,99.7,99.7);
  parseRecord(bucketGenderBoth, "Russian Federation",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Rwanda",72.7,73.9,75,76.2,77.4,78.6,79.6,80.5,81.5,82.5,83.4,84.2,84.9,85.7);
  parseRecord(bucketGenderBoth, "Samoa",99,99.1,99.1,99.2,99.2,99.2,99.3,99.3,99.3,99.4,99.4,99.4,99.5,99.5);
  parseRecord(bucketGenderBoth, "Saudi Arabia",85.4,86.2,87.1,87.9,88.8,89.6,90.2,90.8,91.4,92,92.7,93.1,93.5,94);
  parseRecord(bucketGenderBoth, "Senegal",40.1,41.2,42.2,43.3,44.3,45.4,46.5,47.5,48.6,49.7,50.7,51.8,52.9,54);
  parseRecord(bucketGenderBoth, "Singapore",99,99.1,99.2,99.3,99.5,99.6,99.6,99.6,99.7,99.7,99.7,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Slovenia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "South Africa",88.5,88.8,89.1,89.4,89.7,90,90.2,90.5,90.8,91,91.3,91.5,91.8,92);
  parseRecord(bucketGenderBoth, "Spain",99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Sri Lanka",95.1,95.3,95.4,95.6,95.8,96,96.2,96.3,96.5,96.7,96.8,96.9,97,97.2);
  parseRecord(bucketGenderBoth, "Sudan",65,66.3,67.6,68.9,70.2,71.5,72.6,73.8,74.9,76.1,77.2,78.1,79.1,80);
  parseRecord(bucketGenderBoth, "Swaziland",85.1,85.7,86.3,86.9,87.4,88,88.5,89,89.5,90,90.4,90.8,91.2,91.7);
  parseRecord(bucketGenderBoth, "Syrian Arab Republic",79.9,80.6,81.4,82.2,83,83.8,84.5,85.1,85.8,86.5,87.2,87.7,88.3,88.9);
  parseRecord(bucketGenderBoth, "Tajikistan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Thailand",98.1,98.2,98.3,98.4,98.5,98.6,98.6,98.7,98.8,98.8,98.9,99,99,99.1);
  parseRecord(bucketGenderBoth, "Togo",63.5,64.8,66,67.2,68.5,69.8,70.9,72.1,73.2,74.3,75.5,76.5,77.4,78.4);
  parseRecord(bucketGenderBoth, "Trinidad and Tobago",99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderBoth, "Tunisia",84.1,85.2,86.3,87.5,88.6,89.7,90.4,91.2,91.9,92.6,93.3,93.8,94.3,94.8);
  parseRecord(bucketGenderBoth, "Turkey",92.7,93.2,93.6,94,94.5,94.9,95.2,95.5,95.9,96.2,96.5,96.7,97,97.2);
  parseRecord(bucketGenderBoth, "Uganda",70.1,71,71.9,72.9,73.8,74.7,75.5,76.3,77.1,77.9,78.7,79.4,80.2,80.9);
  parseRecord(bucketGenderBoth, "Ukraine",99.8,99.8,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9);
  parseRecord(bucketGenderBoth, "United Arab Emirates",84.7,85.4,86,86.6,87.3,87.9,88.5,89,89.6,90.1,90.6,91,91.4,91.8);
  parseRecord(bucketGenderBoth, "United Republic of Tanzania",83.1,83.9,84.7,85.5,86.3,87.1,87.8,88.5,89.2,89.9,90.5,91.1,91.6,92.1);
  parseRecord(bucketGenderBoth, "Uruguay",98.7,98.7,98.8,98.8,98.8,98.9,98.9,98.9,99,99,99.1,99.1,99.1,99.2);
  parseRecord(bucketGenderBoth, "Uzbekistan",99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderBoth, "Venezuela",96,96.2,96.4,96.7,96.9,97.1,97.3,97.5,97.6,97.8,98,98.1,98.2,98.4);
  parseRecord(bucketGenderBoth, "Viet Nam",94.1,94.1,94.2,94.2,94.3,94.4,94.5,94.7,94.9,95,95.2,95.4,95.5,95.7);
  parseRecord(bucketGenderBoth, "Yemen",50,51.7,53.5,55.2,57,58.6,59.9,61.2,62.5,63.7,65,66.5,67.9,69.4);
  parseRecord(bucketGenderBoth, "Zambia",81.2,82,82.8,83.6,84.3,85.1,85.8,86.4,87,87.6,88.2,88.7,89.2,89.7);
  parseRecord(bucketGenderBoth, "Zimbabwe",93.9,94.3,94.7,95.1,95.5,95.9,96.2,96.4,96.7,96.9,97.2,97.4,97.6,97.8);

  // men
  parseRecord(bucketGenderMale, "All",100,100,100,100,100,100,100,100,100,100,100,100,100,100);
  parseRecord(bucketGenderMale, "Albania",97.4,97.6,97.8,98,98.2,98.4,98.6,98.7,98.8,99,99.1,99.2,99.3,99.4);
  parseRecord(bucketGenderMale, "Algeria",86.1,86.9,87.8,88.6,89.5,90.3,90.9,91.5,92.1,92.7,93.2,93.6,94,94.4);
  parseRecord(bucketGenderMale, "Argentina",98,98,98.1,98.1,98.1,98.2,98.2,98.2,98.3,98.3,98.3,98.4,98.4,98.4);
  parseRecord(bucketGenderMale, "Armenia",99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Bahamas",95.4,95.5,95.6,95.7,95.8,95.8,95.9,96,96.1,96.2,96.2,96.3,96.4,96.5);
  parseRecord(bucketGenderMale, "Bahrain",96.2,96.5,96.7,97,97.2,97.5,97.6,97.8,97.9,98.1,98.2,98.3,98.4,98.5);
  parseRecord(bucketGenderMale, "Bangladesh",50.7,51.3,51.9,52.4,53,53.6,54.2,54.8,55.4,56.1,56.7,57.2,57.8,58.3);
  parseRecord(bucketGenderMale, "Barbados",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Belarus",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Belize",95.4,95.6,95.9,96.1,96.3,96.5,96.7,96.8,97,97.1,97.3,97.4,97.5,97.7);
  parseRecord(bucketGenderMale, "Benin",56.6,58.1,59.5,61,62.5,63.9,65.3,66.6,67.9,69.2,70.5,71.6,72.7,73.9);
  parseRecord(bucketGenderMale, "Bolivia",96.2,96.4,96.6,96.8,97,97.2,97.3,97.5,97.7,97.8,98,98.1,98.2,98.4);
  parseRecord(bucketGenderMale, "Botswana",79.3,79.8,80.4,81,81.6,82.1,82.6,83.1,83.6,84.1,84.5,85,85.5,86);
  parseRecord(bucketGenderMale, "Brazil",90.5,91,91.5,91.9,92.4,92.8,93.1,93.3,93.5,93.7,94,94.1,94.3,94.4);
  parseRecord(bucketGenderMale, "Brunei Darussalam",97.6,97.8,97.9,98.1,98.3,98.4,98.6,98.7,98.8,98.9,99,99.1,99.2,99.3);
  parseRecord(bucketGenderMale, "Bulgaria",99.5,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Burkina Faso",35.7,36.7,37.7,38.7,39.7,40.6,41.7,42.7,43.8,44.8,45.8,46.9,47.9,48.9);
  parseRecord(bucketGenderMale, "Burundi",58.4,59.2,60,60.7,61.5,62.2,63,63.7,64.4,65.2,65.9,66.5,67.2,67.9);
  parseRecord(bucketGenderMale, "Cambodia",81.5,81.6,81.7,81.9,82,82.2,82.4,82.8,83.1,83.5,83.9,84.2,84.5,84.8);
  parseRecord(bucketGenderMale, "Cameroon",86.4,87,87.6,88.3,88.9,89.5,90,90.5,91,91.5,92,92.3,92.7,93.1);
  parseRecord(bucketGenderMale, "Cape Verde",87.1,87.5,88,88.5,88.9,89.4,89.8,90.2,90.6,91,91.3,91.7,92,92.3);
  parseRecord(bucketGenderMale, "Central African Republic",65.6,66.7,67.9,69,70.2,71.3,72.2,73.2,74.1,75,76,76.8,77.7,78.5);
  parseRecord(bucketGenderMale, "Chad",58.4,60,61.6,63.1,64.6,66.2,67.7,69.2,70.7,72.1,73.4,74.7,75.8,77);
  parseRecord(bucketGenderMale, "Chile",97.9,97.9,98,98.1,98.2,98.3,98.4,98.5,98.5,98.6,98.7,98.8,98.8,98.9);
  parseRecord(bucketGenderMale, "China",97.5,97.6,97.7,97.8,97.9,98,98.1,98.3,98.4,98.6,98.7,98.8,99,99.1);
  parseRecord(bucketGenderMale, "China, Hong Kong Special Administrative Region",98.5,98.5,98.6,98.7,98.7,98.8,98.8,98.9,98.9,99,99,99.1,99.1,99.1);
  parseRecord(bucketGenderMale, "China, Macao Special Administrative Region",99.2,99.3,99.4,99.4,99.5,99.6,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Colombia",94.3,94.5,94.7,94.9,95.1,95.3,95.5,95.7,95.9,96,96.2,96.4,96.5,96.7);
  parseRecord(bucketGenderMale, "Comoros",63.8,63.9,64.1,64.2,64.4,64.6,64.7,64.9,65,65.2,65.3,65.5,65.6,65.8);
  parseRecord(bucketGenderMale, "Congo",94.9,95.3,95.6,96,96.4,96.8,97.1,97.3,97.6,97.8,98.1,98.3,98.4,98.6);
  parseRecord(bucketGenderMale, "Costa Rica",97.1,97.2,97.3,97.4,97.5,97.6,97.7,97.7,97.8,97.9,98,98,98.1,98.2);
  parseRecord(bucketGenderMale, "Cote d'Ivoire",64.9,65.5,66,66.6,67.2,67.7,68.3,68.9,69.4,70,70.6,71.3,72,72.7);
  parseRecord(bucketGenderMale, "Croatia",99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Cuba",99.3,99.4,99.4,99.5,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Cyprus",99.5,99.6,99.6,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.8);
  parseRecord(bucketGenderMale, "Democratic Republic of the Congo",80.3,81.3,82.2,83.1,83.9,84.8,85.6,86.3,87.1,87.8,88.4,89.1,89.6,90.2);
  parseRecord(bucketGenderMale, "Djibouti",82.2,83,83.7,84.4,85,85.7,86.4,87,87.6,88.1,88.7,89.2,89.7,90.1);
  parseRecord(bucketGenderMale, "Dominican Republic",86.8,87.2,87.6,88,88.4,88.8,89.1,89.4,89.7,90.1,90.4,90.7,91,91.2);
  parseRecord(bucketGenderMale, "Ecuador",96,96.2,96.3,96.5,96.6,96.8,96.9,97.1,97.2,97.4,97.5,97.6,97.7,97.9);
  parseRecord(bucketGenderMale, "Egypt",70.9,71.4,72,72.6,73.2,73.7,74.3,74.8,75.3,75.9,76.4,76.9,77.4,77.8);
  parseRecord(bucketGenderMale, "El Salvador",85.1,85.5,85.9,86.3,86.7,87.1,87.5,87.9,88.2,88.6,89,89.3,89.6,90);
  parseRecord(bucketGenderMale, "Equatorial Guinea",96.6,96.9,97.1,97.3,97.5,97.7,97.9,98,98.2,98.3,98.5,98.6,98.7,98.8);
  parseRecord(bucketGenderMale, "Eritrea",72.5,73.3,74.2,75,75.8,76.5,77.3,78,78.7,79.4,80.1,80.8,81.4,82.1);
  parseRecord(bucketGenderMale, "Estonia",99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderMale, "Ethiopia",51.5,52.5,53.5,54.5,55.4,56.4,57.4,58.3,59.2,60.2,61.2,62.1,63,63.9);
  parseRecord(bucketGenderMale, "Fiji",98.1,98.2,98.3,98.4,98.5,98.7,98.8,98.8,98.9,99,99.1,99.2,99.2,99.3);
  parseRecord(bucketGenderMale, "Gambia",50.5,52,53.5,55,56.5,58,59.5,60.9,62.3,63.7,65.2,66.5,67.8,69.2);
  parseRecord(bucketGenderMale, "Ghana",88.2,88.8,89.4,90,90.6,91.2,91.7,92.2,92.6,93.1,93.6,93.9,94.2,94.5);
  parseRecord(bucketGenderMale, "Greece",99.4,99.5,99.5,99.5,99.6,99.6,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Guatemala",80.5,81,81.5,82,82.6,83.1,83.6,84,84.5,85,85.4,85.8,86.2,86.7);
  parseRecord(bucketGenderMale, "Guinea-Bissau",62.2,63.3,64.4,65.5,66.6,67.7,68.8,69.8,70.8,71.8,72.8,73.6,74.5,75.4);
  parseRecord(bucketGenderMale, "Guyana",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Haiti",55.8,56.7,57.6,58.4,59.3,60.2,61,61.8,62.6,63.4,64.3,65,65.8,66.6);
  parseRecord(bucketGenderMale, "Honduras",78.5,79,79.6,80.1,80.6,81.2,81.6,82.1,82.6,83,83.5,83.9,84.4,84.8);
  parseRecord(bucketGenderMale, "Hungary",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "India",73.4,74,74.7,75.3,76,76.6,77.3,77.9,78.5,79.1,79.7,80.2,80.8,81.3);
  parseRecord(bucketGenderMale, "Indonesia",96.6,96.8,97,97.2,97.4,97.5,97.7,97.8,98,98.1,98.3,98.4,98.5,98.6);
  parseRecord(bucketGenderMale, "Iran (Islamic Republic of)",91.7,92.3,92.8,93.4,93.9,94.4,94.8,95.2,95.5,95.9,96.2,96.5,96.7,97);
  parseRecord(bucketGenderMale, "Iraq",56.4,56.7,56.9,57.2,57.5,57.8,58.1,58.4,58.7,59,59.3,59.6,60,60.3);
  parseRecord(bucketGenderMale, "Israel",99,99,99.1,99.1,99.2,99.2,99.3,99.4,99.4,99.5,99.5,99.6,99.6,99.7);
  parseRecord(bucketGenderMale, "Italy",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Jamaica",87.1,87.5,87.9,88.3,88.7,89.1,89.4,89.7,90.1,90.4,90.7,91,91.3,91.6);
  parseRecord(bucketGenderMale, "Jordan",97.9,98,98.2,98.3,98.4,98.5,98.6,98.7,98.9,99,99.1,99.2,99.3,99.3);
  parseRecord(bucketGenderMale, "Kazakhstan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Kenya",92.9,93.2,93.6,94,94.3,94.7,95,95.2,95.5,95.8,96,96.2,96.4,96.6);
  parseRecord(bucketGenderMale, "Korea, Republic of",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Kuwait",87.9,88.3,88.7,89.2,89.6,90,90.4,90.7,91,91.3,91.7,91.9,92.2,92.5);
  parseRecord(bucketGenderMale, "Lao People's Democratic Republic",79.5,80,80.5,81,81.6,82.1,82.6,83.2,83.8,84.3,84.9,85.4,85.8,86.3);
  parseRecord(bucketGenderMale, "Latvia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Lebanon",95.5,95.7,95.9,96,96.2,96.4,96.6,96.8,96.9,97.1,97.2,97.4,97.5,97.6);
  parseRecord(bucketGenderMale, "Lesotho",77.2,77.8,78.4,79,79.6,80.2,80.7,81.2,81.7,82.2,82.7,83.2,83.7,84.2);
  parseRecord(bucketGenderMale, "Liberia",75.4,76.6,77.7,78.9,80,81.1,81.8,82.6,83.3,84.1,84.9,85.6,86.3,87);
  parseRecord(bucketGenderMale, "Libyan Arab Jamahiriya",98.9,99.1,99.2,99.4,99.5,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Lithuania",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Madagascar",77.8,78.4,79,79.6,80.2,80.8,81.3,81.9,82.5,83.1,83.6,84.1,84.6,85.1);
  parseRecord(bucketGenderMale, "Malawi",75.7,76.3,76.9,77.5,78,78.6,79.1,79.6,80.1,80.5,81,81.5,81.9,82.3);
  parseRecord(bucketGenderMale, "Malaysia",95.3,95.6,95.8,96.1,96.3,96.5,96.7,96.9,97.1,97.3,97.5,97.6,97.7,97.8);
  parseRecord(bucketGenderMale, "Maldives",98.1,98.2,98.3,98.4,98.5,98.6,98.7,98.8,98.8,98.9,99,99.1,99.1,99.2);
  parseRecord(bucketGenderMale, "Mali",38.3,39.2,40,40.9,41.8,42.7,43.6,44.6,45.5,46.4,47.3,48.2,49.1,50);
  parseRecord(bucketGenderMale, "Malta",96,96.1,96.3,96.4,96.6,96.7,96.9,97,97.1,97.3,97.4,97.5,97.6,97.7);
  parseRecord(bucketGenderMale, "Martinique",99.5,99.5,99.6,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Mauritania",55.5,55.7,55.8,56,56.2,56.3,56.5,56.7,56.8,57,57.1,57.3,57.4,57.6);
  parseRecord(bucketGenderMale, "Mauritius",91.2,91.4,91.7,91.9,92.2,92.4,92.6,92.8,93,93.1,93.3,93.5,93.7,93.9);
  parseRecord(bucketGenderMale, "Mexico",95.9,96.1,96.2,96.4,96.6,96.7,96.9,97,97.1,97.3,97.4,97.5,97.6,97.8);
  parseRecord(bucketGenderMale, "Mongolia",98.7,98.7,98.7,98.7,98.7,98.6,98.7,98.7,98.7,98.7,98.7,98.7,98.8,98.8);
  parseRecord(bucketGenderMale, "Morocco",68,68.9,69.9,70.8,71.7,72.6,73.3,74,74.7,75.4,76,76.7,77.4,78.1);
  parseRecord(bucketGenderMale, "Mozambique",66.1,67.1,68,68.9,69.9,70.8,71.7,72.5,73.4,74.2,75.1,75.8,76.6,77.3);
  parseRecord(bucketGenderMale, "Myanmar",90.1,90.2,90.4,90.5,90.6,90.7,90.9,91,91.1,91.2,91.4,91.5,91.6,91.7);
  parseRecord(bucketGenderMale, "Namibia",85.9,86.3,86.7,87.2,87.6,88,88.4,88.8,89.2,89.6,89.9,90.3,90.6,90.9);
  parseRecord(bucketGenderMale, "Nepal",67,68.3,69.5,70.8,72,73.3,74,74.7,75.4,76.1,76.7,77.4,78.1,78.7);
  parseRecord(bucketGenderMale, "Netherlands Antilles",97.3,97.4,97.5,97.5,97.6,97.7,97.8,97.8,97.9,98,98,98.1,98.2,98.2);
  parseRecord(bucketGenderMale, "Nicaragua",67.7,68.1,68.4,68.7,69,69.4,69.7,70,70.4,70.7,71,71.3,71.6,71.9);
  parseRecord(bucketGenderMale, "Niger",24.9,25.6,26.3,27,27.7,28.4,29.2,30,30.8,31.5,32.3,33.1,34,34.8);
  parseRecord(bucketGenderMale, "Nigeria",80.8,81.7,82.7,83.7,84.7,85.7,86.5,87.3,88.1,88.8,89.6,90.1,90.7,91.3);
  parseRecord(bucketGenderMale, "Oman",95.4,96,96.6,97.2,97.8,98.4,98.6,98.8,99.1,99.3,99.5,99.6,99.6,99.7);
  parseRecord(bucketGenderMale, "Pakistan",62.5,63.6,64.7,65.8,66.9,68,68.6,69.2,69.8,70.4,71.1,71.7,72.4,73.1);
  parseRecord(bucketGenderMale, "Panama",95.7,95.9,96,96.2,96.3,96.5,96.6,96.7,96.9,97,97.1,97.3,97.4,97.5);
  parseRecord(bucketGenderMale, "Papua New Guinea",74.4,74.9,75.5,76.1,76.6,77.2,77.7,78.3,78.8,79.3,79.8,80.3,80.8,81.3);
  parseRecord(bucketGenderMale, "Paraguay",95.9,96,96.1,96.3,96.4,96.5,96.6,96.8,96.9,97,97.1,97.2,97.3,97.4);
  parseRecord(bucketGenderMale, "Peru",96.9,97,97.2,97.3,97.5,97.6,97.8,97.9,98,98.1,98.2,98.3,98.4,98.5);
  parseRecord(bucketGenderMale, "Philippines",97.1,97.2,97.4,97.6,97.7,97.9,98,98.1,98.3,98.4,98.5,98.6,98.7,98.8);
  parseRecord(bucketGenderMale, "Poland",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Portugal",99.5,99.5,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Puerto Rico",95.3,95.5,95.7,95.9,96,96.2,96.4,96.5,96.6,96.8,96.9,97,97.1,97.2);
  parseRecord(bucketGenderMale, "Qatar",88.3,88.8,89.3,89.8,90.3,90.8,91.2,91.5,91.9,92.2,92.6,92.9,93.2,93.5);
  parseRecord(bucketGenderMale, "Republic of Moldova",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Reunion",92.4,92.7,93,93.3,93.6,93.9,94.1,94.4,94.7,95,95.3,95.6,95.8,96.1);
  parseRecord(bucketGenderMale, "Romania",99.3,99.4,99.4,99.4,99.4,99.4,99.5,99.5,99.5,99.5,99.5,99.6,99.6,99.6);
  parseRecord(bucketGenderMale, "Russian Federation",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Rwanda",78,78.8,79.6,80.4,81.2,82,82.6,83.3,83.9,84.6,85.2,85.8,86.3,86.8);
  parseRecord(bucketGenderMale, "Samoa",99.1,99.2,99.2,99.2,99.2,99.3,99.3,99.3,99.3,99.4,99.4,99.4,99.4,99.4);
  parseRecord(bucketGenderMale, "Saudi Arabia",91.2,91.7,92.1,92.6,93.1,93.5,93.8,94.1,94.4,94.7,94.9,95.2,95.4,95.6);
  parseRecord(bucketGenderMale, "Senegal",50,51,51.9,52.9,53.9,54.8,55.8,56.7,57.6,58.6,59.5,60.4,61.3,62.2);
  parseRecord(bucketGenderMale, "Singapore",98.8,98.9,99,99.1,99.2,99.3,99.4,99.5,99.6,99.6,99.7,99.7,99.7,99.8);
  parseRecord(bucketGenderMale, "Slovenia",99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "South Africa",88.6,88.9,89.2,89.5,89.8,90,90.3,90.6,90.8,91.1,91.3,91.6,91.8,92);
  parseRecord(bucketGenderMale, "Spain",99.6,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Sri Lanka",95.9,96,96.1,96.2,96.4,96.5,96.6,96.7,96.8,96.9,97,97.1,97.2,97.3);
  parseRecord(bucketGenderMale, "Sudan",75.6,76.4,77.2,77.9,78.7,79.5,80.2,80.9,81.5,82.2,82.8,83.4,83.9,84.4);
  parseRecord(bucketGenderMale, "Swaziland",84.7,85.2,85.8,86.3,86.8,87.4,87.8,88.3,88.7,89.2,89.6,90,90.4,90.8);
  parseRecord(bucketGenderMale, "Syrian Arab Republic",92.2,92.6,92.9,93.3,93.6,94,94.3,94.5,94.8,95.1,95.4,95.6,95.8,96);
  parseRecord(bucketGenderMale, "Tajikistan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Thailand",98.6,98.7,98.8,98.9,99,99.1,99.1,99.2,99.3,99.3,99.4,99.5,99.5,99.6);
  parseRecord(bucketGenderMale, "Togo",79.4,80.2,81.1,82,82.8,83.7,84.4,85.1,85.8,86.5,87.2,87.8,88.3,88.9);
  parseRecord(bucketGenderMale, "Trinidad and Tobago",99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderMale, "Tunisia",92.8,93.4,93.9,94.5,95,95.5,95.9,96.3,96.6,97,97.4,97.6,97.9,98.1);
  parseRecord(bucketGenderMale, "Turkey",97.1,97.3,97.5,97.7,97.9,98.1,98.2,98.4,98.5,98.7,98.8,98.9,99,99.1);
  parseRecord(bucketGenderMale, "Uganda",79.8,80.4,81,81.6,82.2,82.8,83.3,83.9,84.4,84.9,85.4,85.9,86.3,86.8);
  parseRecord(bucketGenderMale, "Ukraine",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.9,99.9,99.9,99.9);
  parseRecord(bucketGenderMale, "United Arab Emirates",81.7,82.3,82.9,83.5,84.1,84.7,85.3,85.8,86.3,86.8,87.4,87.8,88.2,88.6);
  parseRecord(bucketGenderMale, "United Republic of Tanzania",89.2,89.7,90.1,90.5,91,91.4,91.8,92.1,92.5,92.9,93.2,93.5,93.8,94.1);
  parseRecord(bucketGenderMale, "Uruguay",98.3,98.3,98.4,98.4,98.5,98.5,98.6,98.6,98.7,98.7,98.8,98.8,98.8,98.9);
  parseRecord(bucketGenderMale, "Uzbekistan",99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderMale, "Venezuela",95.4,95.6,95.8,96.1,96.3,96.5,96.7,96.8,97,97.2,97.3,97.5,97.6,97.7);
  parseRecord(bucketGenderMale, "Viet Nam",94.5,94.5,94.5,94.4,94.4,94.4,94.5,94.7,94.8,94.9,95,95.1,95.2,95.3);
  parseRecord(bucketGenderMale, "Yemen",73.5,74.7,75.9,77.1,78.4,79.6,80.3,80.9,81.6,82.2,82.9,83.6,84.3,85);
  parseRecord(bucketGenderMale, "Zambia",86.4,86.9,87.4,87.9,88.4,88.9,89.3,89.7,90.1,90.5,90.8,91.2,91.5,91.8);
  parseRecord(bucketGenderMale, "Zimbabwe",96.6,96.8,97.1,97.3,97.6,97.8,98,98.2,98.3,98.5,98.7,98.8,98.9,99);

  // women
  parseRecord(bucketGenderFemale, "All",100,100,100,100,100,100,100,100,100,100,100,100,100,100);
  parseRecord(bucketGenderFemale, "Albania",91.9,92.5,93,93.6,94.1,94.6,95,95.4,95.7,96.1,96.4,96.7,96.9,97.2);
  parseRecord(bucketGenderFemale, "Algeria",68.1,69.8,71.5,73.3,75,76.7,78.1,79.4,80.8,82.2,83.6,84.6,85.6,86.7);
  parseRecord(bucketGenderFemale, "Argentina",98.4,98.4,98.5,98.5,98.6,98.6,98.6,98.7,98.7,98.8,98.8,98.8,98.9,98.9);
  parseRecord(bucketGenderFemale, "Armenia",99.4,99.4,99.5,99.5,99.6,99.6,99.6,99.6,99.7,99.7,99.7,99.7,99.7,99.8);
  parseRecord(bucketGenderFemale, "Bahamas",97.5,97.6,97.7,97.8,97.8,97.9,98,98.1,98.1,98.2,98.3,98.3,98.4,98.4);
  parseRecord(bucketGenderFemale, "Bahrain",95,95.5,96,96.5,96.9,97.4,97.6,97.9,98.1,98.3,98.6,98.7,98.9,99);
  parseRecord(bucketGenderFemale, "Bangladesh",33.2,33.8,34.4,35.1,35.7,36.3,37,37.7,38.3,39,39.7,40.4,41.1,41.7);
  parseRecord(bucketGenderFemale, "Barbados",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Belarus",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Belize",96.7,96.9,97.1,97.3,97.6,97.8,98,98.1,98.3,98.5,98.7,98.8,98.9,99.1);
  parseRecord(bucketGenderFemale, "Benin",24.7,25.8,26.9,28,29.1,30.2,31.4,32.6,33.8,34.9,36,37.3,38.5,39.7);
  parseRecord(bucketGenderFemale, "Bolivia",89,89.5,90,90.6,91.1,91.6,92,92.4,92.8,93.2,93.6,94,94.3,94.7);
  parseRecord(bucketGenderFemale, "Botswana",87.2,87.8,88.3,88.9,89.4,90,90.4,90.8,91.2,91.7,92.1,92.4,92.8,93.2);
  parseRecord(bucketGenderFemale, "Brazil",93.1,93.6,94.1,94.5,95,95.4,95.7,95.9,96.2,96.5,96.7,96.9,97.1,97.2);
  parseRecord(bucketGenderFemale, "Brunei Darussalam",98.1,98.4,98.8,99.1,99.4,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Bulgaria",99.3,99.3,99.3,99.4,99.4,99.4,99.4,99.5,99.5,99.5,99.5,99.6,99.6,99.6);
  parseRecord(bucketGenderFemale, "Burkina Faso",14,14.8,15.6,16.5,17.3,18.2,19.2,20.2,21.3,22.3,23.3,24.5,25.7,26.9);
  parseRecord(bucketGenderFemale, "Burundi",44.8,46.5,48.3,50,51.8,53.5,55.2,57,58.7,60.4,62.1,63.6,65.1,66.6);
  parseRecord(bucketGenderFemale, "Cambodia",65.6,66.4,67,67.7,68.5,69.3,70.2,71.2,72.3,73.4,74.3,75.2,75.9,76.7);
  parseRecord(bucketGenderFemale, "Cameroon",75.9,77.3,78.7,80.1,81.5,82.8,83.9,84.9,85.9,86.9,88,88.7,89.5,90.2);
  parseRecord(bucketGenderFemale, "Cape Verde",76.2,77.1,78,79,79.9,80.8,81.6,82.5,83.2,84,84.8,85.5,86.3,87);
  parseRecord(bucketGenderFemale, "Central African Republic",39.4,41.4,43.4,45.4,47.4,49.4,51.3,53.2,55.1,57.1,59,60.8,62.6,64.4);
  parseRecord(bucketGenderFemale, "Chad",37.7,39.8,41.9,44.1,46.3,48.5,50.9,53.2,55.5,57.7,59.9,62,64,65.9);
  parseRecord(bucketGenderFemale, "Chile",98.3,98.4,98.4,98.5,98.6,98.7,98.8,98.8,98.9,99,99,99.1,99.1,99.2);
  parseRecord(bucketGenderFemale, "China",93.1,93.5,93.8,94.2,94.6,95,95.3,95.7,96,96.4,96.7,96.9,97.1,97.4);
  parseRecord(bucketGenderFemale, "China, Hong Kong Special Administrative Region",97.9,98.2,98.4,98.7,99,99.2,99.3,99.5,99.6,99.7,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "China, Macao Special Administrative Region",95.8,96,96.2,96.5,96.7,96.9,97.1,97.4,97.5,97.7,97.9,98.1,98.2,98.4);
  parseRecord(bucketGenderFemale, "Colombia",95.5,95.8,96,96.2,96.5,96.7,96.8,97,97.2,97.4,97.5,97.7,97.9,98);
  parseRecord(bucketGenderFemale, "Comoros",49.6,49.8,50,50.2,50.5,50.7,50.9,51.1,51.3,51.6,51.8,52,52.2,52.4);
  parseRecord(bucketGenderFemale, "Congo",90.3,91.1,92,92.8,93.6,94.5,94.9,95.4,95.8,96.3,96.8,97,97.3,97.5);
  parseRecord(bucketGenderFemale, "Costa Rica",97.7,97.8,97.9,98,98.1,98.2,98.2,98.3,98.4,98.5,98.6,98.6,98.7,98.8);
  parseRecord(bucketGenderFemale, "Cote d'Ivoire",40.3,41.4,42.6,43.8,45,46.1,47.4,48.6,49.8,51.1,52.3,53.6,54.9,56.1);
  parseRecord(bucketGenderFemale, "Croatia",99.6,99.6,99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Cuba",99.2,99.3,99.4,99.4,99.5,99.6,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Cyprus",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Democratic Republic of the Congo",57.6,59.5,61.4,63.2,65,66.8,68.5,70.2,71.8,73.4,74.9,76.4,77.7,79);
  parseRecord(bucketGenderFemale, "Djibouti",64.2,66,67.6,69.2,70.8,72.3,73.9,75.3,76.7,78.1,79.4,80.6,81.7,82.8);
  parseRecord(bucketGenderFemale, "Dominican Republic",88.2,88.6,89,89.4,89.8,90.2,90.5,90.9,91.2,91.5,91.9,92.2,92.5,92.7);
  parseRecord(bucketGenderFemale, "Ecuador",94.9,95.1,95.4,95.6,95.8,96,96.2,96.4,96.5,96.7,96.9,97.1,97.2,97.4);
  parseRecord(bucketGenderFemale, "Egypt",51,52.2,53.4,54.6,55.8,56.9,58.1,59.2,60.4,61.5,62.6,63.7,64.8,65.8);
  parseRecord(bucketGenderFemale, "El Salvador",82.6,83.1,83.6,84.1,84.6,85.2,85.6,86,86.4,86.9,87.3,87.7,88.1,88.6);
  parseRecord(bucketGenderFemale, "Equatorial Guinea",88.8,89.7,90.4,91.2,92,92.8,93.3,93.8,94.3,94.9,95.4,95.7,96.1,96.4);
  parseRecord(bucketGenderFemale, "Eritrea",49.3,50.4,51.5,52.7,53.8,54.9,56,57.1,58.2,59.3,60.4,61.5,62.5,63.6);
  parseRecord(bucketGenderFemale, "Estonia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Ethiopia",34.1,35.5,36.9,38.3,39.8,41.2,42.7,44.2,45.7,47.2,48.7,50.2,51.8,53.3);
  parseRecord(bucketGenderFemale, "Fiji",97.6,97.8,98,98.1,98.3,98.5,98.6,98.7,98.8,98.9,99.1,99.1,99.2,99.3);
  parseRecord(bucketGenderFemale, "Gambia",34.1,35.6,37,38.5,40,41.4,43,44.6,46.2,47.7,49.3,50.8,52.4,54);
  parseRecord(bucketGenderFemale, "Ghana",75.4,76.9,78.4,79.9,81.4,82.9,84.1,85.2,86.4,87.5,88.6,89.4,90.1,90.9);
  parseRecord(bucketGenderFemale, "Greece",99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Guatemala",66.2,66.9,67.6,68.3,69,69.7,70.3,70.9,71.5,72.1,72.7,73.2,73.8,74.4);
  parseRecord(bucketGenderFemale, "Guinea-Bissau",26.5,28.1,29.6,31.3,32.9,34.6,36.4,38.2,40.1,41.9,43.7,45.5,47.4,49.2);
  parseRecord(bucketGenderFemale, "Guyana",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Haiti",53.8,54.9,56,57.1,58.2,59.3,60.4,61.4,62.5,63.5,64.5,65.5,66.5,67.5);
  parseRecord(bucketGenderFemale, "Honduras",80.8,81.5,82.1,82.7,83.3,83.9,84.5,85,85.6,86.1,86.6,87.1,87.6,88);
  parseRecord(bucketGenderFemale, "Hungary",99.7,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "India",54.2,55.3,56.3,57.4,58.5,59.5,60.6,61.7,62.7,63.8,64.8,65.8,66.8,67.8);
  parseRecord(bucketGenderFemale, "Indonesia",93.4,93.8,94.3,94.7,95.1,95.6,95.9,96.2,96.5,96.8,97.1,97.3,97.6,97.8);
  parseRecord(bucketGenderFemale, "Iran (Islamic Republic of)",80.8,82.1,83.4,84.7,86,87.2,88.1,88.9,89.7,90.5,91.3,91.9,92.5,93.1);
  parseRecord(bucketGenderFemale, "Iraq",24.9,25.3,25.7,26.1,26.5,26.9,27.3,27.8,28.2,28.7,29.1,29.6,30,30.5);
  parseRecord(bucketGenderFemale, "Israel",98.4,98.5,98.6,98.6,98.7,98.8,98.9,99,99.1,99.2,99.3,99.3,99.4,99.5);
  parseRecord(bucketGenderFemale, "Italy",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Jamaica",95.2,95.5,95.7,96,96.2,96.5,96.7,96.9,97.1,97.3,97.5,97.6,97.8,97.9);
  parseRecord(bucketGenderFemale, "Jordan",95.3,95.7,96.2,96.7,97.1,97.6,98,98.3,98.6,99,99.3,99.4,99.5,99.6);
  parseRecord(bucketGenderFemale, "Kazakhstan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Kenya",86.7,87.6,88.5,89.4,90.3,91.2,91.8,92.4,93,93.6,94.2,94.7,95.1,95.5);
  parseRecord(bucketGenderFemale, "Korea, Republic of",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Kuwait",87.2,87.9,88.6,89.3,90.1,90.8,91.3,91.7,92.2,92.7,93.2,93.6,93.9,94.3);
  parseRecord(bucketGenderFemale, "Lao People's Democratic Republic",60.6,61.6,62.6,63.7,64.7,65.8,66.8,67.8,68.8,69.8,70.8,71.8,72.7,73.6);
  parseRecord(bucketGenderFemale, "Latvia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Lebanon",88.6,89.1,89.5,90,90.5,91,91.4,91.8,92.2,92.6,93,93.3,93.7,94);
  parseRecord(bucketGenderFemale, "Lesotho",97.1,97.3,97.4,97.6,97.8,97.9,98,98.1,98.3,98.4,98.5,98.6,98.7,98.8);
  parseRecord(bucketGenderFemale, "Liberia",38.6,40.1,41.6,43.2,44.8,46.2,47.4,48.7,49.9,51.2,52.6,54,55.4,56.9);
  parseRecord(bucketGenderFemale, "Libyan Arab Jamahiriya",82.7,83.9,85.1,86.3,87.5,88.8,89.6,90.5,91.3,92.2,93,93.5,94,94.5);
  parseRecord(bucketGenderFemale, "Lithuania",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Madagascar",66.6,67.6,68.7,69.7,70.7,71.7,72.7,73.7,74.7,75.6,76.6,77.4,78.3,79.1);
  parseRecord(bucketGenderFemale, "Malawi",51.2,52.2,53.2,54.1,55.1,56.1,57.1,58.1,59,60,61,61.9,62.8,63.8);
  parseRecord(bucketGenderFemale, "Malaysia",94.2,94.6,95,95.4,95.8,96.3,96.5,96.8,97.1,97.4,97.7,97.8,98,98.2);
  parseRecord(bucketGenderFemale, "Maldives",98.1,98.2,98.3,98.4,98.5,98.6,98.7,98.8,98.9,99,99.1,99.2,99.2,99.3);
  parseRecord(bucketGenderFemale, "Mali",17.1,17.8,18.6,19.3,20.1,20.8,21.7,22.5,23.4,24.2,25.1,26,26.9,27.9);
  parseRecord(bucketGenderFemale, "Malta",99.1,99.2,99.3,99.4,99.5,99.6,99.6,99.7,99.7,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Martinique",99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Mauritania",36.1,36.5,36.9,37.4,37.8,38.2,38.7,39.2,39.7,40.2,40.6,41.2,41.8,42.3);
  parseRecord(bucketGenderFemale, "Mauritius",91.1,91.5,91.8,92.2,92.5,92.8,93.1,93.4,93.7,94,94.3,94.5,94.8,95.1);
  parseRecord(bucketGenderFemale, "Mexico",94.4,94.6,94.9,95.1,95.4,95.7,95.9,96.1,96.3,96.4,96.6,96.8,97,97.1);
  parseRecord(bucketGenderFemale, "Mongolia",99.1,99.1,99.1,99.1,99.1,99.1,99.2,99.2,99.3,99.3,99.3,99.4,99.4,99.5);
  parseRecord(bucketGenderFemale, "Morocco",42,43.6,45.2,46.9,48.4,50,51.7,53.3,54.9,56.6,58.2,59.7,61.3,62.9);
  parseRecord(bucketGenderFemale, "Mozambique",31.7,33.1,34.5,35.9,37.3,38.7,40.2,41.7,43.2,44.7,46.2,47.7,49.2,50.7);
  parseRecord(bucketGenderFemale, "Myanmar",86.2,86.7,87.1,87.6,88,88.5,88.9,89.3,89.7,90.1,90.5,90.8,91.1,91.5);
  parseRecord(bucketGenderFemale, "Namibia",89,89.5,90,90.5,91,91.5,91.8,92.2,92.6,93,93.3,93.7,94,94.3);
  parseRecord(bucketGenderFemale, "Nepal",27.3,28.9,30.5,32.1,33.7,35.3,36.8,38.3,39.8,41.3,42.8,44.4,46,47.5);
  parseRecord(bucketGenderFemale, "Netherlands Antilles",97.7,97.8,97.8,97.9,98,98,98.1,98.2,98.2,98.3,98.4,98.4,98.5,98.5);
  parseRecord(bucketGenderFemale, "Nicaragua",68.7,69.1,69.4,69.8,70.1,70.5,70.9,71.2,71.6,71.9,72.3,72.6,72.9,73.3);
  parseRecord(bucketGenderFemale, "Niger",9.3,9.7,10.1,10.5,10.9,11.3,11.8,12.3,12.8,13.3,13.8,14.5,15.1,15.7);
  parseRecord(bucketGenderFemale, "Nigeria",66.5,68.5,70.5,72.5,74.5,76.5,78.1,79.6,81.2,82.7,84.3,85.4,86.5,87.5);
  parseRecord(bucketGenderFemale, "Oman",75.4,78.3,81.1,84,86.7,89.5,90.9,92.2,93.5,94.8,96.2,96.8,97.3,97.9);
  parseRecord(bucketGenderFemale, "Pakistan",30.6,31.8,33,34.2,35.4,36.5,37.6,38.7,39.8,40.8,41.9,43.1,44.2,45.4);
  parseRecord(bucketGenderFemale, "Panama",94.8,95,95.1,95.3,95.4,95.6,95.7,95.9,96,96.2,96.3,96.5,96.6,96.7);
  parseRecord(bucketGenderFemale, "Papua New Guinea",62.4,63.3,64.2,65.1,66,66.9,67.8,68.7,69.6,70.4,71.3,72.1,72.9,73.7);
  parseRecord(bucketGenderFemale, "Paraguay",95.2,95.4,95.6,95.8,96,96.2,96.4,96.5,96.7,96.9,97,97.2,97.3,97.4);
  parseRecord(bucketGenderFemale, "Peru",92.1,92.4,92.8,93.1,93.4,93.8,94.1,94.4,94.6,94.9,95.2,95.5,95.7,96);
  parseRecord(bucketGenderFemale, "Philippines",97.4,97.6,97.8,98,98.1,98.3,98.4,98.6,98.7,98.8,98.9,99,99.1,99.2);
  parseRecord(bucketGenderFemale, "Poland",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Portugal",99.6,99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Puerto Rico",97,97.1,97.3,97.4,97.5,97.7,97.8,97.9,98,98.1,98.2,98.3,98.4,98.4);
  parseRecord(bucketGenderFemale, "Qatar",93,93.5,94,94.5,95,95.5,95.8,96.1,96.4,96.7,97.1,97.3,97.5,97.7);
  parseRecord(bucketGenderFemale, "Republic of Moldova",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Reunion",97.8,98.1,98.3,98.5,98.7,99,99.1,99.2,99.4,99.5,99.7,99.7,99.7,99.7);
  parseRecord(bucketGenderFemale, "Romania",99.2,99.3,99.3,99.4,99.4,99.5,99.5,99.6,99.6,99.7,99.7,99.7,99.7,99.8);
  parseRecord(bucketGenderFemale, "Russian Federation",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Rwanda",67.4,69,70.5,72.1,73.7,75.3,76.5,77.8,79.1,80.4,81.6,82.6,83.6,84.6);
  parseRecord(bucketGenderFemale, "Samoa",98.9,99,99.1,99.1,99.2,99.2,99.2,99.3,99.3,99.4,99.4,99.5,99.5,99.5);
  parseRecord(bucketGenderFemale, "Saudi Arabia",78.6,80,81.5,82.9,84.3,85.6,86.6,87.5,88.4,89.3,90.3,91,91.6,92.3);
  parseRecord(bucketGenderFemale, "Senegal",30.2,31.3,32.5,33.6,34.8,35.9,37.1,38.3,39.5,40.7,41.9,43.2,44.5,45.7);
  parseRecord(bucketGenderFemale, "Singapore",99.2,99.3,99.5,99.6,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Slovenia",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "South Africa",88.4,88.7,89,89.3,89.6,89.9,90.2,90.4,90.7,91,91.3,91.5,91.7,92);
  parseRecord(bucketGenderFemale, "Spain",99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Sri Lanka",94.2,94.5,94.8,95,95.3,95.5,95.8,96,96.2,96.4,96.6,96.8,96.9,97.1);
  parseRecord(bucketGenderFemale, "Sudan",54,55.9,57.8,59.6,61.5,63.4,65,66.7,68.3,70,71.5,72.9,74.2,75.5);
  parseRecord(bucketGenderFemale, "Swaziland",85.5,86.1,86.8,87.4,88.1,88.7,89.2,89.7,90.2,90.7,91.2,91.6,92.1,92.5);
  parseRecord(bucketGenderFemale, "Syrian Arab Republic",66.9,68.2,69.4,70.7,72,73.3,74.4,75.5,76.6,77.7,78.8,79.7,80.6,81.5);
  parseRecord(bucketGenderFemale, "Tajikistan",99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Thailand",97.6,97.7,97.8,97.9,98,98.1,98.1,98.2,98.3,98.3,98.4,98.4,98.5,98.5);
  parseRecord(bucketGenderFemale, "Togo",47.7,49.4,51,52.7,54.3,56,57.5,59.1,60.7,62.2,63.8,65.2,66.6,68);
  parseRecord(bucketGenderFemale, "Trinidad and Tobago",99.6,99.7,99.7,99.7,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8,99.8);
  parseRecord(bucketGenderFemale, "Tunisia",75.2,76.9,78.6,80.3,82,83.7,84.8,85.9,86.9,88,89.1,89.8,90.6,91.3);
  parseRecord(bucketGenderFemale, "Turkey",88.3,88.9,89.6,90.2,90.9,91.6,92,92.5,93,93.5,94,94.4,94.8,95.1);
  parseRecord(bucketGenderFemale, "Uganda",60.5,61.7,62.9,64.2,65.4,66.6,67.7,68.8,69.9,71,72.1,73,74,75);
  parseRecord(bucketGenderFemale, "Ukraine",99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9,99.9);
  parseRecord(bucketGenderFemale, "United Arab Emirates",88.6,89.3,90,90.6,91.3,91.9,92.4,92.9,93.4,93.9,94.4,94.7,95,95.3);
  parseRecord(bucketGenderFemale, "United Republic of Tanzania",77.2,78.4,79.5,80.6,81.7,82.9,83.9,84.9,85.9,86.9,87.9,88.6,89.4,90.1);
  parseRecord(bucketGenderFemale, "Uruguay",99.1,99.1,99.2,99.2,99.2,99.2,99.3,99.3,99.3,99.3,99.4,99.4,99.4,99.5);
  parseRecord(bucketGenderFemale, "Uzbekistan",99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6,99.6);
  parseRecord(bucketGenderFemale, "Venezuela",96.6,96.8,97.1,97.3,97.5,97.8,97.9,98.1,98.3,98.5,98.6,98.8,98.9,99.1);
  parseRecord(bucketGenderFemale, "Viet Nam",93.6,93.8,93.9,94,94.2,94.3,94.5,94.8,95,95.2,95.4,95.6,95.8,96);
  parseRecord(bucketGenderFemale, "Yemen",25,27.1,29.1,31.1,33.1,35.1,37.3,39.5,41.7,43.9,46.2,48.5,50.9,53.2);
  parseRecord(bucketGenderFemale, "Zambia",76.2,77.2,78.2,79.3,80.3,81.4,82.2,83,83.9,84.7,85.5,86.2,86.9,87.5);
  parseRecord(bucketGenderFemale, "Zimbabwe",91.3,91.9,92.4,92.9,93.5,94,94.3,94.7,95,95.4,95.7,96,96.2,96.5);
}
