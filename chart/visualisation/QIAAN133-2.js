/* Created by rreed on 20/02/2017 13:01:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of doctors leaves and joins the NHS every month?'},
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
title: {text:'Proportion of all HCHS doctors (excluding <br> locums trainees) that leave/join <br> the NHS', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Leaving Rate',
type: 'line',
data: [1.07,1.08,0.81,0.66,0.62,null,0.67,2.25,0.69,0.76,0.98,1.28,0.86,0.85,0.63,0.64,0.81,0.77,0.7,1.2,0.71,0.71,0.77,1.21,0.97,1.58,0.66,0.66,0.82,0.76,0.58,1.03,0.67,0.69,0.79,1.11,0.91,0.81,0.62]
,index: 1
},
{
name: 'Joining Rate',
type: 'line',
data: [1.64,1.5,1.19,0.91,0.62,null,0.82,1.15,0.8,0.74,0.81,1.6,1.5,1.17,0.93,0.67,1.11,1.13,0.89,0.99,0.82,0.74,0.66,1.61,1.8,1.87,0.99,0.67,1.06,1.09,0.93,0.95,0.83,0.76,0.6,1.52,1.56,1.09,0.96]
,index: 2
}
]
}
