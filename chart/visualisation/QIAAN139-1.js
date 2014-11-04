/* Created by ianb on 04/11/2014 13:31:08 using v2.2 */{
title: {text:'Initiation and prevalence of breastfeeding'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What propotion of mothers start and continue to breastfeed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '% of infants breastfeeding at 6-8 weeks (totally or partially)',
type: 'line',
data: [null,44.7,46.1,47.2,47.2,null,null]
,index: 1
},
{
name: '% of maternities breastfeeding',
type: 'line',
data: [71.7,72.7,73.7,74,73.9,74,74]
,index: 2
}
]
}
