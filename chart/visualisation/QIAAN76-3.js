/* Created by NCODowd on 13/09/2016 11:07:28 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of adults with learning disabilities are in paid employment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15']
, labels: {
}
},
yAxis: {
title: {text:'proportion of working-age learning <br> disabled clients known to CASSRs <br> known to be in paid employment', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Total',
type: 'line',
data: [6.6,7.1,7,6.7,5.98]
,index: 1
},
{
name: 'Male',
type: 'column',
data: [7.4,7.9,7.8,7.4,6.45]
,index: 1
},
{
name: 'Female',
type: 'column',
data: [5.6,6.1,6,5.8,5.3]
,index: 2
}
]
}
