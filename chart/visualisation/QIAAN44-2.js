/* Created by NCODowd on 23/05/2016 17:31:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in support for community mental health service users?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Finding or keeping work','Finding or keeping accommodation','Financial advice or benefits','Physical health needs']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of people<br>who didn\'t have support<br>from NHS mental health<br>services for certain<br>aspects of their life', offset: 111}
, max: 45
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011',
type: 'column',
data: [43,38,38,31]
,index: 1
},
{
name: '2012',
type: 'column',
data: [44,38,37,36]
,index: 2
},
{
name: '2013',
type: 'column',
data: [43,40,39,37]
,index: 3
},
{
name: '2014',
type: 'column',
data: [44,42,43,35]
,index: 4
},
{
name: '2015',
type: 'column',
data: [46.8,42.9,43.3,35.4]
,index: 5
}
]
}