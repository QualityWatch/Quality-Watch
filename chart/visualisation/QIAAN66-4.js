/* Created by ianb on 07/10/2013 13:31:40 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have HPV vaccination rates in teenage girls changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/2009','2009/2010','2010/2011','2011/2012','Sep 2012 - May 2013','Apr 2013 - Jun 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'HPV immunisation uptake in 12-13 <br> year old females', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Dose 1',
type: 'column',
data: [88.1,84.3,88.9,90.6,90.3,90.4]
,index: 1
},
{
name: 'Dose 1&2',
type: 'column',
data: [86,82.3,87.5,89.6,88.1,88.6]
,index: 2
},
{
name: 'All 3 doses',
type: 'column',
data: [80.1,76.4,84.2,86.8,71.8,80.8]
,index: 3
}
]
}

