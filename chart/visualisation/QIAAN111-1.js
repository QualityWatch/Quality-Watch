/* Created by rreed on 05/01/2017 15:02:22 using v2.7 */
{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are people given understandable <br> information with a new prescription?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who were not <br> given understandable information <br> with new prescription', offset: 99}
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
data: [15,15,15,16,15,14,15]
,index: 1
}
]
}
