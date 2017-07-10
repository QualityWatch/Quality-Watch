/* Created by rreed on 06/07/2017 08:49:14 using v2.7 */{
title: {text:'Diabetes hospital admissions (short- and long-term complications, and uncontrolled diabetes without complications)'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of diabetes admissions compare internationally over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-sex standardised rate per 100,000 <br> population', offset: 87}
, max: 300
, labels: {
format: '{value:.2f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,230.3,135.8,134.8,141.3,137.7]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [165.1,171,176.4,188.7,198.2,190.1,193.3,191.8,177.3,176.5,173,171,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,142.9,null,99.9,96.8,97.8,96,95.3,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,194.8,197.3,194,180.6,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,231.2,null,219.2,null,217.2,null,216.3,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [140.1,144.9,142.9,136.9,127.6,173.3,180.8,183.9,171.8,160.5,151.6,141.9,144,138.6,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,95.8,92.8,86.4,84.3,81.5,77.2,71.6,68.1,62.6,57.4,52.1,48.2,43.5,null]
,index: 7
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,null,75.1,69.5,69.9,69,73.2,68.3,null,null,null]
,index: 8
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,152.7,155.6,159.6,160.2,169.3,180.6,173.4,186.8,null,null]
,index: 9
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,126.1,null,101.2,null,88.7,null,85.7,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [71.1,71.9,70.6,69.6,70.2,70,69.6,69.5,66.4,64.4,63.2,59.9,56.1,52.3,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,148.4,141.9,133.8,141.8,128.6,118.4,111.2,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,66.3,65.8,64.3,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,208,null,202.3,null,201.3,null,198.2,null,null]
,index: 14
}
]
}
