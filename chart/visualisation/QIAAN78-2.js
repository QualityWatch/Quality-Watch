/* Created by ianb on 14/10/2013 11:43:54 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has waiting times after an urgent referral changed by cancer type?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Type of cancer'}
, categories: ['Upper gastrointestinal','Lower gastrointestinal','Skin','Urological malignancies','Other','Children\'s','Head & neck','Gynaecological','Brain/CNS','Sarcoma','Haematological malignancies','Leukaemia','Breast','Lung','Testicular']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people with an <br> urgent referral who had an outpatient <br> appointment within 2 weeks ', offset: 99}
, max: 100
, min: 90
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012/13 Q2',
type: 'column',
data: [93.64,94.48,94.53,95.3,94.92,93.95,95.88,95.84,97.16,96.2,96.66,97.62,97.44,97.17,97.27]
,index: 1
},
{
name: '2012/13 Q3',
type: 'column',
data: [93.93,94.57,95.39,95.73,96.72,96.56,96.38,96.44,97.31,97.13,97.19,93.62,97.36,97.65,98.53]
,index: 2
},
{
name: '2012/13 Q4',
type: 'column',
data: [93.89,94.64,95.67,94.87,96.06,96.75,96.46,96.44,95.64,95.56,96.77,97.92,97.19,97.18,98.22]
,index: 3
},
{
name: '2013/14 Q1',
type: 'column',
data: [93.5,94.8,95,95,94.6,96.4,96,96.2,96.4,96,97.2,97.6,96.8,97,97.8]
,index: 4
}
]
}
