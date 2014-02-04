/* Created by EFisher on 24/01/2014 16:54:56 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of respondents not able to contact their care coordinator changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010','2011','2012']
, labels: {
}
},
yAxis: {
title: {text:'The proportion of people who felt <br> they could not contact their care <br> coordinator if they have a problem', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Can you contact your care co-ordinator',
type: 'column',
data: [4,4,4]
,index: 1
}
]
}
