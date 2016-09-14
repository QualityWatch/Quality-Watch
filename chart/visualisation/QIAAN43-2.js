/* Created by NCODowd on 14/09/2016 15:37:47 using v2.7 */{
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
title: {text:'Employment rate in percentage'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Employment rate of people with long-term conditions',
type: 'column',
data: [30.1,55.4,67.5,68.5,68.9,70,70.7,69,61,40.8]
,index: 1
},
{
name: 'Employment rate of population ',
type: 'column',
data: [36,67.1,81.3,82.4,83.6,83.8,84.5,82.2,73.8,51.2]
,index: 2
}
]
}
