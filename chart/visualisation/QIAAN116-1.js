/* Created by rreed on 05/01/2017 15:02:23 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do people with a mental health condition have regular care review meetings?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,'Question change',2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Proportion who had a care review <br> meeting in the previous 12 months', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'CPA',
type: 'column',
data: [73,76,75,null,83,82,82]
,index: 1
},
{
name: 'Non-CPA',
type: 'column',
data: [52,53,53,null,69,67,69]
,index: 2
}
]
}
