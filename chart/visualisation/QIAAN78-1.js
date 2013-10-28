/* Created by ianb on 14/10/2013 11:43:50 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has waiting times after an urgent referral changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people with an <br> urgent referral who had an outpatient <br> appointment within 2 weeks', offset: 99}
, max: 100
, min: 90
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage',
type: 'line',
data: [94.53,94.08,94.36,95.58,95.63,95.45,94.96,95.55,96.05,95.41,95.66,96.22,96.26,95.18,95.41,95.83,95.7,95.5]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Percentage trendline',
data: [[0, 94.77],[17, 95.92]]
}
]
}
