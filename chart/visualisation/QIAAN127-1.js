/* Created by ianb on 07/05/2014 13:26:21 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the average number of sickness days changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Median number of sickness days for <br> all staff roles', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Median days (left axis)',
type: 'column',
data: [1,1,1.5]
,index: 1
},
{
name: 'Average (mean) per employee (right axis)',
type: 'line',
data: [9.7,9.9,10.3]
,index: 1
}
]
}
