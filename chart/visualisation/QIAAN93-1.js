/* Created by ianb on 27/06/2014 16:24:02 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the rate of VTE risk assessment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of admissions undergoing <br> VTE risk assessment', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Acute providers',
type: 'line',
data: [52.5,68.4,80.8,84.4,88.2,90.7,92.5,93.4,93.8,94.1,94.2,95.4,95.8,95.7,96]
,index: 1
},
{
name: 'PCT providers',
type: 'line',
data: [38.9,50,61.4,88.9,91.1,95.6,94.5,92.7,92.7,93.9,94.6,null,null,null,null]
,index: 2
},
{
name: 'Independent sector providers',
type: 'line',
data: [80.2,73.8,80.8,80.2,95.2,94.4,95.1,95.9,97.8,98.1,98.5,98.1,97.9,98.4,98.5]
,index: 3
}
]
}
