/* Created by ianb on 14/10/2013 11:43:43 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of older people living at home after discharge changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of older people (over <br> 65) who are still at home 91 days <br> after discharge from hospital into <br> reablement/rehabilitation services', offset: 111}
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
data: [78.2,81.2,81.9,82.7,81.5]
,index: 1
}
]
}
