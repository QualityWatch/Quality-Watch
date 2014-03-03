/* Created by EFisher on 25/02/2014 18:22:02 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do services users say about how satisfied they are with services?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who are satisfied <br> with the service they receive', offset: 87}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Unweighted data',
type: 'column',
data: [61.7,null,null]
,index: 1
},
{
name: 'Weighted data',
type: 'column',
data: [null,62.8,63.7]
,index: 2
}
]
}
