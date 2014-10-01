/* Created by ianb on 01/10/2014 11:51:59 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed for suspected breast cancer?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of people'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Proportion of people seen within 2 weeks - suspected cancer',
type: 'line',
data: [1,1,1,1,1,1,1,1,0.9]
,index: 1
},
{
name: 'Number of people with an urgent referral for suspected breast cancer',
type: 'line',
data: [53362,51514,58966,56203,58535,60969,62868,70187,71876]
,index: 1
},
{
name: 'Number of people seen within 2 weeks following referral for suspected breast cancer',
type: 'line',
data: [51853,50197,57408,54623,56666,58543,60825,67295,66368]
,index: 2
}
]
}
