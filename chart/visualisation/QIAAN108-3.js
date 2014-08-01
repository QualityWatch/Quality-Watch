/* Created by ianb on 01/08/2014 12:46:09 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['10 - Least deprived',9,8,7,6,5,4,3,2,'1 - Most deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of people who feel supported <br> to manage their long-term condition', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011/12',
type: 'column',
data: [70.7,70.1,69.9,68.6,68.5,66.8,65.3,63.9,63.4,62.8]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [68.7,68.3,67.7,66.9,67.2,66,64.7,63.7,62.7,62.3]
,index: 2
}
]
}
