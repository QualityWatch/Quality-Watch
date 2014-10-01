/* Created by ianb on 01/10/2014 11:54:22 using v2.1 */{
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
, labels: {
}},
series:[
{
name: 'Month',
type: 'scatter',
data: [[194617,0.77],[200706,0.77],[196613,0.75],[205952,0.77],[197883,0.78],[201988,0.76],[217997,0.76],[208380,0.77],[235387,0.74],[223779,0.78],[216615,0.74],[228985,0.76],[215997,0.76],[225609,0.75],[214441,0.77],[222614,0.77],[215291,0.78],[213922,0.76],[227628,0.76],[225311,0.76],[257879,0.71],[237469,0.76],[216142,0.75],[248818,0.74],[235499,0.76],[235715,0.78],[225006,0.77],[240061,0.74],[232840,0.75],[227607,0.74],[244625,0.74],[238274,0.73],[262570,0.72],[246162,0.76],[229308,0.74],[254462,0.75],[247308,0.74],[262655,0.73],[253353,0.71],[262110,0.69]]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Month trendline',
data: [[194617, 0.78],[262655, 0.72]]
}
]
}
