/* Created by EFisher on 25/02/2014 18:34:49 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How often are people having care review meetings?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'The proportion of people who have <br> had more than one care review in <br> the previous 12 months', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'On CPA',
type: 'column',
data: [40,40,43,42]
,index: 1
},
{
name: 'Not on CPA',
type: 'column',
data: [27,27,26,26]
,index: 2
}
]
}
