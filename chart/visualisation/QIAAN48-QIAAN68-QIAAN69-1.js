/* Created by NCODowd on 27/07/2016 12:15:10 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of inpatient rooms and ward cleanliness changed?'},
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
title: {text:'How clean did inpatients find their <br> room or ward? (Percentage of inpatients)', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Very clean',
type: 'column',
data: [53,54,54,61,65,66,67,69,70,69,71]
,index: 3
},
{
name: 'Fairly clean',
type: 'column',
data: [39,39,39,35,31,30,30,29,28,28,27]
,index: 2
},
{
name: 'Not very clean',
type: 'column',
data: [6,6,6,4,3,3,3,2,2,2,2]
,index: 1
},
{
name: 'Not at all clean',
type: 'column',
data: [2,1,1,1,1,1,0,1,0,0,0]
,index: 0
}
]
}
