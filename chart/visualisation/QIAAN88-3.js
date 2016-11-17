/* Created by NCODowd on 16/11/2016 17:22:33 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Is the number of calls responsible for the standard breach in the month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Monthly number of category A calls'}
, labels: {
format: '{value:.1f}' 
}
},
yAxis: {
title: {text:'Percentage of category A calls responded <br> to within 8 minutes', offset: 87}
, min: 55
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Moth',
type: 'scatter',
data: [[194617,76.9],[200706,77],[196613,75.5],[205952,76.6],[197883,77.5],[201988,75.7],[217997,76],[208380,77.1],[235387,74.1],[223779,77.9],[216615,73.9],[228985,75.5],[215997,76.2],[225609,74.8],[214441,77.4],[222614,77.3],[215291,78],[213922,75.8],[227628,76.4],[225311,75.9],[257879,70.8],[237469,75.6],[216142,75.3],[248818,73.8],[235499,76],[235715,77.8],[225006,77.1],[240061,74.1],[232840,75.5],[227607,73.9],[244625,73.7],[238274,73.1],[262570,71.8],[246162,76.4],[229308,74.1],[254462,74.8],[247374,73.8],[262666,72.6],[253779,70.8],[262115,68.9],[248592,71.1],[248312,70.1],[264536,70],[265218,68.6],[304143,61.3],[273975,67.8],[241964,67.8],[267278,69.8],[251401,72.5],[260568,73.4],[256164,71.5],[266178,70.7],[267872,69.9],[261520,69],[281688,69],[283107,67.6],[305524,67.5],[309839,63.7],[291982,60.7],[321419,58.4]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Moth trendline',
data: [[194617, 79.3],[321419, 62.4]]
}
]
}
