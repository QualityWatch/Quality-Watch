/* Created by EFisher on 17/02/2016 18:38:55 using v2.7 */
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Which organisations are responsible patients being delayed, when they\'re awaiting a care package in their own home?'},
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
title: {text:'Total number of delayed days'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'NHS',
type: 'line',
data: [2576,2694,2550,2510,2574,2468,2641,2582,2337,2703,2862,3170,3272,2860,2639,2647,2507,2700,2276,3450,3104,2869,3009,3956,4408,3992,3886,3871,4017,4198,3365,3514,3223,3552,3427,3246,4117,3682,4108,3923,3429,3898,3690,3902,4028,4397,4615,4889,5300,5386,5482,6247,6272,6357,5935,5900,5820,5404,5804,6480,6936,6711,7081,7259,7394]
,index: 1
},
{
name: 'Social Care',
type: 'line',
data: [8547,8307,7949,7032,7484,7473,8007,8912,7387,7650,8256,7977,7861,8324,7988,7093,6034,6109,6243,6970,6271,6963,6475,6556,6514,6628,6571,6784,5665,7938,7229,7901,6802,7398,6914,7063,7615,7639,7010,6594,6727,6918,6776,7692,6786,7185,7413,8139,10043,10224,10559,9949,10428,11423,10455,11235,13143,13582,14997,15233,15770,15886,17097,16271,16870]
,index: 2
},
{
name: 'Both',
type: 'line',
data: [1654,1693,1875,1611,1710,1363,1372,2374,2088,1949,1700,2288,1835,1593,1849,1788,1863,1819,1643,2186,1582,1585,1409,1553,1481,1164,1137,725,928,1342,1389,1553,1163,1028,1115,1515,2047,1765,1629,1485,1782,1542,1604,1545,1469,1665,1823,1751,1796,1728,1900,1822,2892,3253,3318,4028,3467,3742,3367,3361,3369,3555,3466,3264,3288]
,index: 3
}
]
}