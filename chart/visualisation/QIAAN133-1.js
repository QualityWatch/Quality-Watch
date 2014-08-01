/* Created by ianb on 01/08/2014 12:53:53 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of staff leaves and joins the NHS ever month?'},
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
name: 'All Staff Leaving Rate',
type: 'line',
data: [0.79,1.12,0.94,0.62,0.78,0.73,0.8,1.7,0.69,0.75,0.88,0.92,1,0.84,0.7,0.75,0.74,0.63,0.78]
,index: 1
},
{
name: 'All Staff Joining Rate',
type: 'line',
data: [0.7,1.21,1.19,0.91,0.61,1.05,0.71,1.07,0.71,0.77,0.92,0.84,1.63,1.19,1.11,0.76,1.22,0.86,0.94]
,index: 2
},
{
name: '12m moving average - leaving',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,0.89,0.91,0.89,0.87,0.88,0.87,0.87,0.86]
,index: 3
},
{
name: '12m moving average - joining',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,0.89,0.97,0.96,0.96,0.95,1,0.98,1]
,index: 4
}
]
}
