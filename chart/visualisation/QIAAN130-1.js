/* Created by rreed on 05/01/2017 15:05:32 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has prevalence of stage 3-5 CKD changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'CKD prevalence in GP registered <br> patients aged 18+', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [2.4,2.94,4.1,4.27,4.26,4.3,4.25,4,4.13,4.1]
,index: 1
}
]
}
