/* Created by EFisher on 25/02/2014 18:19:58 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in support for community mental health service users?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011','2012','1905']
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
data: [35,39,39]
,index: 1
},
{
name: 'Finding or keeping work',
type: 'column',
data: [43,44,43]
,index: 2
},
{
name: 'Financial advice or benefits',
type: 'column',
data: [38,37,39]
,index: 3
},
{
name: 'Finding or keeping accommodation',
type: 'column',
data: [38,38,40]
,index: 4
},
{
name: 'Physical health needs',
type: 'column',
data: [31,36,37]
,index: 5
}
]
}
