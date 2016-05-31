/* Created by NCODowd on 24/05/2016 16:31:52 using v2.7 */
{
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
title: {text:'Proportion of carers who found it <br> easy to find info and advice', offset: 87}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012-13',
type: 'column',
data: [74.8,71.1,69.6,71.2,68.9,67.2,64.2,69.2,64.1,70.8]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [73.2,68.4,68.2,66.4,65.6,65,63.6,63.4,62.1,61.6]
,index: 2
}
]
}
