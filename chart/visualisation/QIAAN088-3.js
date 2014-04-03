/* Created by EFisher on 26/03/2014 16:55:54 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the number of calls resulting in an emergency response changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Number of Category A calls'}
, labels: {
format: '{value:.1f}' 
}
},
yAxis: {
title: {text:'Proportion of calls responded to <br> within 8 minutes', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Indivdual month',
type: 'scatter',
data: [[213373,77.4],[221893,77.3],[214531,78],[213229,75.8],[227030,76.4],[224718,75.9],[257070,70.8],[236884,75.6],[215693,75.3],[248295,73.8],[232057,75.7],[232280,77.5],[221154,76.8],[236479,73.7],[229128,75.1],[224220,73.5],[240958,73.3],[237663,73],[261891,71.7]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Indivdual month trendline',
data: [[213229, 77.1],[261891, 71.5]]
},
{
name: 'A8 standard',
type: 'scatter',
data: [[200000,75],[210000,75],[220000,75],[230000,75],[240000,75],[250000,75],[260000,75],[270000,75]]
,index: 2
}
]
}
