/* Created by ianb on 01/08/2014 12:53:59 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of doctors leaves and joins the NHS ever month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, min: 0.5
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Doctors Leaving Rate',
type: 'line',
data: [1.07,1.08,0.81,0.66,0.62,0.88,0.67,2.25,0.69,0.76,0.98,1.28,0.86,0.85,0.63,0.64,0.77,0.7]
,index: 1
},
{
name: 'Doctors Joining Rate',
type: 'line',
data: [1.64,1.5,1.19,0.91,0.62,0.96,0.82,1.15,0.8,0.74,0.81,1.6,1.5,1.17,0.93,0.67,1.11,1.13,0.89]
,index: 2
},
{
name: '12m moving average - doctors leaving',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,0.98,0.96,0.94,0.93,0.93,0.94,0.93,0.94]
,index: 3
},
{
name: '12 moving average - doctors joining',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,1.06,1.05,1.02,1,0.98,1.02,1.04,1.04]
,index: 4
}
]
}
