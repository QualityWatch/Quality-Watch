/* Created by EFisher on 25/02/2014 18:34:44 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do people with a mental health condition have regular care review meetings?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'The proportion of respondents who <br> had at least one care review meeting <br> in the previous 12 months', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'On CPA',
type: 'column',
data: [73,73,76,75]
,index: 1
},
{
name: 'Not on CPA',
type: 'column',
data: [53,52,52,53]
,index: 2
}
]
}
