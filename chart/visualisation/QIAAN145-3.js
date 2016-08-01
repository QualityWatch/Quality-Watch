/* Created by NCODowd on 27/07/2016 12:18:44 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients warned of danger signals on discharge changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of respondents'}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [39,38,38,39,39,40,41,42,43,44,44]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [20,20,20,21,21,21,21,21,21,21,20]
,index: 1
},
{
name: 'No',
type: 'column',
data: [41,42,42,40,41,39,38,37,36,35,35]
,index: 0
}
]
}
