/* Created by EFisher on 24/01/2014 16:57:16 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the proportion of people who found it easy to access information about social care changed by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
