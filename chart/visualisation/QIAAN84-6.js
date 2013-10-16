/* Created by ianb on 14/10/2013 11:44:47 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Which organisations are responsible for the number of days delayed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013']
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
data: [64255,69468,66127,68234,71498,71035,67226,74201,66304,69321,71638,68986,70802,72291,72451,71099,69865,71804,69411,76448,68751,76354,71236,77055,78903,74838,76813,77182,71999,83453,71473,78044,76626,80688,76465,76202]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'NHS trendline',
data: [[0, 66876.3],[35, 77964.9]]
},
{
name: 'Social Care',
type: 'line',
data: [38324,38074,38412,37030,36717,35750,38000,40036,34335,35996,37593,37889,37671,36948,36161,35280,33248,31219,31515,34749,31755,34012,31510,31969,33208,32518,32818,31823,28626,33858,31139,33111,29635,32532,29923,28970]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Social Care trendline',
data: [[0, 38800.8],[35, 30157.2]]
},
{
name: 'Both',
type: 'line',
data: [7339,8313,8707,7827,8251,7561,7160,8893,7425,8047,7844,8642,8824,7955,8266,8326,8983,8911,8606,8539,7976,8965,7602,8176,7983,6908,7250,7164,7027,8379,6628,7031,6733,7013,6698,7111]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Both trendline',
data: [[0, 8488.7],[35, 7304.7]]
}
]
}
