/* Created by rreed on 05/01/2017 15:02:29 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion of people with learning disabilities living in their own home vary across England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North West','North East','Yorkshire and the Humber','East Midlands','England','Eastern','South West','South East','London','West Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults with a learning <br> disability who live in their own <br> home or with family', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [88.9,80.4,78.6,76.3,75.4,74,72.2,70.2,70.1,67.9]
,index: 1
}
]
}
