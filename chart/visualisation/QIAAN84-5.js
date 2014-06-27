/* Created by ianb on 27/06/2014 16:22:06 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Which organisations are responsible for the number of patients delayed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014']
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
data: [2937,3035,2741,2644,2379,2860,2666,2604,2403,2447,2534,2523,2543,2615,2596,2592,2272,2581,2504,2528,2556,2469,2705,2664,2558,2687,2709,2581,2250,2747,2599,2738,2732,2777,2595,2670,2777,2932,2793,2870,2476,2882,2997,2932,2882]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'NHS trendline',
data: [[0, 2559.6],[44, 2746.7]]
},
{
name: 'Social Care',
type: 'line',
data: [1723,1626,1527,1502,1219,1458,1450,1284,1228,1325,1323,1404,1303,1280,1267,1257,1042,1163,1212,1171,1141,1123,1086,1072,1113,1174,1131,1072,965,1175,1150,1077,1093,1155,1040,1041,1090,1074,1086,1062,943,1065,1010,1122,1051]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Social Care trendline',
data: [[0, 1449.4],[44, 967]]
},
{
name: 'Both',
type: 'line',
data: [280,343,320,263,263,279,288,282,279,284,280,301,298,270,287,316,303,350,291,329,257,265,295,295,290,241,275,241,233,266,258,238,221,252,253,250,217,225,268,268,230,274,272,261,282]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Both trendline',
data: [[0, 302.5],[44, 248.1]]
}
]
}
