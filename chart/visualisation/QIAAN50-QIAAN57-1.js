/* Created by ianb on 14/10/2013 11:40:42 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the views of inpatients on whether they were treated with dignity and respect?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
}
},
yAxis: {
title: {text:'Were you treated with dignity and <br> respect? (Percentage of inpatients)', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, always',
type: 'column',
data: [79,78,78,79,79,79,79,80]
,index: 2
},
{
name: 'Yes, sometimes',
type: 'column',
data: [18,18,19,18,18,18,18,17]
,index: 1
},
{
name: 'No',
type: 'column',
data: [3,3,3,3,3,3,3,3]
,index: 0
}
]
}
