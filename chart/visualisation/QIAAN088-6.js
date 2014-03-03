/* Created by EFisher on 25/02/2014 18:27:00 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of Red 1 & 2 calls attended within 8 minutes varied by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of Category A calls responded <br> to within 8 minutes', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'National Target',
type: 'line',
data: [75,75,75,75,75,75,75,75,75]
,index: 1
},
{
name: 'NORTH OF ENGLAND',
type: 'line',
data: [78.5,79.6,80.1,77.3,78.4,76.3,76.3,75.4,74.2]
,index: 2
},
{
name: 'MIDLANDS AND EAST OF ENGLAND',
type: 'line',
data: [73.7,76.2,75.1,71.6,73.1,71.4,70.5,70.1,68.4]
,index: 3
},
{
name: 'LONDON',
type: 'line',
data: [75.9,77.8,76,73.6,74.2,70.9,70,71.1,71.7]
,index: 4
},
{
name: 'SOUTH OF ENGLAND',
type: 'line',
data: [74.6,76.5,75.4,72.4,74.2,74.5,75.6,75.1,73.2]
,index: 5
}
]
}
