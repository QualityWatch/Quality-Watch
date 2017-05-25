/* Created by rreed on 25/05/2017 13:35:12 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many staff report working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,'2015*','2016*']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they worked extra <br> hours (paid and un-paid) (±SEM)(%)*= <br> weighted scores', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'column',
data: [76.3,71.4,71.2,70.1,66.3,66.2,65.1,65.3,65.2,70.3,70.9,71.6,72.7,71.8]
,index: 1
},
{
name: 'Acute',
type: 'column',
data: [75.2,71.5,71.7,70.4,67.6,67.4,65.7,65.4,64.9,69.5,70.1,71,72.1,71.3]
,index: 2
},
{
name: 'Ambulance',
type: 'column',
data: [85.5,83.8,83.2,83.2,81.7,80.6,79.7,79.6,80.5,83.8,83.3,84.3,85.6,84.5]
,index: 3
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [74,69.4,69.7,68.5,64.1,64.1,63.3,64.8,64.8,69.6,70.8,71.2,73.4,71.9]
,index: 4
},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,65.3,70.4,70.9,70.3,72.6,70]
,index: 5
}
]
}
