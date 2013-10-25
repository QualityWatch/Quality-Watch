{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of social care users who feel safe changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11', '2011/12', '2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who found it <br> very or fairly easy to find information <br> about social care services', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Unweighted data',
type: 'column',
data: [55]
,index: 1
},
{
name: 'Weighted data',
type: 'column',
data: [null,73.8,74]
,index: 2
}
]
}


















