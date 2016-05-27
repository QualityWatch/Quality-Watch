/* Created by NCODowd on 24/05/2016 16:31:58 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How involved do people feel in discussing their care?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Yes, definitely','Yes, to some extent','No']
, labels: {
}
},
yAxis: {
title: {text:'Proportion who felt care decisions <br> were made together', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2014',
type: 'column',
data: [62.3,29,8.7]
,index: 1
},
{
name: '2015',
type: 'column',
data: [60.8,31.5,7.7]
,index: 2
}
]
}
