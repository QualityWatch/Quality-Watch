/* Created by EFisher on 20/12/2017 15:35:24 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Is the number of calls responsible for the standard breach in the month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Number of Category A calls'}
, labels: {
format: '{value:.1f}' 
}
},
yAxis: {
title: {text:'Percentage of Category A calls responded <br> to within eight minutes', offset: 87}
, max: 85
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Month',
type: 'scatter',
data: [[194617,76.9],[200706,77],[196613,75.5],[205952,76.6],[197883,77.5],[201988,75.7],[217997,76],[208380,77.1],[235387,74.1],[223779,77.9],[216615,73.9],[228985,75.5],[215997,76.2],[225609,74.8],[214441,77.4],[222614,77.3],[215291,78],[213922,75.8],[227628,76.4],[225311,75.9],[257879,70.8],[237469,75.6],[216142,75.3],[248818,73.8],[235499,76],[235715,77.8],[225006,77.1],[240061,74.1],[232840,75.5],[227607,73.9],[244625,73.7],[238274,73.1],[262570,71.8],[246162,76.4],[229308,74.1],[254462,74.8],[247374,73.8],[262666,72.6],[253779,70.8],[262115,68.9],[248592,71.1],[248312,70.1],[264536,70],[265218,68.6],[304143,61.3],[273975,67.8],[241964,67.8],[267278,69.8],[251371,72.5],[260532,73.4],[256132,71.5],[266139,70.7],[267849,69.9],[261494,69],[281659,69],[283076,67.6],[305488,67.5],[309812,63.7],[291990,60.7],[321417,58.4]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Month trendline',
data: [[194617, 79.3],[321417, 62.4]]
}
]
}
