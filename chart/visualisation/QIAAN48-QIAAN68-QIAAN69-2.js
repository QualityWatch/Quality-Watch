/* Created by ianb on 08/10/2013 13:48:37 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of inpatient toilets cleanliness changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
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
data: [46,47,47,52,57,59,60,61]
,index: 3
},
{
name: 'Fairly clean',
type: 'column',
data: [40,42,42,39,36,35,34,33]
,index: 2
},
{
name: 'Not very clean',
type: 'column',
data: [10,9,9,7,6,5,5,5]
,index: 1
},
{
name: 'Not at all clean',
type: 'column',
data: [3,3,3,2,1,1,1,1]
,index: 0
}
]
}
