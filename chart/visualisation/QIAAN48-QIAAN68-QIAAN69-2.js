/* Created by hdorning on 23/08/2017 15:40:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of toilet cleanliness changed among inpatients?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'How clean did inpatients find their <br> toilets and bathrooms? (Percentage <br> of inpatients)', offset: 99}
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
data: [48,48,48,53,57,60,61,62,63,62,64,64]
,index: 3
},
{
name: 'Fairly clean',
type: 'column',
data: [40,41,41,39,36,34,33,33,32,32,31,31]
,index: 2
},
{
name: 'Not very clean',
type: 'column',
data: [9,8,9,7,5,5,4,4,4,4,4,4]
,index: 1
},
{
name: 'Not at all clean',
type: 'column',
data: [3,3,3,2,1,1,1,1,1,1,1,1]
,index: 0
}
]
}
