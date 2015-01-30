/* Created by ianb on 30/01/2015 15:41:08 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has HbA1c target achievement for children with diabetes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'HbA1c band'}
, categories: ['<48','>=48 and <58','>58 and <=80','>80 and <=102','>102 and <=124','>124']
, labels: {
 rotation: -90
, step: 1
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
data: [4.3,11.5,55.5,20.8,5.7,2.2]
,index: 1
},
{
name: '2011/12',
type: 'column',
data: [3.8,13.6,56.2,19.5,5.1,1.8]
,index: 2
},
{
name: '2012/13',
type: 'column',
data: [3.6,12.2,58.4,19.1,4.8,1.9]
,index: 3
}
]
}
