/* Created by EFisher on 25/02/2014 18:33:32 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['10 - Least deprived',9,8,7,6,5,4,3,2,'1 - Most deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of people who feel supported <br> to manage their long-term condition', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011/12',
type: 'column',
data: [74.4,73.9,73.3,72.3,71.7,69.9,67.8,66,64.7,64]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: '2011/12 trendline',
data: [[0, 76.8],[9, 65.3]]
},
{
name: '2012/13',
type: 'column',
data: [73.3,73.1,72.7,71.6,70.9,69.4,68.2,66.4,64.9,64.3]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: '2012/13 trendline',
data: [[0, 75.5],[9, 65.6]]
}
]
}
