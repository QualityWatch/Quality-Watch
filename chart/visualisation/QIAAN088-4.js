/* Created by EFisher on 12/10/2015 14:31:21 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Is the number of calls responsible for the standard breach in the month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Monthly number of category A calls'}
, labels: {
}
},
yAxis: {
title: {text:'Percentage of category A calls responded <br> to within 8 minutes', offset: 87}
, min: 0.55
, labels: {
}},
series:[
{
name: 'Month',
type: 'scatter',
data: [[194617,0.77],[200706,0.77],[196613,0.75],[205952,0.77],[197883,0.78],[201988,0.76],[217997,0.76],[208380,0.77],[235387,0.74],[223779,0.78],[216615,0.74],[228985,0.76],[215997,0.76],[225609,0.75],[214441,0.77],[222614,0.77],[215291,0.78],[213922,0.76],[227628,0.76],[225311,0.76],[257879,0.71],[237469,0.76],[216142,0.75],[248818,0.74],[235499,0.76],[235715,0.78],[225006,0.77],[240061,0.74],[232840,0.75],[227607,0.74],[244625,0.74],[238274,0.73],[262570,0.72],[246162,0.76],[229308,0.74],[254462,0.75],[247374,0.74],[262666,0.73],[253779,0.71],[262115,0.69],[248592,0.71],[248312,0.7],[264536,0.7],[265218,0.69],[304143,0.61],[273975,0.68],[241964,0.68],[267278,0.7],[251812,0.73],[261130,0.73],[256563,0.72],[266465,0.71]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Month trendline',
data: [[194617, 0.79],[304143, 0.66]]
}
]
}
