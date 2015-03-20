/* Created by ianb on 20/03/2015 10:28:16 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do medication safety incidents reported change in acute and mental health trusts over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 09 - Mar 10','Apr 11 - Sep 11','Oct 11 - Mar 12','April 12-Sep12','Oct 12 - Mar 13','Apr 13 - Sep 13','Oct 13 - Mar 14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Acute rate of incidents reported per 10,000 admissions',
type: 'column',
data: [62.69,75.06,74.73,74.7,79.5,83.96,88.66]
,index: 1
},
{
name: 'Mental health rate of incidents reported per 10,000 bed days',
type: 'column',
data: [13.88,17.97,17.92,19.73,20.33,23.6,23.88]
,index: 2
}
]
}
