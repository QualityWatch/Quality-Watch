/* Created by ianb on 29/05/2014 15:06:42 using v2.1 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has prevalence of stage 3-5 CKD changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'CKD prevalence in GP registered <br> patients aged 18+', offset: 87}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Prevalence',
type: 'line',
data: [2.4,2.943,4.1,4.266,4.256,4.3,4.253]
,index: 1
}
]
}
