/* Created by NCODowd on 27/07/2016 12:15:50 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have patients\' perceptions of the amount of nurses available changed?'},
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
title: {text:'Percentage of respondents when patients <br> were asked were there enough nurses <br> on duty to care for them in hospital', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'There were always or nearly always enough nurses',
type: 'column',
data: [58,56,56,58,59,60,59,59,59,60,62]
,index: 2
},
{
name: 'There were sometimes enough nurses',
type: 'column',
data: [31,32,32,31,30,30,30,30,30,30,28]
,index: 1
},
{
name: 'There were rarely or never enough nurses',
type: 'column',
data: [11,12,12,11,10,10,11,11,11,11,10]
,index: 0
}
]
}
