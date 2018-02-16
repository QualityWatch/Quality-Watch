/* Created by JMorris on 15/02/2018 14:40:37 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does nurse density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Nurse density per 1,000 population <br> (head counts)', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [10.41,10.3,10.17,10.07,9.95,9.94,9.94,10.21,9.76,null,10.2,10.3,10.18,null,10.19,10.22,11.39,11.37,11.48,11.68]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,8.51,8.51,8.73,8.84,9.04,9.16,9.32,9.37,9.29,9.39,9.52,9.78,9.87,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [null,6.22,6.45,6.66,6.84,7,7.19,7.38,7.59,7.78,7.64,7.91,8.19,8.45,8.71,9.1,9.38,9.66,9.92,10.21]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,10.52,10.6,10.74,10.95,11.06,11.23,11.35,11.5,11.74,12.04,12.14,12.52,12.61,13.02,13.24,13.34,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,9.03,8.84,9.22,9.77,9.73,10.06,10.12,10.02,10.07,10.11,10.25,10.28]
,index: 5
},
{
name: 'Spain',
visible: false,type: 'line',
data: [3.34,3.32,3.37,3.54,3.88,4.07,4.29,4.3,4.36,4.46,4.6,4.82,4.95,5.15,5.22,5.24,5.14,5.15,5.29,null]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.56,9.73,9.84,9.93,10.07,10.28,10.4,10.53,10.73,10.88,10.99,11.02,11.02,11.09,11.11,11.14,11.16,11.14,null,null]
,index: 7
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,9.01,9.29,9.59,10.02,10.14,10.21,9.87,9.58,9.6,9.75,9.52,8.36,8.21,8.18,8.19,7.9,7.91]
,index: 8
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,10.37,10.17,10.18,10.19,10.1,10.3,10.42,10.52,10.58,10.76,10.8,10.94,11.08,11.14,11.14,11.17,11.3,null]
,index: 9
}
]
}
