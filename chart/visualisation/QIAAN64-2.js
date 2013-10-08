/* Created by ianb on 08/10/2013 13:50:18 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people who found it easy to access information changed by age?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18 to 64','65 and over']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who found it <br> very or fairly easy to find information <br> about social care services ', offset: 99}
, max: 90
, min: 50
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011/12',
type: 'column',
data: [70.6,75.8]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [70.8,75.9]
,index: 2
}
]
}
