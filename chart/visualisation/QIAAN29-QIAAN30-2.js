/* Created by EFisher on 25/02/2014 18:18:38 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers feeling involved changed by age?'},
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
title: {text:'Proportion of carers who always <br> or usually felt they had been involved <br> or consulted in discussions about <br> the services and support the person <br> they care for receives by age', offset: 123}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2009/10',
type: 'column',
data: [70.6,69.8,72.2,74.9,78.7,80.5,81.5,80.1,78.8]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [72.1,67.4,69.4,70.5,74,73.5,72.3,74.8,null]
,index: 2
}
]
}
