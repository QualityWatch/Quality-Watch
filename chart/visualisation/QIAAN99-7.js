/* Created by rreed on 25/05/2017 13:34:19 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does nurse density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Nurse density per 1,000 population <br> (headcount)', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [10.41,10.3,10.17,10.07,9.95,9.94,9.94,10.21,9.76,null,10.2,10.3,10.18,null,10.19,10.22,11.52,null,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [7.65,7.55,7.52,7.58,7.46,9.45,8.51,8.51,8.73,8.84,9.03,9.14,9.29,9.33,9.25,9.35,9.48,null,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [null,6.22,6.45,6.66,6.84,7,7.19,7.38,7.59,7.78,7.64,7.91,8.19,8.45,8.71,9.1,9.39,9.69,null]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,10.52,10.61,10.74,10.95,11.06,11.23,11.35,11.51,11.74,12.04,12.16,12.29,12.61,12.96,null,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,9.03,8.84,9.21,9.74,9.7,10.03,10.08,9.97,10,10.39,10.25]
,index: 5
},
{
name: 'Norway',
visible: false,type: 'line',
data: [null,null,null,null,null,12.13,12.76,13.24,13.64,13.92,13.94,14,15.93,16.13,16.4,16.53,16.67,null,null]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [3.38,3.36,3.41,3.57,3.88,4.07,4.29,4.3,4.36,4.46,4.6,4.82,4.95,5.15,5.22,5.24,5.14,null,null]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.59,9.75,9.87,9.95,10.09,10.3,10.41,10.54,10.74,10.89,11,11.04,11.03,11.1,11.13,11.15,null,null,null]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,9.01,9.29,9.59,10.02,10.14,10.21,9.87,9.58,9.6,9.75,9.52,8.36,8.21,8.18,8.26,7.93]
,index: 9
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,10.37,10.17,10.18,10.19,10.1,10.3,10.42,10.52,10.58,10.76,10.8,10.94,11.08,11.15,11.14,null,null]
,index: 10
},
{
name: 'OECD AVERAGE',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10.56,null,null]
,index: 11
}
]
}
