/* Created by ianb on 04/11/2014 13:16:01 using v2.2 */{
title: {text:'Antibacterials for systemic use'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does antibiotic prescribing compare internationally?'},
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
title: {text:'Defined Daily Dosage (DDD) per 1,000 <br> inhabitants, per day', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [21.5,21.4,19.9,19.3,20.9,21.3,21,23.6,24.9,23.6,24.1,24.8,23.7,0]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [0,0,0,0,0,0,0,18.6,18.3,17.8,18.2,18.5,18.4,0]
,index: 2
},
{
name: 'Finland',
visible: false,type: 'line',
data: [19.1,19.8,17.9,18.7,17.3,18.1,17.4,18.3,17.8,17.9,18.5,20.1,22,0]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [33.3,33.2,32.2,28.9,27.1,28.9,27.9,28.6,28.1,29.6,28.2,28.7,0,0]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [13.5,12.6,12.6,12.7,12,13.3,12.5,13.3,13.5,14.2,14,13.9,14.8,0]
,index: 5
},
{
name: 'Spain',
visible: false,type: 'line',
data: [19,18,18,18.9,18.6,19.3,18.7,19.9,19.8,19.7,20.3,20.9,19.4,0]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [16.1,16.3,16.1,16.1,16,16.5,16.9,17.3,16.8,15.8,15.7,15.7,15.5,14.7]
,index: 7
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [14.3,14.8,14.8,15.1,15,15.4,15.3,16.5,17,17.3,18.7,18.8,19.4,0]
,index: 8
}
]
}
