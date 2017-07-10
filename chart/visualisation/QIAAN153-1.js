/* Created by rreed on 06/07/2017 08:48:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does breast cancer mortality compare internationally over time?'},
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
title: {text:'Deaths per 100 000 females (standardised <br> rates)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [28,28.1,28.3,28,27,null,25.8,25.2,25.5,24.9,24.7,24.8,23.4,23.4,22.4]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [39.4,38,38,35.8,36.1,35.5,34.5,35.4,34.8,34.2,33.7,33.7,31.8,31.5,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [32.5,32.6,31.8,31.6,30.2,29.7,28.1,28.5,27.3,26.6,26.1,25.4,null,null,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [32.2,31.8,31.8,31.3,31.1,30.7,30.2,29.3,29.5,28.9,28.7,27.6,27.3,27.2,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [34.3,33.3,33.5,32.2,32.5,31.9,31.1,29.8,30.1,29.5,29.7,30,29.4,29.5,28.4]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [26.7,28.3,28.5,26.5,29,27.5,28,29.2,27.9,27.1,27.7,24.6,26,null,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [41.5,40.8,36.3,38,38,38.9,37.1,33,38.6,34.9,31.6,33.7,32.6,32.5,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [31.4,31.2,29.9,29.9,null,null,28.2,28.7,28.8,28.2,27.5,27.1,26.7,null,null]
,index: 8
},
{
name: 'Japan',
visible: false,type: 'line',
data: [12.2,12.7,12.4,12.5,13.1,13.1,13.5,13.5,13.8,13.8,14,14.2,13.6,14.2,null]
,index: 9
},
{
name: 'Korea',
visible: false,type: 'line',
data: [6.1,6.2,6.9,7,7.1,7.2,7.2,7.3,7.3,7.7,7.4,7.8,7.6,8.2,null]
,index: 10
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [40.9,40.6,40.4,38.5,37.4,36.6,36.5,34.2,35.2,32.9,32.8,32.8,31.5,30.6,null]
,index: 11
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [35.3,34.6,34.1,34.7,33.6,33,30.9,31.4,29.5,30.7,29.1,28.4,27,null,null]
,index: 12
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [26.2,27.8,25.7,25.3,null,null,null,24,23.7,23.9,23.8,22.9,24.2,22.2,22.4]
,index: 13
},
{
name: 'Spain',
visible: false,type: 'line',
data: [24.7,25.3,24.1,24.1,23.2,22.3,22.6,22.2,22,21.6,21.7,21.5,20.7,21,19.8]
,index: 14
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,37.7,36.9,36,35,34.8,34.2,32.9,32.5,31.2,30.4,30.4,29.9,29.1,null]
,index: 15
},
{
name: 'United States',
visible: false,type: 'line',
data: [30.5,29.6,29.1,28.7,27.9,27.4,26.8,26.2,25.7,25.3,24.9,24.5,24.2,23.7,null]
,index: 16
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [28.1,26.7,26.2,26.9,27.6,26.9,25.9,24.8,25.5,23.1,23.2,23.2,23.5,23.6,22]
,index: 17
}
]
}
