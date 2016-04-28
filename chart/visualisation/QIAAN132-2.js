/* Created by NCODowd on 21/04/2016 10:10:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the successful treatment rate of non-opiate drug users changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of non-opiate drug users <br> successfully completing treatment', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
showInLegend: false,
type: 'column',
data: [34.4,36.6,37.7,37.7,39.2]
,index: 1
}, {name: 'Error', type: 'errorbar', data: [[33.97,34.79],[36.22,37.05],[37.24,38.06],[37.26,38.07],[38.79,39.60]]
}
]
}