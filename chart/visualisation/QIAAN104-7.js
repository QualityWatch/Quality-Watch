/* Created by rreed on 06/07/2017 08:49:15 using v2.7 */{
title: {text:' Diabetes lower extremity amputations hospital admissions '},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of diabetes lower extremity amputations admissions compare internationally over time?'},
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
title: {text:'Age-sex standardised rate per 100,000 <br> population', offset: 87}
, labels: {
format: '{value:.4f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,4.5,3.8,3.5,4.5,3.7]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [4.7,4.7,5.2,5.7,5.8,5.1,5.2,5.3,5.5,5.2,5.3,4.8,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,7.3,7.4,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,7.5,7.2,7.1,7.5,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,9.2,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [4.3,4.5,3.2,4.3,3.2,4.3,3.3,4.2,4.1,3.6,3.4,2.5,3,3.2,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,null,3.8,3.8,3.5,3.5,3.3,3.1,3.3,3,2.9,2.9,2.9,2.7,null]
,index: 7
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,null,4.8,4.2,4.8,4.6,5,4.7,null,null,null]
,index: 8
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,7.9,6.3,6.4,7.3,6.7,6.3,5.9,5.9,null,null]
,index: 9
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,11.9,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [7,7.5,7.8,8.1,8.1,8.1,8.2,8,7.9,7.9,7.2,7.3,7.1,6.7,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,3.5,4,3.8,3.7,4,4,4.1,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,3,2.8,3.1,null]
,index: 13
}
]
}
