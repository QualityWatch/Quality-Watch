/* Created by ianb on 01/10/2014 11:57:42 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does nurse density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of Nurses per 1000 population'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [10.41,10.3,10.17,10.07,9.95,9.94,9.94,10.21,9.76,null,10.2,10.3,10.18,null,10.19,10.22,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [10.4,10.18,10.1,10.13,10,9.45,8.51,8.51,8.73,8.84,9.03,9.14,9.29,9.33,9.25,9.35,5.63]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [null,6.22,6.45,6.66,6.84,7,7.19,7.38,7.59,7.78,7.64,7.91,8.19,8.45,8.71,9.12,null]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,9.6,9.69,9.81,10,10.09,10.23,10.35,10.49,10.72,11.03,11.16,11.31,null,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,9.03,8.84,9.21,9.74,9.7,10.03,10.02,10.09,null]
,index: 5
},
{
name: 'Norway',
visible: false,type: 'line',
data: [null,null,null,null,null,12.13,12.76,13.24,13.64,13.92,13.94,14,15.93,16.13,16.4,16.53,null]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [3.38,3.36,3.41,3.57,3.88,4.07,4.29,4.3,4.36,4.46,4.6,4.82,4.95,5.15,5.22,5.24,null]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.56,9.71,9.83,9.9,10.04,10.26,10.42,10.51,10.7,10.85,10.96,11,11,11.07,null,null,null]
,index: 8
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [null,null,null,9.01,9.29,9.59,10.02,10.14,10.21,9.87,9.58,9.6,9.75,9.52,7.99,8.21,null]
,index: 9
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,10.37,10.17,10.18,10.19,10.1,10.3,10.42,10.52,10.58,10.76,10.8,10.94,11.08,11.14,null]
,index: 10
}
]
}
