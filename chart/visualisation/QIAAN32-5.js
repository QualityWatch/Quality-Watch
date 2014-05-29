/* Created by ianb on 29/05/2014 14:47:07 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does breast cancer screening coverage compare to other countries?'},
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
title: {text:'Breast cancer screening coverage (%)'}
, min: 15
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia*',
type: 'line',
data: [55.9,56.9,57.2,56.2,55.8,56.2,57,56.3,55.2,55.5,55.3,55,null]
,index: 1
},
{
name: 'Canada^',
visible: false,type: 'line',
data: [72.7,null,null,72.4,null,72,null,null,72.5,null,null,null,72.2]
,index: 2
},
{
name: 'Finland*',
visible: false,type: 'line',
data: [null,87.4,87.6,87.9,87.4,87,86.3,84.4,84.9,85.5,null,null,null]
,index: 3
},
{
name: 'France*',
visible: false,type: 'line',
data: [null,null,null,null,38.1,45.4,49.7,50.6,52.5,52.7,52.7,53.5,53.3]
,index: 4
},
{
name: 'Germany*',
visible: false,type: 'line',
data: [null,null,null,null,null,null,57.3,53.6,53,54.3,null,null,null]
,index: 5
},
{
name: 'Ireland*',
visible: false,type: 'line',
data: [null,null,76.3,75.2,73.1,74.1,74.8,74.4,75,73.1,71.6,72.2,null]
,index: 6
},
{
name: 'Japan^',
visible: false,type: 'line',
data: [null,22.5,null,null,23.3,null,null,23.8,null,null,36.4,null,null]
,index: 7
},
{
name: 'New Zealand*',
visible: false,type: 'line',
data: [null,null,62.6,62.3,62.6,61.5,60.1,62.6,63.4,66.9,69.3,71,71.8]
,index: 8
},
{
name: 'Spain^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,73.3,null,77.1,null]
,index: 9
},
{
name: 'United Kingdom*',
visible: false,type: 'line',
data: [75.3,75.3,75.6,74.9,75.5,75.1,75.3,74.1,73.9,73.4,72.3,72.6,null]
,index: 10
},
{
name: 'United States^',
visible: false,type: 'line',
data: [86.9,null,null,84.8,null,82.2,null,null,81.1,null,80.4,null,null]
,index: 11
}
]
}
