/* Created by rreed on 05/01/2017 15:02:29 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of adults with learning disabilities live at home?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of adults with learning <br> disabilities who live in their own <br> home or with their family', offset: 99}
, max: 80
, min: 50
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series5',
type: 'column',
data: [70,73.5,74.9,73.3,75.4]
,index: 1
}
]
}
