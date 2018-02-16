/* Created by JMorris on 15/02/2018 14:40:56 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does carer-reported quality of life vary by age group?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Yorkshire and the Humber','ENGLAND','North West','West Midlands','Eastern','London','South East','South West','East Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Carer-reported quality of life score, <br> 2016-17 ', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total',
type: 'column',
data: [8.3,8,7.7,7.7,7.7,7.6,7.6,7.6,7.6,7.5]
,index: 1
},
{
name: '18-64',
type: 'column',
data: [8.1,7.7,7.4,7.4,7.5,7.4,7.4,7.3,7.2,7.1]
,index: 2
},
{
name: '65 and over',
type: 'column',
data: [8.6,8.2,8,8.1,7.9,7.7,7.9,7.9,7.8,7.8]
,index: 3
}
]
}
