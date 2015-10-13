/* Created by EFisher on 12/10/2015 14:31:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of staff who feel under pressure to attend work while ill changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [21,22,23,27,25,23]
,index: 1
}
]
}
