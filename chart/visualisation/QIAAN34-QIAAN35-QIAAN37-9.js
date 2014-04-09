/* Created by Ian on 01/04/2014 16:09:00 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups in reporting working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they worked extra <br> hours (paid and un-paid) (±SEM)(%)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'England',
type: 'line',
data: [71.4,71.2,70.1,66.3,66.2,65.1,65.3,65.2,70.3,70.9]
,index: 1
},
{
name: 'Medical/dental staff',
visible: false,type: 'line',
data: [77.3,79.3,80.6,72.8,75,78.6,76.8,79.4,83.5,84.3]
,index: 2
},
{
name: 'Registered nurses',
visible: false,type: 'line',
data: [null,79.7,78.3,75.8,75.9,76.1,75.9,75.8,81,81.5]
,index: 3
},
{
name: 'Healthcare assistants',
visible: false,type: 'line',
data: [null,56.1,55.4,49.1,51.4,48.4,49.8,49.1,56.1,58.1]
,index: 4
},
{
name: 'Health visitors',
visible: false,type: 'line',
data: [82.2,81,81.7,75.1,80.2,80.5,81.6,74.9,82.2,81]
,index: 5
},
{
name: 'Social care staff',
visible: false,type: 'line',
data: [65.8,69.5,68.6,58.8,61.2,66.7,66.9,67.8,66.4,66.7]
,index: 6
},
{
name: 'AHP, Scientific & Technical staff',
visible: false,type: 'line',
data: [null,72.6,72.3,67.5,67.1,66.2,66.4,66.2,70.7,73]
,index: 7
},
{
name: 'General managers',
visible: false,type: 'line',
data: [90.1,91.3,92.8,88.3,88.4,88.2,86.8,null,89.3,89.7]
,index: 8
},
{
name: 'Wider healthcare team',
visible: false,type: 'line',
data: [null,null,null,null,53.5,51.9,52.7,52.8,57.2,57.8]
,index: 9
}
]
}
