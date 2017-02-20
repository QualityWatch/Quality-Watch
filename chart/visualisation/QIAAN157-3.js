/* Created by rreed on 20/02/2017 13:03:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Proportion completing treatment free of dependence'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009-10','2010-11','2011-12','2012-13','2013-14','2014-15','2015-16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage who completed treatment <br> free of dependence', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Opiate use',
type: 'line',
data: [27.4,33,37.3,36.1,33.4,30.5,27.5]
,index: 1
},
{
name: 'Non-opiate use',
type: 'line',
data: [54.9,60.2,64,64,63.4,63.8,60.4]
,index: 2
},
{
name: 'Non-opiate and alcohol',
type: 'line',
data: [51.3,56.1,59.4,59.6,57.7,57.8,55.9]
,index: 3
},
{
name: 'Alcohol only',
type: 'line',
data: [49.1,55.7,58.7,60.1,61,60.9,61.7]
,index: 4
},
{
name: 'Any',
type: 'line',
data: [43,48.9,52.6,53.3,52.9,51.9,50.5]
,index: 5
}
]
}
