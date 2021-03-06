/* Created by NCODowd on 27/07/2016 12:16:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did patients rate the care they received (to 2011)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011']
, labels: {
}
},
yAxis: {
title: {text:'How do you rate the care you received? <br> (Percentage of inpatients)', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Excellent',
type: 'column',
data: [40,41,42,43,44,43,43]
,index: 4
},
{
name: 'Very good',
type: 'column',
data: [37,36,35,35,35,35,35]
,index: 3
},
{
name: 'Good',
type: 'column',
data: [15,15,14,14,13,14,14]
,index: 2
},
{
name: 'Fair',
type: 'column',
data: [6,6,6,5,5,6,6]
,index: 1
},
{
name: 'Poor',
type: 'column',
data: [2,2,2,2,2,2,3]
,index: 0
}
]
}
