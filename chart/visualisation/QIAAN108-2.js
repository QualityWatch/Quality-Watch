/* Created by EFisher on 26/03/2014 17:13:59 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18 to 24','25 to 34','35 to 44','45 to 54','55 to 64','65 to 74','75 to 84','85 or over']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of people who feel supported <br> to manage their long-term condition', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011/12',
type: 'column',
data: [57.7,57.8,62.3,66.3,72.7,78.6,77.7,74.4]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [55.9,56.3,61.4,65.2,70.9,77.8,77,73.6]
,index: 2
}
]
}
