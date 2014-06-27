/* Created by ianb on 27/06/2014 16:14:44 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has all age all cause  mortality changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2000 - 02','2001 - 03','2002 - 04','2003 - 05','2004 - 06','2005 - 07','2006 - 08','2007 - 09','2008 - 10','2009 - 11']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'All-age all cause mortality, directly <br> standardised rate per 100,000 (three <br> year average)', offset: 99}
, labels: {
}},
series:[
{
name: 'Female',
type: 'line',
data: [555.75,552.99,544.11,532.95,513.7,502.12,492.91,480.86,469.85,454.49]
,index: 1
},
{
name: 'Male',
type: 'line',
data: [822.1,807.76,787.67,763.66,735.29,714.22,697.31,679,661.81,639.55]
,index: 2
}
]
}
