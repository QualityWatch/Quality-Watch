/* Created by ianb on 29/05/2014 14:47:06 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does cervical cancer screening coverage compare to other countries?'},
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
title: {text:'Cervical cancer  screening coverage (%)'}
, max: 95
, min: 30
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia*',
type: 'line',
data: [61.5,61.1,61,60.6,60.4,58.8,58.6,59.2,58.9,58.2,57,56.8,null]
,index: 1
},
{
name: 'Canada^',
visible: false,type: 'line',
data: [77.2,null,null,74.1,null,72.8,null,null,75.3,null,null,null,73.4]
,index: 2
},
{
name: 'Finland*',
visible: false,type: 'line',
data: [null,70.3,72,72.2,71.6,71.4,70.7,69.8,69,69.8,null,null,null]
,index: 3
},
{
name: 'France^',
visible: false,type: 'line',
data: [null,null,null,null,76.3,null,75.4,null,72.4,null,71.1,null,null]
,index: 4
},
{
name: 'Ireland*',
visible: false,type: 'line',
data: [null,null,null,70.1,65.5,60.9,62.2,62.5,null,null,null,null,64.9]
,index: 5
},
{
name: 'Italy*',
visible: false,type: 'line',
data: [null,null,null,null,37.7,36.7,38.5,39,38,39,40,41.2,null]
,index: 6
},
{
name: 'New Zealand*',
visible: false,type: 'line',
data: [73.1,72.7,72.2,72,70.3,70,70.4,71.5,73.6,74.8,75.2,75,77.2]
,index: 7
},
{
name: 'Spain^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,68.5,null,67.7,null]
,index: 8
},
{
name: 'Sweden*',
visible: false,type: 'line',
data: [78.2,78.4,78,79,79.2,78.8,78.6,78.4,null,null,null,null,null]
,index: 9
},
{
name: 'United Kingdom*',
visible: false,type: 'line',
data: [82,81.5,81.5,81.1,80.4,80.1,79.3,78.7,78.4,78.7,68.9,68.5,null]
,index: 10
},
{
name: 'United States^',
visible: false,type: 'line',
data: [90.6,null,null,89.5,null,87.7,null,null,85.9,null,85,null,null]
,index: 11
}
]
}
