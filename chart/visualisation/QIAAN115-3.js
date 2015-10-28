/* Created by EFisher on 26/10/2015 10:07:52 using v2.7 */{
title: {text:'Infant mortality'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s infant mortality rate compare internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Deaths per 1000 live births'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [5.2,5.3,5,4.8,4.7,4.9,4.7,4.1,4.1,4.2,4.1,3.8,3.3,3.6]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [4.8,4.6,4.5,4.1,3.9,3.7,4,3.9,3.8,3.5,3.6,3.4,3.8,3.5]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [5.3,5.2,5.4,5.3,5.3,5.4,5,5.1,5.1,4.9,5,4.8,null,null]
,index: 3
},
{
name: 'Finland',
visible: false,type: 'line',
data: [3.8,3.2,3,3.1,3.3,3,2.8,2.7,2.6,2.6,2.3,2.4,2.4,1.8]
,index: 4
},
{
name: 'France',
visible: false,type: 'line',
data: [4.5,4.6,4.2,4.2,4,3.8,3.8,3.8,3.8,3.9,3.6,3.5,3.5,3.6]
,index: 5
},
{
name: 'Germany',
visible: false,type: 'line',
data: [4.4,4.3,4.2,4.2,4.1,3.9,3.8,3.9,3.5,3.5,3.4,3.6,3.3,3.3]
,index: 6
},
{
name: 'Greece',
visible: false,type: 'line',
data: [5.9,5.1,5.1,4,4.1,3.8,3.7,3.5,2.7,3.1,3.8,3.4,2.9,3.7]
,index: 7
},
{
name: 'Iceland',
visible: false,type: 'line',
data: [3,2.7,2.2,2.4,2.8,2.3,1.4,2,2.5,1.8,2.2,0.9,1.1,1.8,null]
,index: 8
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [6.2,5.7,5,5.3,4.6,3.8,3.9,3.2,3.8,3.3,3.6,3.5,3.5,3.5]
,index: 9
},
{
name: 'Italy',
visible: false,type: 'line',
data: [4.3,4.4,4.1,3.9,3.9,3.8,3.6,3.5,3.3,3.4,3.2,2.9,2.9,2.9]
,index: 10
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [5.1,5.4,5,4.8,4.4,4.9,4.4,4.1,3.8,3.8,3.8,3.6,3.7,3.8]
,index: 11
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [6.3,5.6,6.2,5.4,5.9,5,5.1,4.8,5,5.2,5.5,5.2,null,null]
,index: 12
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [5.5,5,5,4.1,3.8,3.5,3.3,3.4,3.3,3.6,2.5,3.1,3.4,2.9,null]
,index: 13
},
{
name: 'Spain',
visible: false,type: 'line',
data: [4.4,4,4.1,3.9,3.9,3.7,3.5,3.4,3.3,3.2,3.2,3.1,3.1,2.7]
,index: 14
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [3.4,3.7,3.3,3.1,3.1,2.4,2.8,2.5,2.5,2.5,2.5,2.1,2.6,2.7]
,index: 15
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [5.6,5.5,5.2,5.3,5,5.1,4.9,4.7,4.6,4.5,4.2,4.2,4.1,3.8]
,index: 16
},
{
name: 'United States',
visible: false,type: 'line',
data: [6.9,6.8,7,6.8,6.8,6.9,6.7,6.8,6.6,6.4,6.1,6.1,6,null]
,index: 17
}
]
}
