/* Created by ianb on 16/12/2014 11:02:56 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What was the trend for conditions with the biggest changes over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','','Increases','Decreases','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
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
name: 'UTI/Pyelonephritis',
visible: true,type: 'line',
data: [101.64,108.65,121.2,138.04,152.08,162.42,166.28,180.15,194.13,206.94,216.24,230.66,235.23,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 11
},
{
name: 'Pneumonia (primary diagnosis)',
visible: false,type: 'line',
data: [58.75,63.15,68.05,75.61,84.55,84.39,87.99,99.19,108.83,129.24,130.06,143.23,138.07,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 10
},
{
name: 'Pneumonia (secondary diagnosis)',
visible: false,type: 'line',
data: [12.13,13.45,15.06,16.21,17.92,20.93,23.95,28.09,32.89,38.62,42.1,44.97,46.35,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 9
},
{
name: 'Asthma',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,125.95,121.24,130.22,144.28,132.16,141.13,124.14,136.05,126.55,124.3,108.7,122.49,110.27]
,index: 8
},
{
name: 'Congestive heart failure',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,85.51,83.98,80.56,78.58,74.99,68.69,67.93,65.99,64.44,63.15,63,64.05,62.95]
,index: 7
},
{
name: 'Angina',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,150.19,143.91,136.89,127.99,120.07,112.97,104.48,101.03,93.16,88.36,86.93,80.74,77.99]
,index: 6
},
{
name: 'UTI/Pyelonephritis',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,133.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 11
},
{
name: 'Pneumonia (primary diagnosis)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,79.32,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 10
},
{
name: 'Pneumonia (secondary diagnosis)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,34.22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 9
},
{
name: 'Asthma',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15.68,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 8
},
{
name: 'Congestive heart failure',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,22.56,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 7
},
{
name: 'Angina',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,72.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 6
}
]
}
