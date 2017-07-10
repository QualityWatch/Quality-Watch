/* Created by rreed on 06/07/2017 08:48:12 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does colorectal cancer mortality compare internationally over time?'},
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
title: {text:'Deaths per 100 000 population (standardised <br> rates)', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [23.8,23.1,22.9,20.5,18.9,null,16.7,17.5,17.1,16,15.6,15.3,14.9,15.2,14.7]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [21.6,21.1,21.7,21.3,20.6,20.4,20,19.7,19,20.1,17.7,18,17.9,17.2,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [20.6,20.6,20.8,20,20.7,20.2,19,20.1,19.5,19,18.8,19.3,null,null,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [20.2,19.7,19.6,20.1,19.3,19.3,18.2,17.7,18,17.7,17.1,17.2,16.7,16.2,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [27.1,26.2,25.8,25.3,24,23.2,22.2,21.2,20.7,19.8,19.4,19,18.4,18.3,17.6]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [14.7,15.3,15.3,15.4,14.9,15.5,14.2,15.1,15.5,13.9,13.9,14.2,13.5,null,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [25.4,21.8,23.1,25,22.8,22.5,23.1,20.6,22.5,19.7,20.1,21.2,19.2,20.5,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [20.2,20,19.7,19.2,null,null,18.6,18.9,18.4,18,17.9,18.1,17.8,null,null]
,index: 8
},
{
name: 'Japan',
visible: false,type: 'line',
data: [19.7,19.8,19.5,19.8,19.6,19.3,18.7,18.5,18.4,17.9,18,18,18.4,18,null]
,index: 9
},
{
name: 'Korea',
visible: false,type: 'line',
data: [13.5,14.1,15,15.6,15.7,16.3,15.9,16,15.8,15.9,16.2,15.5,15.7,15.2,null]
,index: 10
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [25,25.2,24.8,24.6,23.9,25.3,24.4,24.8,24.2,23.3,24,24.4,24.5,22,null]
,index: 11
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [32.7,32,29.8,29.9,31.7,31.6,31.6,29.9,28.2,28.5,26.9,26,26.9,null,null]
,index: 12
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [20.9,22.3,21.4,22.2,null,null,null,20.6,21.7,21,20.5,21.3,20,20.1,20.3]
,index: 13
},
{
name: 'Spain',
visible: false,type: 'line',
data: [20.9,20.7,20.6,20.3,20.5,19.6,19.1,19.3,19.5,19.1,19.4,20,18.9,18.8,18.2]
,index: 14
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [21,21.4,20.6,19.7,20.6,19.6,20.7,21.6,20.8,20,19.4,20.4,19.4,19.9,20.1]
,index: 15
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,20.6,20.4,20.2,19.9,19.6,19.4,19.4,19.1,18.4,18.1,17.8,18.4,17.9,null]
,index: 16
},
{
name: 'United States',
visible: false,type: 'line',
data: [20.4,19.8,19.2,18.7,17.7,17,16.9,16.6,16.1,15.3,15,14.7,14.3,14,null]
,index: 17
}
]
}
