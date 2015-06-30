/* Created by ianb on 26/06/2015 16:52:26 using v2.6 */{
title: {text:'Patient-based haemorrhagic stroke, 30-day mortality (in hospital and out of hospital)'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s haemorrhagic stroke mortality rate compare internationally over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-sex standardised rate per 100 <br> patients (45+)', offset: 87}
, min: 15
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Korea',
visible: true,type: 'line',
data: [null,null,null,null,22,22.8,22.2,20.3,19.4,18.7,18.7,18.5]
,index: 1
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [40,40,40.5,37.2,36.4,35.8,34.1,34.1,34.2,32.8,31.7,null]
,index: 2
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [35.6,37.8,35.1,33.2,36.8,33.4,36.2,34.8,33.4,32.4,34.1,34.7]
,index: 3
},
{
name: 'Spain',
visible: false,type: 'line',
data: [30.3,29.8,30.6,31.4,29.6,30,30,28.9,28.7,28,27.1,26.8]
,index: 4
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [27.8,26.4,27.7,26,26.3,25.8,25.9,24.4,23,23.3,22.6,24]
,index: 5
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,35.2,34.8,33.8,33.7]
,index: 6
}
]
}
