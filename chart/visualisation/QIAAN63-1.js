/* Created by ianb on 07/10/2013 13:30:51 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do services users say about how satisfied they are with services?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
name: 'Unwweighted data',
type: 'line',
data: [61.7,null,null]
,index: 1
},
{
name: 'Weighted data',
type: 'line',
data: [null,62.8,63.7]
,index: 2
}
]
}

