/* Created by EFisher on 26/03/2014 17:22:55 using v2.1 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does carer quality of life vary by age group?'},
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
name: 'All',
type: 'column',
data: [8.1]
,index: 1
},
{
name: 'Adults 18 to 64',
type: 'column',
data: [7.8]
,index: 2
},
{
name: 'Adults 65 and over',
type: 'column',
data: [8.3]
,index: 3
}
]
}
