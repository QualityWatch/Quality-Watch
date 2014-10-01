/* Created by ianb on 01/10/2014 11:47:47 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in support for community mental health service users?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Care responsibilities','Finding or keeping work','Finding or keeping accommodation','Financial advice or benefits','Physical health needs']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people who didn\'t <br> have support from NHS mental health <br> services for certain aspects of <br> their life', offset: 111}
, max: 45
, min: 30
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011',
type: 'column',
data: [35,43,38,38,31]
,index: 1
},
{
name: '2012',
type: 'column',
data: [39,44,38,37,36]
,index: 2
},
{
name: '2013',
type: 'column',
data: [39,43,40,39,37]
,index: 3
},
{
name: '2014',
type: 'column',
data: [null,44,42,43,35]
,index: 4
}
]
}
