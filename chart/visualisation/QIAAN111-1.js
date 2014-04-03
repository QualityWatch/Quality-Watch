/* Created by EFisher on 26/03/2014 17:16:38 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are people with a mental health condition told about possible medication side effects?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'The proportion of respondents who <br> weren\'t told about possible medication <br> side effects', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'No',
type: 'line',
data: [35,35,34,33,32,null,null,null,null,null]
,index: 1
},
{
name: 'No',
type: 'line',
data: [null,null,null,null,null,null,29,28,28,28]
,index: 2
}
]
}
