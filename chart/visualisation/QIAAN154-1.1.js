/* Created by rreed on 16/02/2017 16:51:58 using v2.6 */{title: {text:'Patient-based ischaemic stroke, 30-day mortality'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the UK\'s ischaemic stroke mortality rate compare internationally over time?'},
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
title: {text:'Age-sex standardised rate per 100 <br> patients (age 45+)', offset: 87}
, max: 20
, min: 0
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Korea',
visible: true,type: 'line',
data: [null,null,null,null,7.7,7.4,7,6.5,6,5.6,5.7,5.6,5.3,4.8]
,index: 1
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [17.6,17,16.2,14.2,14.1,12.1,11.5,11.8,11,10.8,10.3,9.6,null,null]
,index: 2
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [15.1,14.5,14.5,13.4,13.6,13.9,14,13.3,12.6,12,11.9,13.3,12.1,11]
,index: 3
},
{
name: 'Spain',
visible: false,type: 'line',
data: [13,12.5,13,12.6,11.8,12.3,11.6,11.6,11.2,10.8,10.7,10.4,10.4,9.9]
,index: 4
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [11.8,11.7,11.4,11.6,11,10.7,10.7,10.6,10.7,10.5,10.2,9.9,9.6,9.6]
,index: 5
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,17,14.7,13.8,11.7,11.6,10.6]
,index: 6
}
]
}
