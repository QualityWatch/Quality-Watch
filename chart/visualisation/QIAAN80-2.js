/* Created by ianb on 01/10/2014 11:52:21 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed in the short term?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014']
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
data: [8.5,8.28,8.81,8.59,8.35,7.98,9.18,9.22,8.24,8.5,8.67,8.69,8.58,8.62,9.15,8.97,8.72,8.28,9.43,9.5,8.75,8.59,9.14,9.37,8.87]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 8.41],[24, 9.05]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [4.12,4.26,4.72,4.25,4.25,4.01,4.84,3.84,3.92,5.07,4.85,5.19,5.04,5.21,5.67,5.13,5.12,4.88,5.75,4.75,4.82,5.01,5.54,5.43,5.25]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 4.15],[24, 5.42]]
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [5.47,5.85,5.8,5.31,5.4,6.08,6.04,5.12,5.5,5.56,5.61,5.68,5.63,6.16,5.95,5.59,5.71,6.28,6.23,5.41,5.46,5.87,6.22,5.8,5.82]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 5.56],[24, 5.89]]
}
]
}
