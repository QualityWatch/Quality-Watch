/* Created by EFisher on 26/03/2014 17:22:40 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does carer quality of life vary by gender?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2012/2013']
, labels: {
}
},
yAxis: {
title: {text:'Carer-reported quality of life'}
, max: 10
, min: 5
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [8.1]
,index: 1
},
{
name: 'Male',
type: 'column',
data: [8.3]
,index: 2
},
{
name: 'Female',
type: 'column',
data: [8]
,index: 3
}
]
}
