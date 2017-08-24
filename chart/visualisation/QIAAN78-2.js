/* Created by hdorning on 23/08/2017 15:41:10 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [' Acute leukaemia',' Brain/CNS tumours',' Breast cancer',' Children\'s cancer',' Gynaecological cancer',' Haematological malig. (excl. acute leukaemia)',' Head & neck cancer',' Lower gastrointestinal cancer',' Lung cancer',' Other cancer',' Sarcoma',' Skin cancer',' Testicular cancer',' Upper gastrointestinal cancer',' Urological malig. (excl. testicular)']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2014/15 Q1',
type: 'column',
data: [98.3,96.7,92.3,92.9,94.4,96.4,95.2,93.6,96.2,94.5,94.1,93,97.2,92.2,94]
,index: 1
},
{
name: '2015/16 Q1 ',
type: 'column',
data: [94.1,95.5,94.6,94.1,94.6,97,94.7,92.2,95,96.7,95.1,93.5,96.5,91,93.9]
,index: 2
},
{
name: '2016/17 Q1',
type: 'column',
data: [100,94.3,94.1,95.2,94.7,95.1,94.3,92.7,94.9,93.4,92.6,93.9,96.2,91.7,93.4]
,index: 3
}
]
}
