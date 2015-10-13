/* Created by EFisher on 12/10/2015 14:31:01 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed in the short term?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Median waiting times from referral <br> to treatment (weeks)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [8.6,8.6,9.1,9,8.7,8.3,9.4,9.5,8.8,8.6,9.1,9.4,8.9,8.9,9.5,9.3,9.2,8.4,9.7,10,9.1,9,9.3,9.3,9.1]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 8.8],[24, 9.3]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [5,5.2,5.7,5.1,5.1,4.9,5.8,4.7,4.8,5,5.5,5.4,5.2,5.5,6,5.4,5.4,5.1,6.1,5.2,5,5.5,5.5,5.6,5.4]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 5.1],[24, 5.5]]
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [5.6,6.2,6,5.6,5.7,6.3,6.2,5.4,5.5,5.9,6.2,5.8,5.9,6.4,6.2,5.8,5.8,6.5,6.7,5.6,5.6,5.9,6,6,6]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 5.8],[24, 6]]
}
]
}
