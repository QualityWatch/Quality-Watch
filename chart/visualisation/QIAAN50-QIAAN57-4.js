/* Created by NCODowd on 27/07/2016 12:15:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did hospital inpatients feel staff helped them control their pain?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Do you think the hospital staff <br> did everything they could to help <br> control your pain? (Percentage of <br> inpatients)', offset: 111}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
data: [73,73,72,73,71,71,71,70,71,70,71]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [22,23,23,22,23,23,23,24,23,24,23]
,index: 1
},
{
name: 'No',
type: 'column',
data: [4,5,5,5,6,6,6,6,6,6,6]
,index: 0
}
]
}
