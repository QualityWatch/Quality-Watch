/* Created by rreed on 16/02/2017 16:51:27 using v2.6 */
{title: {text:'Admission-based ischaemic stroke, 30-day in-hospital mortality'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the UK\'s ischaemic stroke mortality rate compare internationally over time?'},
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
title: {text:'Age-sex standardised rate per 100 <br> hospital dischages (age 45+)', offset: 87}
, max: 45
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [11.9,11.5,11.7,11.4,11.2,11.1,10.8,10.9,11.3,10.5,10.1,10,9.4,9.3,8.9]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [10.5,10.2,9.9,9.8,9.1,9.3,9,9.1,8.8,9.2,9.2,9.3,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,12.9,13.1,12.6,12.1,12.3,12.3,12.4,11.2,11.3,10.5,10.4,10,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,10.6,null,null,null,8.5,8.5,null,8.2,7.9,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,8.8,8.1,7.6,7.5,7.8,6.9,6.7,null,6.4,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [14.5,14.3,13.3,12.2,11.1,12.3,11.2,11.9,11.6,10.1,11.1,9.9,9.7,9.7,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,8.3,7.9,8.2,7.6,7.6,7.1,6.9,7,6.8,6.5,6.5,6.5,6.2,null]
,index: 7
},
{
name: 'Japan',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,3.1,null,null,3,null,null,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [16.4,16,14.7,12.6,11.9,10.1,9.4,9.5,8.9,8.3,7.7,7.1,null,null,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [11.3,11,10.7,9.8,9.5,10,10.3,9.6,9,8.4,8.1,8.8,8.5,8,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [12.8,12.3,12.8,12.3,11.7,12.1,11.4,11.4,11,10.6,10.5,10.2,10.2,9.7,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [7.9,8,7.9,8,7.6,7.3,7.4,7.3,7.1,6.8,6.7,6.4,6,6.4,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,14.8,12.9,11.7,10.4,10,9.2,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [5.3,5.3,5.1,4.9,4.9,4.6,4.5,4.2,4.4,null,4.3,null,3.6,null,null]
,index: 14
}
]
}
