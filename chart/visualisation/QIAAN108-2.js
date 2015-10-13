/* Created by EFisher on 12/10/2015 14:32:12 using v2.7 */{
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
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012/13',
type: 'column',
data: [56.4,56.2,61.2,65.2,70.9,77.7,77.1,73.9]
,index: 1
},
{
name: '2013/14',
type: 'column',
data: [56.2,56.3,60.5,65,70.3,76.5,76.1,73.2]
,index: 2
}
]
}
