/* Created by ianb on 01/08/2014 12:54:42 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of admissions to a psychiatric ward were \'gate kept\' by a CRHT team?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Q1 2010-11','Q2 2010-11','Q3 2010-11','Q4 2010-11','Q1 2011-12','Q2 2011-12','Q3 2011-12','Q4 2011-12','Q1 2012-13','Q2 2012-13','Q3 2012-13','Q4 2012-13','Q1 2013-14','Q2 2013-14','Q3 2013-14','Q4 2013-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of admissions to acute <br> wards that were gate kept by the <br> CRHT teams', offset: 99}
, max: 100
, min: 80
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Gate kept by CRHT teams',
type: 'line',
data: [97,97.4,97.6,97.6,97,97.3,97.7,97.7,98,98.1,98.4,98.7,97.7,98.7,98.6,98.3]
,index: 1
},
{
name: 'National threshold',
type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 2
}
]
}
