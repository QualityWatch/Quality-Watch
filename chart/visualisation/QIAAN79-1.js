/* Created by hdorning on 23/08/2017 15:41:12 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times for cancer treatment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion'}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All',
type: 'line',
data: [98.2,98.1,98,98.4,98.4,98.4,98.4,98.5,98.3,98.3,98.4,98.5,98.5,98.4,98.4,98.5,98.3,98.3,98.5,98.3,98,97.8,97.7,97.8,97.5,97.5,97.6,97.9,97.5,96.8,96.8,96.8,96.6]
,index: 1
},
{
name: 'Target',
type: 'line',
data: [96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96]
,index: 2
}
]
}
