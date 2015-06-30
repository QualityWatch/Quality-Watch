/* Created by ianb on 26/06/2015 16:56:54 using v2.6 */{
title: {text:'Cervical Cancer Mortality'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does cervical cancer mortality compare internationally over time?'},
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
title: {text:'Deaths per 100 000 females (standardised <br> rates)', offset: 87}
, max: 10
, min: 0
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Belgium',
visible: true,type: 'line',
data: [null,null,null,2.7,3.1,2.7,2.5,2.5,2.9,3.1,2.5,null,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [2.6,2.6,2.3,2.3,2.3,2.2,2.2,2.2,2,2,2,2.1,null]
,index: 2
},
{
name: 'Finland',
visible: false,type: 'line',
data: [2.5,2.1,1.6,1.6,1.8,1.8,1.7,1.3,1.8,1.6,1.6,1.4,1.5]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [2.1,2.3,2.1,2.2,2.1,2.1,2,1.9,2.1,2.1,2,2.1,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [3.8,3.6,3.5,3.4,3.2,3.1,2.8,3,3,3,2.8,3,2.9]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [1.8,1.3,1.6,1.5,1.6,1.4,1.5,1.8,1.6,2,2.5,2.4,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [4,3.9,4.4,3.8,5.2,4.4,4.4,4.5,3.9,4.6,4.3,null,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [1,1.1,1,1,null,null,0.9,1.1,1,1,1,null,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [3.1,2.8,2.2,2.4,2.3,2.6,2.3,2.2,2.6,2.2,2.2,2,2.2]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [3.7,3.5,3.5,3,3.6,2.8,2.6,3.2,2.8,2.1,2.4,null,null]
,index: 10
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [4,4.8,3.8,3.7,null,null,null,3.8,3.9,4.2,3.4,3.7,3.2]
,index: 11
},
{
name: 'Spain',
visible: false,type: 'line',
data: [2.7,2.4,2.3,2.3,2.2,2.4,2.4,2.4,2.4,2.4,2.4,2.5,2.3]
,index: 12
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [3.2,2.9,3,2.5,3,2.5,2.3,2.9,2.5,2.7,2.5,2.5,2.1]
,index: 13
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,3.6,3.4,3.3,3.2,3.1,2.8,2.7,2.7,2.7,2.7,null,null]
,index: 14
},
{
name: 'United States',
visible: false,type: 'line',
data: [3.1,2.9,2.8,2.7,2.6,2.6,2.6,2.6,2.6,2.5,2.4,null,null]
,index: 15
}
]
}
