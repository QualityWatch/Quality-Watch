/* Created by NCODowd on 24/05/2016 16:31:52 using v2.7 */
{
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
data: [54.8,53.6,53.6,57,57.5,55.5,52.7,52.8]
,index: 1
},
{
name: '2014-15',
type: 'column',
data: [49.8,50.2,54.5,55.2,55.9,54.1,52.4,51.7]
,index: 2
}
]
}
