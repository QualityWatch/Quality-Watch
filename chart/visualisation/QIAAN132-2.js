{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the successful treatment rate of non-opiate drug users changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of non-opiate drug users <br> successfully completing treatment', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage',
type: 'column',
data: [37.5,39.5,40.2]
}, {name: 'Error', type: 'errorbar', data: [[37.01,37.98],
[39,39.99],
[39.72,40.69]]}
]
}