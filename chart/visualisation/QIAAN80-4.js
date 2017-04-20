/* Created by rreed on 4/19/2017 4:37:12 PM using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have referral to treatment times changed in the short term?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Median waiting times from referral <br> to treatment (weeks)', offset: 87}
, max: 12
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [6.2,5.8,5.8,6.5,6.7,5.6,5.6,5.9,6.0,6.0,6.0,6.5,6.5,6.2,6.1,6.7,6.8,5.9,6.4,6.6,6.4,6.5,6.6,7.0,6.9,6.5,6.5,7.2,7.2]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 5.7],[37, 6.7]]
},
{
name: 'Admitted (unadjusted) RTT pathways',
type: 'line',
data: [9.7,9.5,9.3,8.5,9.9,10.2,9.2,9.1,9.4,9.5,9.2,9.2,9.8,9.7,9.4,8.8,10.2,10.2,9.3,9.6,10.0,9.8,9.7,9.7,10.5,10.3,10.0,9.3,10.6]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (unadjusted) RTT pathways trendline',
data: [[0, 9],[37, 10]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [6.0,5.4,5.4,5.1,6.1,5.2,5.0,5.5,5.5,5.6,5.4,5.6,6.1,5.7,5.7,5.3,6.3,5.4,5.3,5.9,5.8,5.9,5.9,5.9,6.5,6.2,6.0,5.6,6.7]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 5.1],[37, 6.1]]
}
]
}
