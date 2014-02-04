/* Created by EFisher on 24/01/2014 17:05:25 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What was the trend for conditions with the biggest changes over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','','Increases','Decreases','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly standardised rate of admission <br> per 100,000 population', offset: 87}
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'UTI/pyelonephritis',
type: 'line',
data: [101.64,108.65,121.2,138.04,152.08,162.42,166.28,180.14,194.06,206.69,216.23,228.88,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 11
},
{
name: 'Pneumonia (primary diagnosis)',
visible: false,type: 'line',
data: [58.75,63.15,68.05,75.61,84.55,84.39,87.99,99.19,108.77,129.12,130.05,141.44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 10
},
{
name: 'Gastroenteritis',
visible: false,type: 'line',
data: [89.36,100.83,95.13,112.94,115.1,118.51,125.02,124.15,131.13,127.74,126.25,125.69,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 9
},
{
name: 'Asthma',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,125.95,121.24,130.22,144.28,132.16,141.13,124.14,136.05,126.5,124.21,108.69,122.04]
,index: 8
},
{
name: 'Congestive heart failure',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,85.51,83.98,80.56,78.58,74.99,68.69,67.93,65.99,64.4,63.09,62.99,63.26]
,index: 7
},
{
name: 'Angina',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,150.19,143.91,136.89,127.99,120.07,112.97,104.48,101.03,93.12,88.24,86.93,80.46]
,index: 6
},
{
name: 'UTI/pyelonephritis',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,127.24,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 11
},
{
name: 'Pneumonia (primary diagnosis)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,82.69,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 10
},
{
name: 'Gastroenteritis',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,36.33,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 9
},
{
name: 'Asthma',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,3.91,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 8
},
{
name: 'Congestive heart failure',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,22.25,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 7
},
{
name: 'Angina',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,69.73,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 6
}
]
}
