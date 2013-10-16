/* Created by ianb on 14/10/2013 11:40:24 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do employment rates vary by age?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['16 to 19 ','20 to 24 ','25  to 29 ','30 to 34 ','35 to 39 ','40 to 44 ','45 to 49 ','50 to 54 ','55 to 59 ','60 to 64 ']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Employment rates quarter 4 2010/11'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'People with LTCs',
type: 'column',
data: [26.6,54.1,67.7,67.2,64.9,67.6,69.6,68.5,60.6,38.8]
,index: 1
},
{
name: 'Population',
type: 'column',
data: [33.5,61.4,78,79.7,80,81.6,82,79.8,70.9,45.2]
,index: 2
}
]
}
