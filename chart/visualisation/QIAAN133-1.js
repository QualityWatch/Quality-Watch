/* Created by rreed on 20/02/2017 13:01:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of staff leaves and joins the NHS every month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of staff that leave/join <br> the NHS', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Leaving Rate',
type: 'line',
data: [0.79,1.12,0.94,0.62,0.78,null,0.8,1.7,0.69,0.75,0.88,0.92,1,0.84,0.7,0.75,0.74,0.63,0.78,1.13,0.81,0.84,0.98,1.02,1.3,1.58,0.82,0.88,0.91,0.72,0.84,1.26,0.86,0.84,0.95,1.13,1.18,0.93,0.83]
,index: 1
},
{
name: 'Joining Rate',
type: 'line',
data: [0.7,1.21,1.19,0.91,0.61,null,0.71,1.07,0.71,0.77,0.92,0.84,1.63,1.19,1.11,0.76,1.22,0.86,0.94,0.93,0.73,0.93,0.84,0.93,1.94,1.79,1.13,0.81,1.21,0.93,1.02,1,0.81,1.04,0.93,1.07,1.89,1.44,1.31]
,index: 2
}
]
}
