/* Created by ianb on 26/06/2015 16:53:22 using v2.6 */{
title: {text:'Patient-based acute myocardial infarction, 30-day mortality (in hospital and out of hospital)'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s acute myocardial infarction mortality rate compare internationally over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-sex standaridsed rate per 100 <br> patients (45+)', offset: 87}
, max: 45
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Netherlands',
visible: true,type: 'line',
data: [16.4,15.4,15.2,14.9,14,13,12.5,11.6,10,9.7,9.8,null,null]
,index: 1
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [13.1,12.7,12.3,11.4,10.4,9.7,9.5,9.1,8.9,8.5,8.6,8.4,null]
,index: 2
},
{
name: 'Norway',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,8,8.2,null]
,index: 3
},
{
name: 'Spain',
visible: false,type: 'line',
data: [14.7,13.3,12.8,12.4,11.6,11.2,10.5,10.3,10,9.4,9.3,9,null]
,index: 4
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [14.1,12.9,13.2,12.3,11.4,11.2,10.6,9.6,9.7,8.9,8.9,8.5,null]
,index: 5
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,12,11,10.7,10,null]
,index: 6
}
]
}
