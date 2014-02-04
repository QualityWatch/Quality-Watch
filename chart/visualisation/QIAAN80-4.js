/* Created by EFisher on 24/01/2014 17:00:17 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the longest referral to treatment times changed in the past 12 months?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Referral to treatment (RTT) 95th <br> percentile (weeks)', offset: 87}
, max: 24
, min: 14
, labels: {
}},
series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [21.4,20.8,20.9,21.2,20.9,20.8,20.5,21,21.2,21.5,21.9,22.4,21.9]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Admitted (adjusted) RTT pathways trendline',
data: [[0, 20.62],[12, 21.72]]
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [15.6,15.7,15.7,16.1,16,15.9,15.5,16,16.1,16,16.1,15.9,16.3]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Admitted RTT pathways trendline',
data: [[0, 15.65],[12, 16.1]]
},
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [19,19.2,18.6,18.7,18.3,18.3,18.7,18.8,18.8,18.9,18.8,18.2,18.5]
,index: 3
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Incomplete RTT pathways trendline',
data: [[0, 18.87],[12, 18.54]]
},
{
name: '18 week target',
type: 'line',
data: [18,18,18,18,18,18,18,18,18,18,18,18,18]
,index: 4
}
]
}
