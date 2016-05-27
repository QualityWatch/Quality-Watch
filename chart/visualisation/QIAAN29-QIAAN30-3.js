/* Created by NCODowd on 24/05/2016 16:31:52 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers finding it easy to access information varied by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Yorkshire and the Humber','North West','South West','England','South East','East','West Midlands','London','East Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of carers who found it <br> easy to find information and advice', offset: 87}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012-13',
type: 'column',
data: [7480,7110,6960,7120,6890,6720,6420,6920,6410,7080]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [7320,6840,6820,6640,6560,6500,6360,6340,6210,6160]
,index: 2
}
]
}
