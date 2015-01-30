/* Created by ianb on 30/01/2015 14:03:57 using v2.3 */{
title: {text:'Diabetes Type 1'},
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
data: [68.9,88,93.5,92.4]
,index: 1
},
{
name: 'Blood pressure',
visible: false,type: 'column',
data: [81.3,93,96.9,95.8]
,index: 2
},
{
name: 'Cholesterol',
visible: false,type: 'column',
data: [64,86.1,92.6,89.5]
,index: 3
},
{
name: 'Serum creatinine',
visible: false,type: 'column',
data: [68.5,88.1,94,93.2]
,index: 4
},
{
name: 'Urine albumin',
visible: false,type: 'column',
data: [43.7,63,76.4,75]
,index: 5
},
{
name: 'Foot surveillance',
visible: false,type: 'column',
data: [59.3,79.4,87.6,83.8]
,index: 6
},
{
name: 'BMI',
visible: false,type: 'column',
data: [77.6,87.9,91.9,85.5]
,index: 7
},
{
name: 'Smoking',
visible: false,type: 'column',
data: [75.8,82.1,84.8,79.4]
,index: 8
},
{
name: 'Eight care processes',
visible: false,type: 'column',
data: [29.1,47.7,59.9,54.4]
,index: 9
}
]
}
