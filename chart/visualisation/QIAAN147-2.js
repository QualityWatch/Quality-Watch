/* Created by ianb on 30/01/2015 15:41:32 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of all patients with diabetes receiving recommended care changed over time? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['HbA1c','Blood pressure','Cholesterol','Serum creatinine','Urine albumin','Foot surveillance','BMI','Smoking','Eight care processes']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, max: 100
, labels: {
}},
series:[
{
name: '2010/11',
type: 'column',
data: [92.5,95,91.6,92.5,75.1,84.3,89.9,84.8,60.6]
,index: 1
},
{
name: '2011/12',
type: 'column',
data: [90.3,95,90.9,92.5,76,85.3,90.3,85.1,60.5]
,index: 2
},
{
name: '2012/13',
type: 'column',
data: [92.4,95.3,91.1,92.5,73.6,85.1,90.7,86.1,59.9]
,index: 3
}
]
}
