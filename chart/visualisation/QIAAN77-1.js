/* Created by ianb on 16/12/2014 10:56:53 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How successful were reablement services for older people?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','2013/14']
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
data: [81.2,81.9,82.7,81.5,82.5]
,index: 1
}
]
}
