/* Created by ianb on 01/08/2014 12:54:26 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days are lost due to stress, anxiety and depression across the different sectors?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/6','2006/7','2007/8','2008/9','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Manufacturing',
type: 'line',
data: [0.38,0.3,0.23,0.29,0.21,0.22,0.15,null,0.25]
,index: 1
},
{
name: 'Retail and Service',
visible: false,type: 'line',
data: [0.34,0.25,0.28,0.4,0.22,0.27,0.24,0.22,0.18]
,index: 2
},
{
name: 'Professional',
visible: false,type: 'line',
data: [0.3,0.37,0.25,0.47,0.43,0.26,0.31,0.37,0.4]
,index: 3
},
{
name: 'Public sector',
visible: false,type: 'line',
data: [0.78,0.78,0.6,0.95,0.9,0.81,0.7,0.68,0.63]
,index: 4
},
{
name: 'Administration and defence',
visible: false,type: 'line',
data: [1.27,1.06,0.66,1.09,1.08,0.8,0.71,0.8,0.35]
,index: 5
},
{
name: 'Education',
visible: false,type: 'line',
data: [0.55,0.49,0.59,0.85,0.88,0.65,0.55,0.53,0.51]
,index: 6
},
{
name: 'Human health and social work activities',
visible: false,type: 'line',
data: [0.62,0.81,0.58,0.93,0.79,0.94,0.82,0.74,0.88]
,index: 7
}
]
}
