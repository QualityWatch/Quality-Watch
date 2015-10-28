/* Created by EFisher on 26/10/2015 10:06:06 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did treatments help people move to recovery?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12 Q1','2011-12 Q2','2011-12 Q3','2011-12 Q4','2012-13 Q1','2012-13 Q2','2012-13 Q3','2012-13 Q4','2013-14 Q1','2013-14 Q2','2013-14 Q3','2013-14 Q4','2014-15 Q1','2014-15 Q2','2014-15 Q3']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of people who were recovered <br> at the end of treatment', offset: 87}
, min: 0
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Recovery rate',
type: 'line',
data: [42.51,42.97,43.63,45.86,46.08,45.87,44.98,46.79,43.28,44.27,43.89,44.88,45.02,45.01,44.3]
,index: 1
},
{
name: 'Objective recovery rate',
type: 'line',
data: [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]
,index: 2
}
]
}
