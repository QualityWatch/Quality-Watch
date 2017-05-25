/* Created by rreed on 25/05/2017 13:39:00 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Percentage of staff agreeing that their role makes a difference to patients / service users'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2008,2009,2010,2011,2012,2013,2014,'2015*','2016*']
, labels: {
}
},
yAxis: {
title: {text:'% staff agreeing that their role <br> makes a difference to patients*= <br> weighted score', offset: 99}
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
data: [89.7,90,89.1,87.5,89.3,89.7,88.9,84,84]
,index: 1
},
{
name: 'Acute',
type: 'column',
data: [89.4,90,90.1,90.3,89.6,90.5,90.4,84,84]
,index: 2
},
{
name: 'Ambulance',
type: 'column',
data: [89.9,89.3,89.1,88.9,85.5,86.1,85.4,80,81]
,index: 3
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [90.2,90.8,90.5,90.4,89.3,89.7,89.3,80,81]
,index: 4
},
{
name: 'Community',
type: 'column',
data: [null,null,null,90.7,90.5,90.5,90.2,85,84]
,index: 5
}
]
}
