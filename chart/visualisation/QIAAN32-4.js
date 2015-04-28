/* Created by ianb on 27/04/2015 18:01:46 using v2.5 */{
title: {text:'Cervical Cancer Screening'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does cervical cancer screening coverage compare to other countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of females aged 20-69 <br> screened', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia*',
visible: true,type: 'line',
data: [61.9,61.5,61.4,61.1,61,59.4,59.3,60,59.6,59,57.8,56.9,57.3,null]
,index: 1
},
{
name: 'Canada^',
visible: false,type: 'line',
data: [77.2,null,null,74.1,null,72.8,null,null,75.3,null,null,null,73.4,null]
,index: 2
},
{
name: 'Finland',
visible: false,type: 'line',
data: [null,70.3,72,72.2,71.6,71.4,70.7,69.8,69,69.8,66.7,67.9,null,null]
,index: 3
},
{
name: 'France^',
visible: false,type: 'line',
data: [null,null,null,null,76.3,null,75.4,null,72.4,null,71.1,null,null,null]
,index: 4
},
{
name: 'Germany^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,78.7,null,null,null,null]
,index: 5
},
{
name: 'Ireland*',
visible: false,type: 'line',
data: [null,null,null,70.1,65.5,60.9,62.2,62.5,null,null,null,60.9,64.9,null]
,index: 6
},
{
name: 'Italy^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,73,75,73,76,76.9,77,null]
,index: 7
},
{
name: 'Netherlands*',
visible: false,type: 'line',
data: [65.6,65.7,66.1,65.9,65.6,65.5,66.1,66.6,66,64.6,63.9,64.2,null,null]
,index: 8
},
{
name: 'New Zealand*',
visible: false,type: 'line',
data: [73.1,72.7,72.2,72,70.3,70,70.4,71.5,73.6,74.8,75.2,75,77.2,77]
,index: 9
},
{
name: 'Spain^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,68.5,null,67.7,null,null]
,index: 10
},
{
name: 'Sweden*',
visible: false,type: 'line',
data: [78.2,78.4,78,79,79.2,78.8,78.6,78.4,null,null,null,null,null,null]
,index: 11
},
{
name: 'United Kingdom*',
visible: true,type: 'line',
data: [84,82.9,81.6,81.1,80.5,80.1,79.4,78.6,78.3,78.6,78.6,78.3,78.3,78]
,index: 12
},
{
name: 'United States^',
visible: false,type: 'line',
data: [90.6,null,null,89.5,null,87.7,null,null,85.9,null,85,null,null,null]
,index: 13
}
]
}
