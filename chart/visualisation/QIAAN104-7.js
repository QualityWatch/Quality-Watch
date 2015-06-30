/* Created by ianb on 26/06/2015 16:56:48 using v2.6 */{
title: {text:' Diabetes lower extremity amputations hospital admissions '},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of diabetes lower extremity amputations admissions compare internationally over time?'},
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
title: {text:'Age-sex standardised rate per 100,000 <br> population', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,6.9,6.4,5.5,5,4.6]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [17.5,18.5,20,19.9,20.6,20.6,22.1,20.1,15.9,15.9,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,11.9,null,10,9.6,10,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,13.4,null,null,7.4,7.1,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,36.4,null,20.6,null,18.4,null]
,index: 5
},
{
name: 'Hungary',
visible: false,type: 'line',
data: [null,null,null,null,0.6,0.7,0.8,1.1,1.5,0.7,1,1.1,0.7]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [5.1,4.8,3.6,5.2,4.3,5.3,4.4,5.6,5,4.9,5.2,3.8,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,5.9,6.7,6.6,6.4,6.4,5.8,5.6,5.9,5.7,5.9,5.7,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,12.5,null,12.8,11.6,11.6,13.5,null,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,8.5,6.7,7,7.9,7.6,7.1,6.7,null]
,index: 10
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,12.8,null]
,index: 11
},
{
name: 'Spain',
visible: false,type: 'line',
data: [9.4,9.9,10.1,10.6,10.5,10.5,10.8,10.5,10.4,10.6,9.7,9.6,null]
,index: 12
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,3.2,3.2,3.6,3.2,3.3,null]
,index: 13
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,5.2,5.3,5.4,5.3,5.3,5.1,null]
,index: 14
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,37.5,null,34.5,null,17.1,null,null]
,index: 15
}
]
}
