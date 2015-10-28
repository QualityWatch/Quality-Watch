/* Created by EFisher on 20/10/2015 10:49:55 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the trends in publicly funded adult social care staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Percentage change in numbers of <br> whole time equivalent', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Direct care',
type: 'line',
data: [0,-6.1,-17.9,-27.1]
,index: 1
},
{
name: 'Manager, Supervisor',
type: 'line',
data: [0,-4.5,-12.5,-21.8]
,index: 2
},
{
name: 'Professional',
type: 'line',
data: [0,1.7,3.3,-2.3]
,index: 3
},
{
name: 'Other',
type: 'line',
data: [0,-6.5,-14,-19.1]
,index: 4
}
]
}
