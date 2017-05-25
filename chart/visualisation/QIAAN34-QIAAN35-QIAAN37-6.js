/* Created by rreed on 25/05/2017 13:35:13 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in staff reporting being ill due to work-related stress?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,'2015*','2016*']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress (±SEM) <br> (%)*= weighted scores', offset: 111}
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
data: [35.1,34.5,32.5,32.7,28.1,28.3,29.1,30,38.2,38.3,37.7,37,36.7]
,index: 1
},
{
name: 'Acute',
type: 'column',
data: [35.9,35.5,31.7,31.8,27.2,27.4,27.9,28.8,36.3,36.3,36.9,35.9,35.4]
,index: 2
},
{
name: 'Ambulance',
type: 'column',
data: [35.9,34.9,33.1,33.1,29.7,29.1,32,33.5,44.5,49.6,50.9,48.4,48.8]
,index: 3
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [37.4,37,34,34,30.1,30.3,31.3,32.5,41.6,42.8,42.6,39.8,39.6]
,index: 4
},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,31,40.5,42.9,41.7,39.8,38.8]
,index: 5
}
]
}
