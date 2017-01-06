/* Created by rreed on 05/01/2017 15:02:27 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has carer quality of life changed over time? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Yorkshire and the Humber','North West','South West','Eastern','England','South East','West Midlands','East Midlands','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Carer-reported quality of life score '}
, labels: {
}},
series:[
{
name: '2012-13',
type: 'column',
data: [8.6,8.3,8.2,8.2,8.1,8.1,8.1,7.9,7.7,7.7]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [8.5,8.1,8,7.9,8.1,7.9,7.7,7.8,7.6,7.6]
,index: 2
},
{
name: '2015-16',
type: 'column',
data: [8.5,8.1,8,7.9,8.1,7.9,7.7,7.8,7.6,7.6]
,index: 3
}
]
}
