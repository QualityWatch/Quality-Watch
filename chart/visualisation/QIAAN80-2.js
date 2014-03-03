/* Created by EFisher on 25/02/2014 18:25:03 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed in the short term?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Median waiting times from referral <br> to treatment (weeks)', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [8.74,8.08,8.05,8.44,8.42,8.5,8.28,8.81,8.59,8.35,7.98,9.18,9.22,8.24,8.5,8.67,8.69,8.58,8.62,9.15,8.97,8.72]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 8.29],[21, 8.83]]
},
{
name: 'Non-admitted RTT pathways',
type: 'line',
data: [3.56,3.64,4.02,4.08,4.24,4.12,4.26,4.72,4.25,4.25,4.01,4.84,3.84,3.92,5.07,4.85,5.19,5.04,5.21,5.67,5.13,5.12]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-admitted RTT pathways trendline',
data: [[0, 3.63],[21, 5.22]]
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [5.18,5.21,5.48,5.29,5.71,5.47,5.85,5.8,5.31,5.4,6.08,6.04,5.12,5.5,5.56,5.61,5.68,5.63,6.16,5.95,5.59,5.7]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 5.37],[21, 5.8]]
}
]
}
