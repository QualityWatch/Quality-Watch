/* Created by ianb on 30/01/2015 14:04:42 using v2.3 */{
title: {text:'Diabetes Type 2'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion of people with diabetes receiving the recommended care processes differ by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['<40','40-64','65-79','80<']
, labels: {
}
},
yAxis: {
title: {text:''}
, max: 100
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'HbA1c',
visible: true,type: 'column',
data: [85.7,92.7,95.6,93.6]
,index: 1
},
{
name: 'Blood pressure',
visible: false,type: 'column',
data: [89.3,95,97.5,96.8]
,index: 2
},
{
name: 'Cholesterol',
visible: false,type: 'column',
data: [82.5,91.6,94.6,91.7]
,index: 3
},
{
name: 'Serum creatinine',
visible: false,type: 'column',
data: [84.8,92.3,95.6,94.6]
,index: 4
},
{
name: 'Urine albumin',
visible: false,type: 'column',
data: [59.2,72,79.6,77]
,index: 5
},
{
name: 'Foot surveillance',
visible: false,type: 'column',
data: [73.8,84.8,90.1,85.5]
,index: 6
},
{
name: 'BMI',
visible: false,type: 'column',
data: [86.4,91.4,93.6,87.4]
,index: 7
},
{
name: 'Smoking',
visible: false,type: 'column',
data: [84.1,86.8,88.3,83.3]
,index: 8
},
{
name: 'Eight care processes',
visible: false,type: 'column',
data: [46.3,59.2,66.7,59.8]
,index: 9
}
]
}
