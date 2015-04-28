/* Created by ianb on 27/04/2015 18:08:17 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people with anxiety and depression is IAPT treating?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12','2012-13','2013-14','2014-15 (Q1 & Q2 only)']
, labels: {
}
},
yAxis: {
title: {text:'% of population in need receiving <br> IAPT treatment', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Achievement',
type: 'line',
data: [8.73,9.81,11.51,null]
,index: 1
},
{
name: 'Objective',
type: 'line',
data: [15,15,15,15]
,index: 2
},
{
name: 'Potential acheivement based on mid-year success',
type: 'line',
data: [null,null,11.51,12.44]
,index: 3
}
]
}
