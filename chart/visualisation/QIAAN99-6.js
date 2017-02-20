/* Created by rreed on 20/02/2017 12:58:40 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does physician density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Physician density per 1,000 population <br> (head counts)', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [2.4,2.44,2.48,2.4,2.4,2.4,2.45,2.49,2.56,2.56,2.63,2.71,2.78,2.84,3.01,3.02,3.12,null,3.32,3.31,3.4,3.47,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2.46,2.5,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3.07,3.08,3.1,3.11,3.13]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [2.92,2.99,3.05,3.1,3.12,3.16,3.2,3.25,3.29,3.32,3.35,3.37,3.4,3.44,3.49,3.54,3.62,3.71,3.8,3.95,4.04,4.11,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,2.23,2.19,2.13,2.17,2.19,2.11,2.27,2.3,2.46,2.58,2.62,2.65,2.72,2.83,2.84,3.02]
,index: 5
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,null,2.78,2.9,2.96,3.09,3.16,3.14,3.13,3.22,3.44,3.55,3.62,3.56,3.54,3.6,3.76,3.84,3.82,3.81,3.8,null]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,2.89,2.9,2.93,2.99,3.03,3.1,3.2,3.3,3.38,3.45,3.52,3.61,3.69,3.75,3.82,3.89,3.97,4.04,4.12,null,null]
,index: 7
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [1.68,1.7,1.75,1.8,1.85,1.9,1.91,1.96,2.01,2.08,2.17,2.31,2.39,2.44,2.47,2.56,2.65,2.7,2.74,2.75,2.77,2.79,2.8]
,index: 8
},
{
name: 'United States',
visible: false,type: 'line',
data: [2.12,2.14,2.19,2.22,2.28,2.25,2.24,2.29,2.35,2.35,2.38,2.39,2.43,2.42,2.43,2.44,2.44,2.43,2.46,2.5,2.56,null,null]
,index: 9
}
]
}
