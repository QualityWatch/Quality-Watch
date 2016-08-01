/* Created by NCODowd on 27/07/2016 12:15:18 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the views of inpatients on whether they were treated with dignity and respect?'},
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
data: [80,80,79,80,80,80,80,81,81,82,84]
,index: 2
},
{
name: 'Yes, sometimes',
type: 'column',
data: [17,18,18,17,17,17,17,17,16,16,14]
,index: 1
},
{
name: 'No',
type: 'column',
data: [3,3,3,3,3,3,3,3,3,3,2]
,index: 0
}
]
}
