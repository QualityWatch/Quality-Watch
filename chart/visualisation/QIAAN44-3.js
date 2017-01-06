/* Created by rreed on 05/01/2017 15:02:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of respondents not able to contact the person in charge of their care changed? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Proportion who do not know how to <br> contact the person in charge of <br> their care', offset: 99}
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
data: [3,4,3]
,index: 1
}
]
}
