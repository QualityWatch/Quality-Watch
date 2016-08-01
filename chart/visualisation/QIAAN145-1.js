/* Created by NCODowd on 27/07/2016 12:18:44 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients warned about medication side effects to watch for on discharge changed?'},
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
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [39,37,36,37,36,37,37,38,39,39,41]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [18,18,18,18,18,19,19,19,19,20,18]
,index: 1
},
{
name: 'No',
type: 'column',
data: [43,46,47,45,46,44,43,43,41,41,41]
,index: 0
}
]
}
