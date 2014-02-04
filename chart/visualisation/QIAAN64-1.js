/* Created by EFisher on 24/01/2014 16:57:13 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the proportion of social care users who found it easy to access information changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who found it <br> very or fairly easy to find information <br> about social care services', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Unweighted data',
type: 'line',
data: [55,null,null]
,index: 1
},
{
name: 'Weighted data',
type: 'line',
data: [null,73.8,74]
,index: 2
}
]
}
