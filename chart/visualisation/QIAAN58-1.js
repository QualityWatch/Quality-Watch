/* Created by ianb on 14/10/2013 11:41:40 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have patients\' perceptions on the amount of nurses available changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
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
data: [58,56,56,58,59,60,58,59]
,index: 2
},
{
name: 'There were sometimes enough nurses',
type: 'column',
data: [31,32,32,31,30,30,31,30]
,index: 1
},
{
name: 'There were rarely or never enough nurses',
type: 'column',
data: [11,12,12,11,10,10,11,11]
,index: 0
}
]
}
