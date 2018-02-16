/* Created by JMorris on 06/02/2018 11:32:59 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion of adults with a learning disabilities who live in their own home or with their family vary across England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North West','North East','Yorkshire and the Humber','England','East Midlands','Eastern','South West','London','South East','West Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults with a learning <br> disability who live in their own <br> home or with family, 2016-17', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [88,81.1,79.4,{y: 76.2, color: '#f28f43'},75.7,75.6,73.7,71.3,71.3,70.3]
,index: 1
}
]
}
