/* Created by rreed on 05/01/2017 15:05:32 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has care for people on dialysis changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2006,2007,2008,2009,2010,2011]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of renal register patients <br> on dialysis', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '% Haemoglobin >= 10 g/dl (HD)',
type: 'line',
data: [85.75,85.54,85.22,85.17,84.38,81.95]
,index: 1
},
{
name: '% Haemoglobin >= 10 g/dl (PD)',
type: 'line',
data: [89.85,90.11,88.39,87.85,86.47,84.51]
,index: 2
},
{
name: 'URR>65% (HD)',
type: 'line',
data: [79.28,80.28,83.31,85.3,86.3,87.7]
,index: 3
}
]
}
