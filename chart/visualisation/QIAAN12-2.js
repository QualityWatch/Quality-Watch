/* Created by NCODowd on 13/09/2016 11:03:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do reported medication safety incidents change in acute and mental health trusts over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 14 - Sept 14','Oct 14 - Mar 15','Apr 15 - Sept 15']
, labels: {
}
},
yAxis: {
title: {text:'Medication errors reported per 10,000 <br> bed days', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Acute',
type: 'column',
data: [39.7,38.4,43.7]
,index: 1
},
{
name: 'Mental health',
type: 'column',
data: [31.4,31.5,32]
,index: 2
}
]
}
