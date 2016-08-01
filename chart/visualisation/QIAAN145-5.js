/* Created by NCODowd on 27/07/2016 12:18:45 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients informed of who to contact in case of any concern on discharge changed?'},
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
name: 'Yes',
type: 'column',
data: [76,75,74,75,74,76,76,77,78,78,78]
,index: 1
},
{
name: 'No',
type: 'column',
data: [24,25,26,25,26,24,24,23,22,22,22]
,index: 0
}
]
}
