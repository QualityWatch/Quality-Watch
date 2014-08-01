/* Created by ianb on 01/08/2014 12:54:04 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of nurses leaves and joins the NHS ever month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, min: 0.4
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Nurses Joining Rate',
type: 'line',
data: [0.46,1.33,1.67,1.04,0.62,0.97,0.72,1.03,0.7,0.71,0.65,0.57,1.63,1.85,1.33,0.76,1.18,0.9,1.03]
,index: 1
},
{
name: 'Nurses Leaving Rate',
type: 'line',
data: [0.79,1.27,0.98,0.68,0.93,0.86,0.74,1.3,0.74,0.76,0.85,0.87,1.2,0.91,0.78,0.97,0.94,0.66,0.87]
,index: 2
},
{
name: '12m moving average - nurses leaving',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,0.9,0.93,0.9,0.89,0.91,0.91,0.89,0.9]
,index: 3
},
{
name: '12m moving average - nurses joining',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,0.87,0.97,1.01,0.99,0.96,1.01,1,1.03]
,index: 4
}
]
}
