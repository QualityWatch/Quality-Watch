/* Created by rreed on 16/02/2017 16:52:26 using v2.6 */{
title: {text:'Thirty-day mortality after admission to hospital for hemorrhagic stroke based on patient data'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s haemorrhagic stroke mortality rate compare internationally over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
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
data: [null,null,null,null,22.0,22.8,22.2,20.8,20.0,19.5,19.4,19.0,18.3,17.4]
,index: 1
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [40.8,40.8,41.1,38.0,36.9,36.5,33.9,34.1,34.2,32.8,31.8,32.1,null,null]
,index: 2
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [37.1,38.5,36.4,33.5,36.5,33.8,35.0,33.6,33.4,32.4,33.2,34.2,33.5,32.0]
,index: 3
},
{
name: 'Spain',
visible: false,type: 'line',
data: [30.3,29.8,30.6,31.3,29.6,30.0,30.0,28.9,28.7,28.0,27.1,26.8,26.4,25.9 ]
,index: 4
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [27.7,26.4,27.9,26.0,26.2,25.8,26.0,24.4,23.0,23.4,22.7,24.1,23.3,23.3 ]
,index: 5
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,35.2,34.8,33.8,31.0,30.1,28.3]
,index: 6
}
]
}
