/* Created by ianb on 01/10/2014 11:52:07 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times for cancer treatment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people who had <br> their first cancer treatment within <br> 31 days of the decision to treat', offset: 99}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All cancer, all care',
type: 'line',
data: [98.2,98.1,98,98.4,98.4,98.4,98.4,98.5,98.3,98.3,98.4,98.5,98.5,98.4,98.4,98.5,98.3,98.3,98.5,98.3,98,97.8]
,index: 1
},
{
name: 'Target',
type: 'line',
data: [96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96,96]
,index: 2
}
]
}
