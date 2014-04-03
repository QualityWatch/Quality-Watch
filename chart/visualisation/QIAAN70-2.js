/* Created by EFisher on 26/03/2014 16:47:33 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times for IAPT services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:' Ratio of active referrals who have <br> waited more than 28 days from referral <br> to first treatment/first therapeutic <br> session (at the end of the reporting <br> period) to number of referrals (during <br> the reporting period)', offset: 135}
, labels: {
}},
series:[
{
name: 'Ratio of referrals',
type: 'line',
data: [0.44,0.38,0.39,0.39,0.51,0.47,0.45,0.44]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Ratio of referrals trendline',
data: [[0, 0.39],[7, 0.46]]
}
]
}
