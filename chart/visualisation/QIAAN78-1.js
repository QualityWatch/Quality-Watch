/* Created by NCODowd on 07/07/2016 12:50:11 using v2.7 */
{
title: {text:'Proportion of patients with an urgent referral seen<br>by a specialist within 2 weeks, NHS England'},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'% of patients', offset: 99}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '',
type: 'line',
data: [94.5,94.1,94.4,95.6,95.6,95.5,95,95.5,96,95.4,95.7,96.2,96.3,95.2,95.4,95.8,95.7,95.5,95.2,95.6,95,93.5,93.6,94.7,94.7,93.6,93.5,94.8,94.7]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Trendline',
data: [[0, 95.6],[28, 94.6]]
}
]
}
