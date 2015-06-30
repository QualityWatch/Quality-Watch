/* Created by ianb on 26/06/2015 16:56:47 using v2.6 */{
title: {text:'Diabetes hospital admissions (short- and long-term complications, and uncontrolled diabetes without complications)'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of diabetes admissions compare internationally over time?'},
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
title: {text:'Age-sex standardised rate per 100,000 <br> population', offset: 87}
, max: 450
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,232.6,235.7,224.6,133,131.9]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [170.7,177.1,182.4,195,204.4,195.2,198.8,196.8,181.7,181.1,null,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,106.6,null,82,80.8,81.2,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,22.1,21.5,null]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,231.3,null,219.2,null,217.2,null]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [121.3,123.4,123.5,118.3,111.9,160.3,166.8,173.3,162.3,152,144.6,135.3,null]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,100.5,97.5,90.8,88.8,85.7,81.6,75.5,72,66.4,61,54.2,null]
,index: 7
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,65.8,null,60.1,59.4,58.9,62.2,null,null]
,index: 8
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,152.7,155.5,159.6,160,169.2,180.3,173.1,null]
,index: 9
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,126,null,101.3,null,88.7,null]
,index: 10
},
{
name: 'Spain',
visible: false,type: 'line',
data: [86.8,89.2,87,87.4,89.7,89.6,86.4,87.9,85.9,86.5,88.3,85,null]
,index: 11
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,135.7,125.2,148.2,149.2,116.9,null]
,index: 12
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,72.8,72.8,73.5,73.7,74.6,71.8,null]
,index: 13
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,207.9,null,202.2,null,201.4,null,null]
,index: 14
}
]
}
