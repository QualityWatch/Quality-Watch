/* Created by ianb on 27/04/2015 18:01:49 using v2.5 */{
title: {text:'Breast Cancer Screening'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does breast cancer screening coverage compare to other countries?'},
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
title: {text:'Percentage of females aged 50-69 <br> screened', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia*',
visible: true,type: 'line',
data: [56.3,57.3,57.6,56.7,56.3,56.8,57.6,56.9,55.8,56.2,55.9,55.2,55,null]
,index: 1
},
{
name: 'Canada^',
visible: false,type: 'line',
data: [72.7,null,null,72.4,null,72,null,null,72.5,null,null,null,72.2,null]
,index: 2
},
{
name: 'Finland*',
visible: false,type: 'line',
data: [null,87.4,87.6,87.9,87.4,87,86.3,84.4,84.9,85.5,84.8,84.8,null,null]
,index: 3
},
{
name: 'France*',
visible: false,type: 'line',
data: [null,null,null,null,38.1,45.4,49.7,50.6,52.5,52.7,52.7,53.5,53.3,null]
,index: 4
},
{
name: 'Germany*',
visible: false,type: 'line',
data: [null,null,null,null,null,null,57.3,53.6,53,54.3,null,null,null,null]
,index: 5
},
{
name: 'Ireland*',
visible: false,type: 'line',
data: [null,null,76.3,75.2,73.1,74.1,74.8,74.4,75,73.1,71.6,72.2,null,null]
,index: 6
},
{
name: 'Italy*',
visible: false,type: 'line',
data: [null,null,null,null,59,60.9,59.6,61,60,60,59.2,59.6,57.5,null]
,index: 7
},
{
name: 'Netherlands*',
visible: false,type: 'line',
data: [80.5,80.4,80.5,82,81.9,82.6,82.6,83.1,82.6,82.1,80.8,80.1,null,null]
,index: 8
},
{
name: 'New Zealand*',
visible: false,type: 'line',
data: [null,null,62.6,62.3,62.6,61.5,60.1,62.6,64.3,66.9,69.3,71,71.8,72.2]
,index: 9
},
{
name: 'Spain^',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,73.3,null,77.1,null,null]
,index: 10
},
{
name: 'United Kingdom*',
visible: true,type: 'line',
data: [null,null,75.6,75,74.8,75.4,75.8,76,76.5,76.7,77,76.9,76.5,null]
,index: 11
},
{
name: 'United States^',
visible: false,type: 'line',
data: [86.9,null,null,84.8,null,82.2,null,null,81.1,null,80.4,null,null,null]
,index: 12
}
]
}
