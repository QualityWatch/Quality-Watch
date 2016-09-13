/* Created by NCODowd on 13/09/2016 11:04:56 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has ongoing rehabilitation changed for stroke care?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of patients'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Compliance against OT target ',
type: 'line',
data: [55.8,72.1,79.6]
,index: 1
},
{
name: 'Compliance against physiotherapy target',
type: 'line',
data: [53.3,68.7,73.5]
,index: 2
},
{
name: 'Compliance against Speech & Language Therapy target',
type: 'line',
data: [24.2,35.6,41.6]
,index: 3
}
]
}
