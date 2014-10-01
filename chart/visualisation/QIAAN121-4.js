/* Created by ianb on 01/10/2014 12:03:45 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did people feel they were given enough time to discuss their condition and treatment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Did people feel their NHS healthcare <br> or social care worker gave them <br> enough time to discuss their condition <br> or treatment', offset: 111}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
data: [73,72,72,70,66]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [19,20,20,21,24]
,index: 1
},
{
name: 'No',
type: 'column',
data: [7,8,8,9,9]
,index: 0
}
]
}
