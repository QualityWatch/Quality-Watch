/* Created by NCODowd on 27/04/2016 10:33:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What propotion of mothers start and continue to breastfeed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005/06','2006/07','2007/08 ','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
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
data: [null,null,null,null,44.7,46.1,47.2,47.2,45.8,43.8]
,index: 1
},
{
name: '% of maternities initiating breastfeeding',
type: 'line',
data: [66.2,68.1,69.9,71.7,72.7,73.7,74,73.9,74,74.3]
,index: 2
}
]
}
