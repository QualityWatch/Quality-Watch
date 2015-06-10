/* Created by ianb on 08/06/2015 16:34:15 using v2.6 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the number of maternities changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
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
name: 'Total maternities',
type: 'line',
data: [601262,634035,640681,652967,659543,664691,658112,632956]
,index: 1
},
{
name: 'Maternities known to be smokers',
type: 'line',
data: [90887,91573,92123,91328,89211,87640,83487,75913]
,index: 2
}
]
}
