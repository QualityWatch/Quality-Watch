/* Created by EFisher on 12/10/2015 14:32:05 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the number of maternities changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of maternities'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total Maternities',
type: 'line',
data: [601262,634035,640681,652967,659543,664691,658112,632956,622643]
,index: 1
},
{
name: 'Maternities known to be smokers',
type: 'line',
data: [90887,91573,92123,91328,89211,87640,83487,75913,70879]
,index: 2
},
{
name: 'Not known smoking',
type: 'line',
data: [24864,9959,10356,11397,6583,6265,8524,8840,18586]
,index: 3
}
]
}
