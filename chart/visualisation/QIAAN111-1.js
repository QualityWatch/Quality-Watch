/* Created by NCODowd on 24/05/2016 16:31:56 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are people with a mental health condition told about possible medication side effects?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who were not <br> given understandable information <br> with new prescription', offset: 99}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'No',
type: 'line',
data: [15,15,15,16,14.9,14.5]
,index: 1
}
]
}
