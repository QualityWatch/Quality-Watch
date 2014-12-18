/* Created by ianb on 16/12/2014 11:18:55 using v2.3 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of outpatients warned of danger signals changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2009,2011]
, labels: {
}
},
yAxis: {max: 100,
title: {text:'Percentage of respondents'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [44,41,46,46]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [20,21,22,21]
,index: 1
},
{
name: 'No',
type: 'column',
data: [36,37,33,33]
,index: 0
}
]
}
