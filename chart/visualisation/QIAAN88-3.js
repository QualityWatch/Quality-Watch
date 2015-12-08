/* Created by EFisher on 03/12/2015 13:07:43 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Is the number of calls responsible for the standard breach in the month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Monthly number of category A calls'}
, labels: {
format: '{value:.2f}' 
}
},
yAxis: {
title: {text:'Percentage of category A calls responded <br> to within 8 minutes', offset: 87}
, min: 55
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Month',
type: 'scatter',
data: [[194617,76.91],[200706,76.97],[196613,75.47],[205952,76.62],[197883,77.54],[201988,75.71],[217997,76.03],[208380,77.12],[235387,74.11],[223779,77.87],[216615,73.87],[228985,75.52],[215997,76.22],[225609,74.76],[214441,77.43],[222614,77.32],[215291,77.97],[213922,75.85],[227628,76.4],[225311,75.88],[257879,70.77],[237469,75.64],[216142,75.28],[248818,73.75],[235499,76.02],[235715,77.84],[225006,77.12],[240061,74.13],[232840,75.46],[227607,73.87],[244625,73.7],[238274,73.08],[262570,71.82],[246162,76.39],[229308,74.13],[254462,74.85],[247374,73.82],[262666,72.61],[253779,70.84],[262115,68.92],[248592,71.05],[248312,70.11],[264536,69.98],[265218,68.56],[304143,61.27],[273975,67.79],[241964,67.8],[267278,69.79],[251812,72.55],[261130,73.41],[256563,71.55],[266465,70.79],[268337,69.93],[261877,69.13]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Month trendline',
data: [[194617, 78.84],[304143, 65.7]]
}
]
}
