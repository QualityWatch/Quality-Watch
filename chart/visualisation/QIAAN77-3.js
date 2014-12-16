/* Created by ianb on 16/12/2014 10:56:59 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of older people can access a reablement service?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13','2013/14']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of older people (over <br> 65) discharged from hospital who <br> were offered a reablement/rehabilitation <br> service', offset: 111}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [2.97,3.212,3.237,3.334]
,index: 1
}
]
}
