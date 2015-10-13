/* Created by EFisher on 12/10/2015 14:32:12 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1 - Most deprived',2,3,4,5,6,7,8,9,'10 - Least deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of people who feel supported <br> to manage their long-term condition', offset: 87}
, min: 0
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012/13',
type: 'column',
data: [62.3,62.7,63.7,64.7,66,67.2,66.9,67.7,68.3,68.7]
,index: 1
},
{
name: '2013/14',
type: 'column',
data: [61.9,61.8,62.9,64.8,65.9,66.2,66.9,67.7,68.1,68]
,index: 2
}
]
}
