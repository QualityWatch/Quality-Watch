/* Created by EFisher on 17/02/2016 18:38:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Which organisations are responsible for the number of patients delayed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of Patients with a Delayed <br> Transfer of Care', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'NHS',
type: 'line',
data: [2937,3035,2741,2644,2379,2860,2666,2604,2403,2447,2534,2523,2543,2615,2596,2592,2272,2581,2504,2528,2556,2469,2705,2664,2558,2687,2709,2581,2250,2747,2599,2738,2732,2777,2595,2670,2777,2932,2793,2870,2476,2882,2994,2943,2873,3149,2977,3150,3123,3329,3264,3330,2935,3487,3311,3202,2993,3048,3085,3039,3211,3221,3254,3448,3023]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'NHS trendline',
data: [[0, 2431.1],[64, 3181.2]]
},
{
name: 'Social Care',
type: 'line',
data: [1723,1626,1527,1502,1219,1458,1450,1284,1228,1325,1323,1404,1303,1280,1267,1257,1042,1163,1212,1171,1141,1123,1086,1072,1113,1174,1131,1072,965,1175,1150,1077,1093,1155,1040,1041,1090,1074,1086,1062,943,1065,1010,1124,1049,1089,1092,1162,1275,1305,1316,1354,1242,1404,1271,1351,1406,1518,1544,1469,1603,1620,1657,1779,1696]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Social Care trendline',
data: [[0, 1214.7],[64, 1306.4]]
},
{
name: 'Both',
type: 'line',
data: [280,343,320,263,263,279,288,282,279,284,280,301,298,270,287,316,303,350,291,329,257,265,295,295,290,241,275,241,233,266,258,238,221,252,253,250,217,225,268,268,230,274,272,260,285,278,294,300,306,326,350,379,298,330,360,395,340,406,367,373,355,406,417,356,290]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Both trendline',
data: [[0, 259.1],[64, 331.3]]
}
]
}
