/* Created by JMorris on 06/02/2018 11:04:47 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Have there been changes in support for community mental health service users?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Finding or keeping work','Financial advice or benefits','Physical health needs']
, labels: {
 rotation: -0
, step: 1
}
},
yAxis: {
title: {text:'Proportion of respondents who did <br> not receive any help or advice with <br> finding support for certain aspects <br> of their lives', offset: 111}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '2012',
visible: true,type: 'column',
data: [44,37,36]
,index: 1
},
{
name: '2013',
visible: false,type: 'column',
data: [43,39,37]
,index: 2
},
{
name: '2014',
visible: false,type: 'column',
data: [44.5,43.5,35.1]
,index: 3
},
{
name: '2015',
visible: false,type: 'column',
data: [46.8,43.5,35.4]
,index: 4
},
{
name: '2016',
visible: false,type: 'column',
data: [43.2,43.5,35.3]
,index: 5
},
{
name: '2017',
visible: false,type: 'column',
data: [42.7,44.9,35.9]
,index: 6
}
]
}
