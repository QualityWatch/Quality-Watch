/* Created by ianb on 14/10/2013 11:43:29 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Why are patients exiting alcohol treatment and how has this changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of service users and <br> their reason reason for exiting <br> alcohol treatment', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Successful Completion',
type: 'line',
data: [50,null,null,null]
,index: 1
},
{
name: 'Dropped Out/Left',
type: 'line',
data: [29,null,null,null]
,index: 2
},
{
name: 'Other',
type: 'line',
data: [20,null,null,null]
,index: 3
},
{
name: 'Successful Completion',
type: 'line',
data: [null,48,54,57.1]
,index: 4
},
{
name: 'Dropped Out/Left',
type: 'line',
data: [null,33,30,28.1]
,index: 5
},
{
name: 'Other',
type: 'line',
data: [null,19,17,15]
,index: 6
}
]
}
