/* Created by EFisher on 24/01/2014 16:54:55 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in support for community mental health service users?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011','2012']
, labels: {
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
name: 'Care responsibilities',
type: 'column',
data: [35,39]
,index: 1
},
{
name: 'Finding or keeping work',
type: 'column',
data: [43,43]
,index: 2
},
{
name: 'Finding or keeping accommodation',
type: 'column',
data: [38,37]
,index: 3
},
{
name: 'Financial advice or benefits',
type: 'column',
data: [38,37]
,index: 4
},
{
name: 'Physical health needs',
type: 'column',
data: [31,36]
,index: 5
}
]
}
