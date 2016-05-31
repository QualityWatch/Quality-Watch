{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do carers feel about their involvement in discussions on the social care the person they care for receives?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','South East','Yorkshire and the Humber','East','South West','England','West Midlands','North West','London','East Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion who felt consulted<br>in discussions about services<br>provided to the person they<br>care for', offset: 99}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012-13',
type: 'column',
data: [64,56.9,58.4,53.4,55.4,55.5,55.3,56,49.5,50.8]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [63.7,58,57.3,57.2,55.7,54.3,53.4,50.5,47.7,46.5]
,index: 2
}
]
}
