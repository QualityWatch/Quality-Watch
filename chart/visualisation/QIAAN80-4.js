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
, categories: ['Sep-14','Oct-14','Nov-14','Dec-14','Jan-15','Feb-15','Mar-15','Apr-15','May-15','Jun-15','Jul-15','Aug-15','Sep-15','Oct-15','Nov-15','Dec-15','Jan-16','Feb-16','Mar-16','Apr-16','May-16','Jun-16','Jul-16','Aug-16','Sep-16','Oct-16','Nov-16','Dec-16','Jan-17']
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
name: 'Admitted (unadjusted) RTT pathways',
type: 'line',
data: [9.7,9.5,9.3,8.5,9.9,10.2,9.2,9.1,9.4,9.5,9.2,9.2,9.8,9.7,9.4,8.8,10.2,10.2,9.3,9.6,10.0,9.8,9.7,9.7,10.5,10.3,10.0,9.3,10.6]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [6.0,5.4,5.4,5.1,6.1,5.2,5.0,5.5,5.5,5.6,5.4,5.6,6.1,5.7,5.7,5.3,6.3,5.4,5.3,5.9,5.8,5.9,5.9,5.9,6.5,6.2,6.0,5.6,6.7]
,index: 3
},
]
}
