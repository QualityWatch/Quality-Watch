/* Created by EFisher on 25/02/2014 18:30:15 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does physician density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Physician density per 1,000 population <br> (head counts)', offset: 87}
, min: 1.5
, labels: {
format: '{value:.2f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [2.39,2.43,2.47,2.39,2.39,2.39,2.43,2.47,2.54,2.54,2.6,2.68,2.75,2.81,2.98,3,3.1,null,3.31,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [2.15,2.13,2.11,2.09,2.07,2.09,2.09,2.1,2.1,2.11,2.1,2.13,2.16,2.18,2.21,2.26,2.33,2.37,2.44,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [3.14,3.18,3.2,3.21,3.23,3.24,3.24,3.26,3.29,3.31,3.32,3.34,3.34,3.33,3.31,3.31,3.27,3.27,3.31,3.32]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [2.92,3,3.06,3.11,3.13,3.17,3.21,3.26,3.31,3.34,3.37,3.39,3.41,3.45,3.5,3.56,3.64,3.73,3.84,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,2.23,2.19,2.13,2.17,2.19,2.11,2.27,2.3,2.46,2.57,2.61,2.64,2.7]
,index: 5
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,2.49,2.91,2.93,2.87,3.08,3.3,3.09,3.03,3.26,3.37,3.77,3.62,3.65,3.5,3.54,3.78,4.1,3.84]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [2.74,2.8,2.89,2.89,2.92,2.98,3.03,3.09,3.19,3.29,3.37,3.44,3.51,3.6,3.68,3.74,3.8,3.86,null,null]
,index: 7
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [1.68,1.7,1.75,1.8,1.85,1.9,1.91,1.96,2.01,2.08,2.18,2.35,2.43,2.48,2.52,2.61,2.71,2.76,2.81,2.82]
,index: 8
},
{
name: 'United States',
visible: false,type: 'line',
data: [2.12,2.14,2.19,2.22,2.28,2.25,2.24,2.29,2.35,2.35,2.38,2.39,2.43,2.42,2.43,2.44,2.44,2.43,2.46,null]
,index: 9
}
]
}
