/* Created by ianb on 01/10/2014 11:57:16 using v2.1 */{
title: {text:'Proportional Increase in Staff Numbers versus 2002'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the long-term trends in NHS staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage Change vs. 2002'}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'All doctors',
type: 'line',
data: [0,5.06,12.388,17.508,22.527,24.482,28.963,36.204,36.405,38.288,40.4,42.621]
,index: 1
},
{
name: 'Total qualified nursing staff ',
visible: false,type: 'line',
data: [0,3.839,7.206,9.99,10.767,10.101,12.015,14.367,15.549,14.607,14.112,15.14]
,index: 2
},
{
name: 'Qualified Allied Health Professions',
visible: false,type: 'line',
data: [0,4.832,10.717,14.499,15.7,18.511,23.476,28.48,30.424,30.707,31.249,33.697]
,index: 3
},
{
name: 'Qualified Healthcare Scientists',
visible: false,type: 'line',
data: [0,7.561,18.502,25.657,27.837,26.701,29.85,34.986,34.695,32.661,31.285,24.561]
,index: 4
},
{
name: 'Other qualified scientific, therapeutic & technical staff',
visible: false,type: 'line',
data: [0,1.879,3.441,7.82,8.604,13.93,20.188,29.46,37.631,40.242,44.362,47.507]
,index: 5
},
{
name: 'Qualified ambulance staff',
visible: false,type: 'line',
data: [0,2.518,10.744,16.286,4.976,10.395,12.759,14.93,18.078,19.208,18.542,18.938]
,index: 6
},
{
name: 'NHS infrastructure support',
visible: false,type: 'line',
data: [0,6.259,12.702,17.789,12.558,11.917,18.447,28.272,27.559,20.107,17.834,15.823]
,index: 7
},
{
name: 'Other GP practice staff',
visible: false,type: 'line',
data: [0,1.93,6.049,7.416,13.158,9.838,7.657,6.282,23.677,26.678,28.564,31.013]
,index: 8
}
]
}
