/* Created by NCODowd on 13/09/2016 11:03:50 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do employment rates for people with LTCs vary by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['16 to 19','20 to 24','25 to 29','30 to 34','35 to 39','40 to 44','45 to 49','50 to 54','55 to 59','60 to 64']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'column',
data: [3010,5540,6750,6850,6890,7000,7070,6900,6100,4080]
,index: 1
},
{
name: 'Employment rate of population ',
type: 'column',
data: [3600,6710,8130,8240,8360,8380,8450,8220,7380,5120]
,index: 2
}
]
}
