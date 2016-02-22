/* Created by EFisher on 17/02/2016 18:38:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed in the short term?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015']
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
name: 'Incomplete RTT pathways',
type: 'line',
data: [6.28,6.23,5.41,5.46,5.87,6.22,5.78,5.86,6.44,6.2,5.81,5.82,6.55,6.65,5.57,5.56,5.9,6,6,6,6.5,6.5,6.2,6.1,6.7]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 5.84],[24, 6.26]]
},
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [8.28,9.43,9.5,8.75,8.59,9.14,9.36,8.85,8.94,9.53,9.33,9.17,8.42,9.7,10.03,9.09,9.1,9.4,9.5,9.2,9.2,9.8,9.7,9.4,8.8]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 8.93],[24, 9.44]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [4.88,5.75,4.75,4.82,5.01,5.54,5.43,5.25,5.5,5.98,5.41,5.41,5.14,6.09,5.15,5.03,5.5,5.5,5.6,5.4,5.6,6.1,5.7,5.7,5.3]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 5.13],[24, 5.67]]
}
]
}
