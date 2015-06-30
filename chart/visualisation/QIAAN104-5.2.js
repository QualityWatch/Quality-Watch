/* Created by ianb on 26/06/2015 16:44:37 using v2.6 */{
title: {text:'Asthma hospital admissions'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of COPD and asthma admissions compare internationally over time?'},
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
title: {text:'Age- and sex-standardised rate per <br> 100,000 population (15+)', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,71.9,66.2,69.2,68.1,68.7]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [56.1,49.1,54.4,46.7,41.8,49,52.1,49.3,38.3,37.9,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,18.3,null,15.8,15.6,13.6,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,43.6,null,null,39.4,36.6,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,21.1,null,20.8,null,19.6,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [104.2,104.1,93,97.2,83.1,55.2,52.7,52.3,54.2,43.2,40,36.8,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,28,24.8,21.8,20.5,19.3,17,15.8,14.8,13.6,13.3,11.4,null]
,index: 7
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,26.4,null,27.7,27.9,30,31.8,null,null]
,index: 8
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,76.8,75.8,72.9,77.3,81.8,77.8,76.3,null]
,index: 9
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,17.8,null,15.3,null,16,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [51.7,42.6,49,51.8,47.9,51.1,41.6,45.2,42.9,42.1,39.9,39.5,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,21.3,19.8,21.5,22.7,22.2,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,79.5,71.8,77.6,70.9,70.1,60.8,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,122.2,null,123.3,null,117,null,null]
,index: 14
}
]
}
