/* Created by ianb on 24/04/2015 16:51:15 using v2.5 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Human Papilloma Virus (HPV) vaccination coverage'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'HPV immunisation uptake in 12-13 <br> year old females', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Dose 1',
type: 'column',
data: [88.1,84.3,88.9,90.6,90.9,91.1,89.4,90.2]
,index: 1
},
{
name: 'Dose 1&2',
type: 'column',
data: [86,82.3,87.5,89.6,89.6,89.8,null,85.1]
,index: 2
},
{
name: 'All 3 doses',
type: 'column',
data: [80.1,76.4,84.2,86.8,86.1,86.7,null,null]
,index: 3
}
]
}
