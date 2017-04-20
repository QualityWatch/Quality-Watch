/* Created by rreed on 4/19/2017 4:41:34 PM using v2.7 */{
title: {text:'Influenza Immunisation Coverage'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s flu immunisation coverage compare internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of opulation immunised (65+)'}
, max: 100
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [74,78,76.9,76.9,79.1,null,77.5,null,null,74.6,null,null,null,null,null,null]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [null,58,null,null,64,null,null,null,65,null,null,null,null,58,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [63,null,null,67.2,null,70.9,null,69,66.6,66.5,59.4,64.4,64.1,64.1,63.1,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [65,65,67,65,63.9,63.5,63.4,63.9,64.8,63.9,56.2,55.2,53.1,51.9,48.5,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,55.8,null,48,null,63,60,56,null,61.1,56.1,null,58.6,null,null,null]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,41.4,null,null,null,null,null,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [null,null,null,62.2,61.4,63,60.6,61.7,70.1,53.8,63.8,56.3,56.9,59.4,60.2,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [40.7,50.7,55.2,60.3,63.4,66.6,68.3,66.6,64.9,66.2,65.6,60.2,62.7,54.2,55.4,48.6]
,index: 8
},
{
name: 'Korea',
visible: false,type: 'line',
data: [null,null,null,null,75.7,77.3,null,70.2,73.6,74.3,77.1,79.6,77.4,null,79.8,null]
,index: 9
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [76,76,78,77,73,77,75,78,77,74,null,null,73.5,68.8,72,null]
,index: 10
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,51,63.2,58,60.6,63.6,63.7,63.7,66.5,66.9,65.5,64.3,69,69,67.3]
,index: 11
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,41.9,36.9,46.9,39,41.6,50.4,51,53.3,52.2,48.3,43.4,44.9,49.9,50.9,null]
,index: 12
},
{
name: 'Spain',
visible: false,type: 'line',
data: [61.5,61.9,67.2,68,68.6,70.1,67.6,62.3,65.4,65.7,56.9,57.7,57,56.4,56.2,null]
,index: 13
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,51,55,61,57,58,65.8,44,55.2,46.1,44.3,45.8,49.7,null]
,index: 14
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [65,68,69,71,71,75,75.1,73.2,73.6,72.3,72.8,74,73.5,73.3,72.8,null]
,index: 15
},
{
name: 'United States',
visible: false,type: 'line',
data: [64.4,63.1,65.7,65.5,64.6,59.7,64.3,66.7,67.2,66.8,63.9,66.9,66.5,67.9,null,null]
,index: 16
}
]
}
