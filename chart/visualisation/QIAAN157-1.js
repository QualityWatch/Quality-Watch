/* Created by NCODowd on 27/04/2016 10:33:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Proportion of treatment users waiting three weeks or less for first intervention'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009-10','2010-11','2011-12','2012-13','2013-14','2014-15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage waiting 3 weeks and under <br> for first intervention', offset: 87}
, max: 100
, min: 75
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Opiate use',
type: 'line',
data: [94.4,95.9,97.2,97.9,98.3,98]
,index: 1
},
{
name: 'Non-opiate use',
type: 'line',
data: [94.7,96,97.2,97.5,97.7,97.8]
,index: 2
},
{
name: 'Non-opiate and alcohol',
type: 'line',
data: [88.1,90,92.1,93.9,95.8,96.3]
,index: 3
},
{
name: 'Alcohol only',
type: 'line',
data: [78.2,82.2,85,89.5,93,95.4]
,index: 4
}
]
}
