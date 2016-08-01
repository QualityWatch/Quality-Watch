/* Created by NCODowd on 27/07/2016 12:18:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did the proportion of outpatients informed of who to contact in case of any concern change to 2011?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2009,2011]
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
name: 'Yes',
type: 'column',
data: [62,66,66]
,index: 1
},
{
name: 'No',
type: 'column',
data: [38,34,35]
,index: 0
}
]
}
