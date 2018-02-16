/* Created by JMorris on 15/02/2018 14:47:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Late HIV diagnosis'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of HIV diagnoses which <br> were late, by probable exposure', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Sex between men',
type: 'line',
data: [42,43,40,38,36,36,31,30,29,32]
,index: 1
},
{
name: 'Heterosexual contact - Men',
type: 'line',
data: [67,67,65,63,66,66,63,60,56,60]
,index: 2
},
{
name: 'Heterosexual contact - Women',
type: 'line',
data: [59,61,59,58,57,57,52,51,48,47]
,index: 3
},
{
name: 'Injecting drug use',
type: 'line',
data: [59,50,50,49,53,60,52,59,44,51]
,index: 4
},
{
name: 'Total',
type: 'line',
data: [54,55,52,50,49,47,42,41,39,42]
,index: 5
}
]
}
