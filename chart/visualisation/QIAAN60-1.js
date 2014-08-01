/* Created by ianb on 01/08/2014 12:35:01 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of patients warned of danger signals on discharge changed?'},
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
title: {text:'Percentage of respondents'}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [40,39,39,40,39,41,42,41,43]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [21,21,21,21,21,21,21,21,21]
,index: 1
},
{
name: 'No',
type: 'column',
data: [40,40,41,39,40,38,38,38,36]
,index: 0
}
]
}
