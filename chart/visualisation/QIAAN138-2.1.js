{
title: {text:'Total knee replacements'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of hip and knee replacements compare internationally and over time?'},
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
data: [87.2,102.1,108.1,115.2,124.4,131.5,136.8,145.6,147.7,158.6,169.5,178,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,136.1,138.5,142.9,144.9,149.2,159.8,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [77.4,83.1,90.2,93.1,93.2,98.4,102.4,110.1,114.5,119.5,124.1,132.6,139.3]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,164,172.9,187.8,199.3,206,206.1,206,205.5]
,index: 4
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,48,55.5,63.9,72.8,77.7,85.1,92.4,96.3,96.5,99.8,100.6,103.5]
,index: 5
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [59.1,57.3,52.4,50.7,68.3,86.3,85.6,93.8,88,91.2,88.1,91.5,95.9]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,null,null,74.3,84.6,88.4,92.4,96.9,98.6,100.9,105,104.6]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,94.1,103.2,101.5,114.2,128.7,131.1,128.4,139.7]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [67.7,72.9,84.8,98.1,104.7,111.3,117.7,131.4,134.3,131.8,134.7,140.1,139.3]
,index: 9
}
]
}