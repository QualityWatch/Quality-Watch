/* Created by EFisher on 26/03/2014 16:39:31 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers finding it easy to access information changed by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18-24','25-34','35-44','45-54','55-64','65-74','75-84','85 and over','Unknown']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of carers who found it <br> very or fairly easy to find information <br> and advice about support, services <br> or benefits', offset: 111}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2009/10',
type: 'column',
data: [64.5,62.8,65.2,66.6,74.1,76.4,79.5,79.7,72.3]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [61.7,57.4,61.2,62.6,68.8,71.4,74.3,74.2,null]
,index: 2
}
]
}
