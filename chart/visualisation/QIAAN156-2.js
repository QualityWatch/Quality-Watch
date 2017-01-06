/* Created by rreed on 05/01/2017 15:06:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Late HIV diagnosis'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
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
data: [42,41,43,40,38,36,34,31,29,30]
,index: 1
},
{
name: 'Heterosexual contact - Men',
type: 'line',
data: [67,67,67,66,64,66,66,62,61,55]
,index: 2
},
{
name: 'Heterosexual contact - Women',
type: 'line',
data: [64,59,61,59,58,56,57,52,51,49]
,index: 3
},
{
name: 'Injecting drug use',
type: 'line',
data: [50,58,47,47,48,54,62,51,60,45]
,index: 4
},
{
name: 'Total',
type: 'line',
data: [56,53,55,52,50,48,46,42,41,39]
,index: 5
}
]
}
