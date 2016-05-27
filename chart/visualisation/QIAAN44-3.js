/* Created by NCODowd on 24/05/2016 16:31:55 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of respondents not able to contact their care coordinator changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,'Question change',2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Proportion who do not know/cannot <br> contact care co-ordinator', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Do not know how to contact',
type: 'column',
data: [4,4,4,4,null,3.06,3.62]
,index: 1
}
]
}
