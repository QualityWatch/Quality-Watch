/* Created by NCODowd on 07/07/2016 12:47:51 using v2.7 */{
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
title: {text:'Proportion who felt consulted in <br> discussions about the services provided <br> to the person they care for', offset: 99}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012-13',
type: 'column',
data: [6400,5690,5840,5340,5540,5550,5530,5600,4950,5080]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [6370,5800,5730,5720,5570,5430,5340,5050,4770,4650]
,index: 2
}
]
}
