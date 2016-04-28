/* Created by NCODowd on 27/04/2016 10:33:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Late HIV diagnosis'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
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
data: [42,42,40,42,40,38,36,34,30,29]
,index: 1
},
{
name: 'Heterosexual contact - Men',
type: 'line',
data: [70,67,67,67,66,63,66,66,61,61]
,index: 2
},
{
name: 'Heterosexual contact - Women',
type: 'line',
data: [61,64,58,61,59,58,57,56,52,52]
,index: 3
},
{
name: 'Injecting drug use',
type: 'line',
data: [55,49,55,47,48,50,55,60,50,65]
,index: 4
},
{
name: 'Total',
type: 'line',
data: [56,56,53,54,52,50,49,46,41,40]
,index: 5
}
]
}
