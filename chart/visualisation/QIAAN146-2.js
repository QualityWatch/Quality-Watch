/* Created by EFisher on 26/10/2015 10:09:33 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has HbA1c target achievement for children with diabetes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'HbA1c band (mmol/mol)'}
, categories: ['<58','>58 and <=80','>80']
, labels: {
}
},
yAxis: {
title: {text:'Percentage'}
, labels: {
}},
series:[
{
name: '2010/11',
type: 'column',
data: [15.8,55.5,28.7]
,index: 1
},
{
name: '2011/12',
type: 'column',
data: [17.4,56.2,26.4]
,index: 2
},
{
name: '2012/13',
type: 'column',
data: [15.8,58.4,25.8]
,index: 3
},
{
name: '2013/14',
type: 'column',
data: [18.4,57.7,23.9]
,index: 4
}
]
}
