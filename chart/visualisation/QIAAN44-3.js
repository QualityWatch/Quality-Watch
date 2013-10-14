/* Created by ianb on 14/10/2013 11:40:34 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of respondents not able to contact their care coordinator changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010','2011','2012']
, labels: {
}
},
yAxis: {
title: {text:'The proportion of people who felt <br> they could not contact their care <br> co-ordinator if they have a problem', offset: 99}
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
