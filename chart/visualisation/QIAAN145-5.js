/* Created by ianb on 16/12/2014 11:19:02 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients informed of who to contact in case of any concern on discharge changed?'},
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
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes',
type: 'column',
data: [76,76,74,75,75,76,77,77,77]
,index: 1
},
{
name: 'No',
type: 'column',
data: [24,24,26,25,25,24,24,23,23]
,index: 0
}
]
}
