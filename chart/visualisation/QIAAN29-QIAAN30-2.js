/* Created by NCODowd on 24/05/2016 16:31:52 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers feeling involved changed by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18-24','25-34','35-44','45-54','55-64','65-74','75-84',85]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion who felt consulted in <br> discussions about the services provided <br> to the person they care for', offset: 99}
, min: 0
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012-13',
type: 'column',
data: [5480,5360,5360,5700,5750,5550,5270,5280]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [4980,5020,5450,5520,5590,5410,5240,5170]
,index: 2
}
]
}
