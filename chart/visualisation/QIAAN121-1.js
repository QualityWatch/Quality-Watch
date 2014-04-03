/* Created by EFisher on 26/03/2014 17:20:13 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did people feel they were listened to carefully?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Did people feel their NHS healthcare <br> or social care worker listened to <br> them carefully', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
data: [80,79,79,78]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [17,17,17,18]
,index: 1
},
{
name: 'No',
type: 'column',
data: [3,3,4,4]
,index: 0
}
]
}
