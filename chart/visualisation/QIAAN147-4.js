/* Created by ianb on 30/01/2015 15:41:45 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has treatment target achievement for people with diabetes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['HbA1c <= 48mmol/mol (6.5%)','HbA1c <= 58mmol/mol (7.5%)','HbA1c <= 86mmol/mol (10%)','BP<=140/80','Cholesterol <4mmol/L','Cholesterol <5mmol/L','Meet all treatment targets']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, labels: {
}},
series:[
{
name: '2010/11',
type: 'column',
data: [24.8,63.3,92.1,62,40.7,77.6,33.7]
,index: 1
},
{
name: '2011/12',
type: 'column',
data: [24.7,62.7,91.9,67.1,40.4,77,35.9]
,index: 2
},
{
name: '2012/13',
type: 'column',
data: [25.1,62.2,92.4,69,39.6,76.2,35.9]
,index: 3
}
]
}
