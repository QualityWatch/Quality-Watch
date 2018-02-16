/* Created by JMorris on 15/02/2018 14:40:50 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do community mental health service users have regular care review meetings?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013,'Question change',2014,2015,2016,2017]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of respondents who did/did <br> not have a care review meeting in <br> the last 12 months', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes',
type: 'column',
data: [61,62,62,null,74,72,73,72]
,index: 1
},
{
name: 'No',
type: 'column',
data: [39,38,38,null,26,28,27,28]
,index: 0
}
]
}
