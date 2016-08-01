/* Created by NCODowd on 27/07/2016 12:16:07 using v2.7 */
{
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
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Compliance against OT target ',
type: 'line',
data: [55.80,72.10,79.60]
,index: 1
},
{
name: 'Compliance against physiotherapy target',
type: 'line',
data: [53.30,68.70,73.50]
,index: 2
},
{
name: 'Compliance against Speech & Language Therapy target',
type: 'line',
data: [24.20,35.60,41.60]
,index: 3
}
]
}
