/* Created by ianb on 01/08/2014 12:54:48 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How are the numbers of admissions to psychiatric wards changing?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Q1 2010-11','Q2 2010-11','Q3 2010-11','Q4 2010-11','Q1 2011-12','Q2 2011-12','Q3 2011-12','Q4 2011-12','Q1 2012-13','Q2 2012-13','Q3 2012-13','Q4 2012-13','Q1 2013-14','Q2 2013-14','Q3 2013-14','Q4 2013-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of admissions'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Admissions gate kept by CRHT teams',
type: 'line',
data: [18069,18383,17258,17615,17714,17574,17506,17871,17530,17164,16839,17132,16548,17392,16946,16729]
,index: 1
},
{
name: 'Total admissions',
type: 'line',
data: [18624,18871,17685,18041,18269,18061,17909,18296,17888,17490,17116,17361,16941,17626,17180,17023]
,index: 2
}
]
}
