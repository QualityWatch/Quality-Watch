/* Created by rreed on 20/02/2017 13:01:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of nurses leaves and joins the NHS every month?'},
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
title: {text:'Proportion of Qualified nursing, <br> midwifery & health visiting staff <br> that leave/join the NHS', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Leaving Rate',
type: 'line',
data: [0.79,1.27,0.98,0.68,0.93,null,0.74,1.3,0.74,0.76,0.85,0.87,1.2,0.91,0.78,0.97,0.94,0.66,0.87,1.15,0.85,0.9,0.86,1.02,1.43,1.5,0.92,1.09,0.97,0.76,0.94,1.22,0.91,0.97,0.95,1.17,1.2,0.98,0.96]
,index: 1
},
{
name: 'Joining Rate',
type: 'line',
data: [0.46,1.33,1.67,1.04,0.62,null,0.72,1.03,0.7,0.71,0.65,0.57,1.63,1.85,1.33,0.76,1.18,0.9,1.03,1.01,0.8,0.79,0.61,0.65,1.94,2.36,1.27,0.86,1.22,0.91,1.08,1.03,0.76,0.9,0.66,0.75,1.86,2.18,1.39]
,index: 2
}
]
}
