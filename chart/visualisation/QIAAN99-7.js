/* Created by EFisher on 12/10/2015 14:31:45 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does nurse density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Nurses  density per 1 ,000 population <br> (head counts)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [10.4,10.3,10.2,10.1,10,9.9,9.9,10.2,9.8,null,10.2,10.3,10.2,null,10.2,10.2,11.5,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [7.6,7.6,7.5,7.6,7.5,9.4,8.5,8.5,8.7,8.8,9,9.1,9.3,9.3,9.2,9.4,9.5,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [null,6.2,6.4,6.7,6.8,7,7.2,7.4,7.6,7.8,7.6,7.9,8.2,8.4,8.7,9.1,9.4,9.7]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,10.5,10.6,10.7,11,11.1,11.2,11.4,11.5,11.7,12,12.2,12.3,12.6,13,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,9,8.8,9.2,9.7,9.7,10,10.1,10,10,10.4]
,index: 5
},
{
name: 'Norway',
visible: false,type: 'line',
data: [null,null,null,null,null,12.1,12.8,13.2,13.6,13.9,13.9,14,15.9,16.1,16.4,16.5,16.7,null]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [3.4,3.4,3.4,3.6,3.9,4.1,4.3,4.3,4.4,4.5,4.6,4.8,5,5.2,5.2,5.2,5.1,null]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [9.6,9.8,9.9,10,10.1,10.3,10.4,10.5,10.7,10.9,11,11,11,11.1,11.1,11.2,null,null]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,9,9.3,9.6,10,10.1,10.2,9.9,9.6,9.6,9.8,9.5,8.4,8.2,8.2,8.3]
,index: 9
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,10.4,10.2,10.2,10.2,10.1,10.3,10.4,10.5,10.6,10.8,10.8,10.9,11.1,11.2,11.1,null]
,index: 10
},
{
name: 'OECD AVERAGE',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10.6,null,null]
,index: 11
}
]
}
