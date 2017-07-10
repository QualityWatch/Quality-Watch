/* Created by rreed on 06/07/2017 08:50:19 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has prevalence of diabetes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, max: 10
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [4.6,4.7,4.9,4.8,5.1,6.4]
,index: 1
}
]
}
