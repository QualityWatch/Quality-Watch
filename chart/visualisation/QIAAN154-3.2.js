/* Created by ianb on 16/02/2017 16:53:41 using v2.6 */{title: {text:'Thirty-day mortality after admission to hospital for acute myocardial infarction based on admission data'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s acute myocardial infarction mortality rate compare internationally over time?'},
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
title: {text:'Age(-sex) standardised rate per <br> 100 hospital discharges (age 45+)', offset: 87}
, max: 45
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [10.6,9.4,8.9,7.9,7.4,6.7,6.7,6.2,5.4,5.2,5.1,4.8,4.4,4.1,4.0]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [14.2,12.5,12.2,11.9,11.0,10.4,9.2,8.5,8.4,7.6,8.0,7.3,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,9.3,9.3,8.8,8.5,8.2,7.2,8.5,8.0,7.5,7.2,6.7,6.7,null]
,index: 3
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [null,null,null,null,null,null,8.8,8.5,7.1,7.4,6.8,6.3,6.3,5.7,null]
,index: 4
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,7.9,null,null,null,6.4,6.2,null,7.1,7.2,null]
,index: 5
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,11.1,10.8,10.6,10.3,10.3,9.6,8.9,null,8.7,null
]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [15.9,13.3,12.9,10.9,10.6,10.3,9.3,9.3,9.1,7.5,7.5,6.8,6.8,6.4,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,9.1,8.2,7.9,7.6,7.4,6.9,6.7,6.4,6.1,5.8,5.8,5.8,5.5,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [14.8,13.9,13.6,13.2,12.4,11.6,11.3,10.7,8.9,8.6,8.5,7.6,null,null,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [9.5,8.8,8.5,7.9,6.9,6.9,6.6,6.0,6.4,6.2,6.2,6.5,6.8,6.6,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [14.0,12.5,12.0,11.6,10.8,10.5,9.9,9.7,9.4,8.8,8.8,8.5,8.1,7.8,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.4,8.4,8.2,7.5,6.7,6.4,5.9,5.3,5.3,4.7,4.8,4.5,4.5,4.5,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,9.4,8.7,8.4,8.4,7.9,7.6,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [8.6,8.1,7.9,7.5,7.2,6.8,6.4,6.3,6.1,null,5.5,null,5.5,null,null]
,index: 14
}
]
}
