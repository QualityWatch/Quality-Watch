/* Created by rreed on 20/02/2017 13:03:07 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Proportion of treatment users waiting three weeks or less for first intervention'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005-06','2006-07','2007-08','2008-09','2009-10','2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage waiting 3 weeks and under <br> for first intervention', offset: 87}
, max: 100
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Opiate',
type: 'line',
data: [87,87,91,93,94,96,97,98,98,98,98]
,index: 1
},
{
name: 'Non-opiate only',
type: 'line',
data: [88,88,91,93,95,96,97,97,98,98,98]
,index: 2
},
{
name: 'Non-opiate and alcohol',
type: 'line',
data: [84,83,86,87,88,90,92,94,96,96,97]
,index: 3
},
{
name: 'Alcohol only',
type: 'line',
data: [73,74,77,77,78,82,85,89,93,95,96]
,index: 4
}
]
}
