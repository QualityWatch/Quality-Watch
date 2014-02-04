/* Created by EFisher on 24/01/2014 16:56:33 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of patients warned of danger signals on discharge changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
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
data: [40,39,39,40,39,41,42,41]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [21,21,21,21,21,21,21,21]
,index: 1
},
{
name: 'No',
type: 'column',
data: [40,40,41,39,40,38,38,38]
,index: 0
}
]
}
