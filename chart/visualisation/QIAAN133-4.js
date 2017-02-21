/* Created by RReed on 21/02/2017 12:54:10 using v2.6 */
{title: {text: 'How does the proportion of joiners and leavers vary across regions ( between November 2014 and November 2015)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','North West','Yorkshire and the Humber','West Midlands','East Midlands','South West','Kent, Surrey and Sussex','South London','North West London','Thames Valley','East of England','North Central and East London','Wessex','Special Health Authorities <br> and other statutory bodies']
, labels: {
 rotation: -45
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
data: [0.71,0.71,0.75,0.78,0.80,0.90,0.94,0.96,0.98,1.00,1.00,1.01,1.01,1.45]
,index: 1
},
{
name: 'Joining Rate',
type: 'column',
data: [0.83,0.93,0.88,0.94,1.00,1.18,1.23,1.32,1.29,1.36,1.29,1.23,1.13,1.27]
,index: 2
}
