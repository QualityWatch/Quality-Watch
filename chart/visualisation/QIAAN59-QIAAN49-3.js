/* Created by ianb on 04/11/2014 12:54:07 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do inpatients feel they were given enough information about their treatment or condition?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'How much information about your <br> condition or treatment was given <br> to you? (proportion of inpatients)', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Not enough',
type: 'column',
data: [20,21,21,21,21,22,21,20,20]
,index: 2
},
{
name: 'The right amount',
type: 'column',
data: [79,79,79,79,78,78,78,79,80]
,index: 1
},
{
name: 'Too much',
type: 'column',
data: [1,1,1,1,1,1,1,1,1]
,index: 0
}
]
}
