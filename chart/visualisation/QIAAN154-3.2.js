/* Created by ianb on 26/06/2015 16:53:41 using v2.6 */{
title: {text:'Admission-based acute myocardial infarction, 30-day in-hospital mortality'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s acute myocardial infarction mortality rate compare internationally over time?'},
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
title: {text:'Age(-sex) standardised rate per <br> 100 hospital discharges (45+)', offset: 87}
, max: 45
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [10.6,9.4,8.9,7.9,7.4,6.7,6.7,6.2,5.4,5.2,5.1,4.8,4.4]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [13.9,12.4,12.1,11.8,10.8,10.3,9.1,8.4,8.4,7.6,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,9.3,9.3,8.8,8.5,8.2,7.2,6.8,6.5,6,5.7,null]
,index: 3
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [9.8,8.4,7.1,6.3,5.5,5.3,5.1,4.9,3.9,3.9,3.3,3,2.9]
,index: 4
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,7.9,null,null,null,6.4,6.2,null,null]
,index: 5
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,11.1,10.8,10.6,10.3,10.3,9.6,8.9,null]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [15.9,13.3,12.9,10.9,10.6,10.3,9.3,9.3,9.1,7.5,7.5,6.8,null]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,9.1,8.2,7.9,7.6,7.4,6.9,6.7,6.4,6.1,5.8,5.8,null]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [13.7,12.6,12.3,11.7,10.6,9.6,9.3,8.5,6.9,6.7,6.8,null,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [9.6,8.8,8.4,7.3,6.4,6.1,6,5.4,5.6,5.2,4.5,4.5,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [14,12.5,12,11.6,10.8,10.5,9.9,9.7,9.4,8.8,8.8,8.5,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.4,8.4,8.2,7.5,6.8,6.4,6,5.3,5.3,4.8,4.8,4.5,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,9.4,8.7,8.4,7.8,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [8.6,8.1,7.9,7.5,7.2,6.8,6.4,6.3,6.1,null,5.5,null,null]
,index: 14
}
]
}
