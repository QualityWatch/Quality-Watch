/* Created by JMorris on 15/02/2018 14:40:48 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are people given understandable information about new prescriptions?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014,2015,2016,2017]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who were not <br> given understandable information <br> about new prescriptions', offset: 99}
, max: 18
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'No',
type: 'line',
data: [15,15,15,16,14,14,15,15]
,index: 1
}
]
}
