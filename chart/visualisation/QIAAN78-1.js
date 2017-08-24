/* Created by hdorning on 23/08/2017 15:41:10 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['08/09 Q4','09/10 Q1','09/10 Q2','09/10 Q3','09/10 Q4','10/11 Q1','10/11 Q2','10/11 Q3','10/11 Q4','11/12 Q1','11/12 Q2','11/12 Q3','11/12 Q4','12/13 Q1','12/13 Q2','12/13 Q3','12/13 Q4','13/14 Q1','13/14 Q2','13/14 Q3','13/14 Q4','14/15 Q1','14/15 Q2','14/15 Q3','14/15 Q4','15/16 Q1','15/16 Q2','15/16 Q3','15/16 Q4','16/17 Q1','16/17 Q2','16/17 Q3','16/17 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Perentage'}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage',
type: 'line',
data: [94.5,94.1,94.4,95.6,95.6,95.5,95,95.5,96,95.4,95.7,96.2,96.3,95.2,95.4,95.8,95.7,95.5,95.2,95.6,95,93.5,93.6,94.7,94.7,93.6,93.5,94.8,94.7,93.7,94.1,95.1,94.7]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Percentage trendline',
data: [[0, 95.6],[32, 94.4]]
}
]
}
