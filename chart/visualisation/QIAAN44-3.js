/* Created by JMorris on 15/02/2018 14:40:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of service users who do not know how to contact their care coordinator changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2012,2013,'Question change',2014,2015,2016,2017]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of respondents who do <br> not know how to contact their care <br> coordinator', offset: 99}
, max: 5
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [4,4,null,3.1,3.8,3.6,3.3]
,index: 1
}
]
}
