/* Created by NCODowd on 27/07/2016 12:18:44 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did the proportion of outpatients warned about medication side effects to watch for change to 2011?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2009,2011]
, labels: {
}
},
yAxis: {
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
data: [42,43,45,43]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [19,19,20,21]
,index: 1
},
{
name: 'No',
type: 'column',
data: [39,39,35,36]
,index: 0
}
]
}
