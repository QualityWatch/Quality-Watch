/* Created by rreed on 25/05/2017 13:38:10 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days are lost due to stress, anxiety and depression across the different sectors?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Days'}
, max: 1.0
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Manufacturing',
visible: true,type: 'line',
data: [0.37,0.32,0.25,0.29,0.19,0.21,0.14,null,0.23,0.44,null,null]
,index: 1
},
{
name: 'Retail and Service',
visible: false,type: 'line',
data: [0.31,0.25,0.27,0.37,0.22,0.26,0.24,0.22,0.18,0.27,0.33,null]
,index: 2
},
{
name: 'Professional',
visible: false,type: 'line',
data: [0.31,0.37,0.23,0.43,0.41,0.26,0.3,0.35,0.4,0.27,0.2,null]
,index: 3
},
{
name: 'Public sector',
visible: false,type: 'line',
data: [0.73,0.76,0.56,0.91,0.88,0.79,0.69,0.66,0.64,0.61,0.63,null]
,index: 4
},
{
name: 'Administration and defence',
visible: false,type: 'line',
data: [1.17,1,0.61,0.99,1.07,0.79,0.73,0.78,0.36,0.82,0.37,0.42]
,index: 5
},
{
name: 'Education',
visible: false,type: 'line',
data: [0.54,0.49,0.57,0.88,0.84,0.63,0.53,0.55,0.51,0.48,0.4,0.68]
,index: 6
},
{
name: 'Human health and social work activities',
visible: false,type: 'line',
data: [0.57,0.79,0.51,0.87,0.78,0.91,0.79,0.67,0.89,0.6,0.92,0.54]
,index: 7
}
]
}
