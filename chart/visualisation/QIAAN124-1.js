/* Created by NCODowd on 24/05/2016 16:32:02 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of adults with learning disabilities live at home?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12','2012-13','2013-14','2014-15']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of adults with learning <br> disabilities who live in their own <br> home or with their family', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Living at home',
type: 'column',
data: [70,73.5,74.9,73.3]
,index: 1
}
]
}
