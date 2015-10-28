/* Created by EFisher on 26/10/2015 10:06:05 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many people were referred to IAPT and how many referrals started treatment in each quarter?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12 Q1','2011-12 Q2','2011-12 Q3','2011-12 Q4','2012-13 Q1','2012-13 Q2','2012-13 Q3','2012-13 Q4','2013-14 Q1','2013-14 Q2','2013-14 Q3','2013-14 Q4','2014-15 Q1','2014-15 Q2','2014-15 Q3']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number in each quarter'}
, labels: {
format: '{value:.5f}' 
,formatter: function() {return '$'+this.value;}}},
series:[
{
name: 'Number of referrals to IAPT',
type: 'line',
data: [206918,214162,218458,247914,232967,240314,252746,259016,241250,259042,262365,297691,273454,293847,313349]
,index: 1
},
{
name: 'Number of referrals starting treatment',
type: 'line',
data: [123792,129956,130999,148803,146956,152834,145361,154722,158624,172984,175110,197221,188913,191532,202051]
,index: 2
}
]
}
