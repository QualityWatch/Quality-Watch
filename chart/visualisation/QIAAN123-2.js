/* Created by rreed on 05/01/2017 15:02:28 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does carer quality of life vary by age group?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Eastern','Yorkshire and the Humber','North West','England','South West','West Midlands','South East','East Midlands','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Carer-reported quality of life score '}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total',
type: 'column',
data: [8.5,8.1,8.1,8,7.9,7.9,7.8,7.7,7.6,7.6]
,index: 1
},
{
name: '18-64',
type: 'column',
data: [8.3,7.8,8,7.8,7.6,7.6,7.5,7.5,7.2,7.4]
,index: 2
},
{
name: '65 and over',
type: 'column',
data: [8.7,8.1,8.2,8.3,8.1,8.2,8,7.9,7.9,7.8]
,index: 3
}
]
}
