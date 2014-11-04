/* Created by ianb on 04/11/2014 13:30:51 using v2.2 */{
title: {text:'Hip replacements'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of caesarean sections compare internationally and over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Total procedures per 100,000 population'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [126.1,136.9,141.4,146,149.8,149.7,152.6,155.9,155.1,163.2,167.1,171.4,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,118.8,119.5,121.8,124,125.9,130.4,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [206.6,211.5,214.7,214.2,211.8,216.5,215,217.2,219.9,223.4,224.9,229.6,230.3]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,254.7,259.8,268.3,276.7,282.6,283.9,284.4,287.4]
,index: 4
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,130,136.8,140.6,146.8,150.1,153.9,155.2,156.1,156.1,158.8,160.2,163.8]
,index: 5
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [119.4,117.5,110,104.8,129.2,133.3,135.1,146.2,144,145.6,143.4,141.1,144.7]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,null,null,83.7,88.7,90.7,95,92.3,93.6,98.6,99.6,101.5]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,212.2,212.1,213.9,227,238.5,240.4,237.9,241.7]
,index: 8
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [121.5,123.6,131.2,138.5,138.4,141.6,149.7,162.2,166.2,166.2,171.3,176.6,177.2]
,index: 9
}
]
}
