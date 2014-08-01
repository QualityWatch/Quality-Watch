/* Created by ianb on 01/08/2014 12:54:10 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the proportion of joiners and leavers vary across regions (Feb-March 2014)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['East Midlands','East of England','Yorkshire and the Humber','Wessex','Thames Valley','North West London','South London','North Central & East London','Kent, Surrey and Sussex','North East','North West','West Midlands','South West','Special Health Authorities and other statutory bodies']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Leaving Rate',
type: 'column',
data: [0.71,0.86,0.68,0.83,1.02,0.88,1,0.95,0.89,0.57,0.68,0.7,0.86,0.8]
,index: 1
},
{
name: 'Joining Rate',
type: 'column',
data: [0.74,1.04,0.8,1.09,1.36,1.04,1.07,1.33,1.07,0.83,0.8,0.81,0.94,0.84]
,index: 2
}
]
}
