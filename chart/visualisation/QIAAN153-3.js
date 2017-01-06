/* Created by rreed on 05/01/2017 15:03:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does colorectal cancer mortality compare internationally over time?'},
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
title: {text:'Deaths per 100 000 population (standardised <br> rates)', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [29.4,28.7,27,25.3,23.1,null,20.1,21.2,20.8,19.9,19.4,19,null]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [null,null,null,25.4,25.2,25.6,24.7,24.6,24.2,24.2,23,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [25.7,25.1,25.8,24.8,25.5,25.4,23.8,24.5,24.3,23.5,22.9,23.4,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [25.9,25.6,25.4,25.5,25.1,24.7,23.6,23,23.2,22.9,22.4,22.3,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [32.5,31.2,31.3,30.7,29.3,28.4,27.5,26.1,25.8,24.8,24.2,24,23.3]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [16.9,17.6,17.6,17.9,18.2,17.9,16.9,17.7,17.6,17.6,17,17.1,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [31.6,31.9,30.5,30.6,31.3,29.8,31.5,28,29.1,27.7,25.8,null,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [25.5,25.3,25,24.5,null,null,24.1,23.8,23.5,23.1,23,null,null]
,index: 8
},
{
name: 'Mexico',
visible: false,type: 'line',
data: [6.7,6.6,6.4,6.8,6.9,7.2,7,7.2,7.6,6.9,7.1,7.3,7.7]
,index: 9
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [29.9,29.5,29.6,29.4,28.7,29.4,29.5,29.6,28.9,28.5,29.1,28.5,29.2]
,index: 10
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [37.2,37.6,35.5,34,35,35.6,33.9,34.5,34.4,32.5,30.7,null,null]
,index: 11
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [27.6,29.9,29,29.1,null,null,null,29.4,29.8,29.3,29.5,29.2,28.6]
,index: 12
},
{
name: 'Spain',
visible: false,type: 'line',
data: [27.6,27.9,27.7,27.6,28,27.2,26.8,27,27,27.3,27.9,28.3,27.8]
,index: 13
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [24,24.9,24.1,23.9,23.6,23.4,24.1,23.8,23.9,23.3,22.6,23.2,22.7]
,index: 14
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,26.1,25.8,25.5,25.2,24.8,24.3,24,24,23.1,22.9,null,null]
,index: 15
},
{
name: 'United States',
visible: false,type: 'line',
data: [24.1,23.3,22.8,22.1,20.8,20.2,19.9,19.6,18.6,17.9,17.6,null,null]
,index: 16
}
]
}
