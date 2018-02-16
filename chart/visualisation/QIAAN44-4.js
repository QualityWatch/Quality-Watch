/* Created by JMorris on 15/02/2018 14:40:45 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Service users\' overall experience of community mental health services'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Overall experience'}
, categories: ['0 (very poor)',1,2,3,4,5,6,7,8,9,'10 (very good)']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of respondents'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2013',
type: 'column',
data: [2,2,2,4,4,10,8,14,20,15,18]
,index: 1
},
{
name: '2014',
type: 'column',
data: [2.6,2.3,2.9,4,4.4,10.1,8.2,14.3,19.2,14.1,17.9]
,index: 2
},
{
name: '2015',
type: 'column',
data: [3,2.4,2.9,4.7,4.9,10.7,8.1,13.4,19.5,13.5,16.9]
,index: 3
},
{
name: '2016',
type: 'column',
data: [3.4,2.6,3.2,4,5,9.8,8.1,12,19.4,13.8,18.8]
,index: 4
},
{
name: '2017',
type: 'column',
data: [3.3,2.9,3,4,4.8,9.4,7.8,12.8,18.3,13.4,20.4]
,index: 5
}
]
}
