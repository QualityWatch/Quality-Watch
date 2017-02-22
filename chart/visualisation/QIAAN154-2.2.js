/* Created by rreed on 16/02/2017 16:52:50 using v2.6 */
{
title: {text:'Thirty-day mortality after admission to hospital for hemorrhagic stroke based on admission data'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the UK\'s haemorrhagic stroke mortality rate compare internationally over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-sex standardised rate per 100 <br> hospital discharges (age 45+)', offset: 87}
, max: 45
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [26.1,24.9,25.3,25.6,23.7,24.0,24.1,24.2,23.7,22.6,21.5,22.2,21.8,21.1,21.1 ]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [32.6,30.3,32.5,31.5,31.3,30.4,28.6,29.8,30.0,30.5,28.9,27.1,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,29.4,29.0,28.7,27.0,27.3,27.4,30.5,30.0,28.4,26.2,25.7,27.3,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,25.5,null,null,null,24.3,24,null,26.9,26.9,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,22.0,19.3,19.5,19.7,17.7,17.7,17.5,null,16.7,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [29.9,28.3,27.4,27.7,24.2,25.0,30.2,23.9,28.5,27.7,26.0,26.1,23.5,24.6,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,21.0,21.2,21.0,21.0,20.7,20.5,20.5,19.9,19.9,19.4,19.9,20.1,19.6,null]
,index: 7
},
{
name: 'Japan',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,11.5,null,null,11.8,null,null,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [41.2,41.2,40.8,38.0,36.6,36.2,34.0,33.5,33.0,31.3,30.9,31.1,null,null,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [33.4,34.6,33.4,30.0,33.8,31.0,32.1,28.9,29.9,29.6,30.4,31.7,29.4,29.1,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [29.7,29.3,30.0,30.9,29.1,29.6,29.5,28.4,28.3,27.5,26.8,26.4,26.1,25.5,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [18.7,18.5,18.9,18.0,18.5,18.0,17.9,16.9,15.4,15.1,14.4,15.8,14.9,15.0,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,30.3,29.9,29.2,29.3,28.3,26.5,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [27.8,28.0,27.5,27.5,27.2,25.8,24.2,23.4,23.4,null,22.3,null,null,22.0,null]
,index: 14
}
]
}
