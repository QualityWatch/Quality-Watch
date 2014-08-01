/* Created by ianb on 01/08/2014 12:33:40 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of inpatient rooms and ward cleanliness changed?'},
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
data: [52,53,53,60,64,66,67,68,69]
,index: 3
},
{
name: 'Fairly clean',
type: 'column',
data: [40,40,40,35,32,31,30,29,28]
,index: 2
},
{
name: 'Not very clean',
type: 'column',
data: [6,6,6,4,3,3,3,2,2]
,index: 1
},
{
name: 'Not at all clean',
type: 'column',
data: [2,2,1,1,1,1,0,1,1]
,index: 0
}
]
}
