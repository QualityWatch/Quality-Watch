/* Created by rreed on 20/02/2017 13:01:47 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has GP care for CKD patients changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of CKD stage 3-5 patients'}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Blood pressure 140/85 or less',
type: 'line',
data: [86.92,74,73.31,73.93,74.22,75.14,76.16,80.9,81.2]
,index: 1
},
{
name: 'With hypertension and proteinuria and treated with an angiotensin<br>converting enzyme inhibitor or angiotensin receptor blocker',
type: 'line',
data: [null,null,87.3,91.79,90.45,89.51,89.26,91,91.5]
,index: 2
}
]
}
