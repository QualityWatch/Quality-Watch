/* Created by NCODowd on 13/09/2016 11:07:12 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do people feel supported to manage their long-term condition(s)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'In the last 6 months, have patietnshad <br> enough support to help them manage <br> LTCs', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
data: [31,28.4,40.5,39.7,39.1,38.6,38.5]
,index: 4
},
{
name: 'Yes, to some extent',
type: 'column',
data: [25.3,25.3,23.6,24.3,24.8,24.7,24.6]
,index: 3
},
{
name: 'No',
type: 'column',
data: [13.7,15.5,11.1,11.8,12,12.4,12.4]
,index: 2
},
{
name: 'Haven't needed such support',
type: 'column',
data: [27.1,27.3,22.2,21.7,21.5,21.6,21.7]
,index: 1
},
{
name: 'Don’t know / can't say',
type: 'column',
data: [3,3.5,2.7,2.6,2.6,2.7,2.8]
,index: 0
}
]
}
