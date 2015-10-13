/* Created by EFisher on 12/10/2015 14:29:31 using v2.7 */{
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
title: {text:'Employement rate'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'column',
data: [27.3,55.2,65.6,65.9,68.3,69.8,70.3,68.1,62.1,40.7]
,index: 1
},
{
name: 'Employment rate of people with long-term conditions',
type: 'column',
data: [35.9,65.9,79.4,81.9,82.5,84,84.9,82.2,73.9,49.4]
,index: 2
}
]
}
