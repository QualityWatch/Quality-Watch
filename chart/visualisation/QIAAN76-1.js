/* Created by EFisher on 24/01/2014 16:59:03 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of adults with learning disabilities in paid employment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of all adults with learning <br> difficulties who are in paid employment', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'line',
data: [3.4,6.4,6.6,7.1,7.2]
,index: 1
}
]
}
