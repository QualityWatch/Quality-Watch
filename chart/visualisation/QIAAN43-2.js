/* Created by ianb on 27/06/2014 16:16:16 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do employment rates for people with LTCs vary by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Age 16 to 19 ','Age 20 to 24 ','Age 25  to 29 ','Age 30 to 34 ','Age 35 to 39 ','Age 40 to 44 ','Age 45 to 49 ','Age 50 to 54 ','Age 55 to 59 ','Age 60 to 64 ']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Employment rate in 2013'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'People with LTCs',
type: 'column',
data: [27.4,50.4,63.1,67.6,67.1,67,67.7,67.4,61.7,38.1]
,index: 1
},
{
name: 'Population',
type: 'column',
data: [33,62.5,77.6,81.2,81.8,81.7,82.6,81.2,72.9,46.8]
,index: 2
}
]
}
