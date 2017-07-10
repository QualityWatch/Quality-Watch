/* Created by rreed on 06/07/2017 08:50:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol-related admissions to hospital changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly standardised rate of alcohol <br> related admissions to hospital  <br> per 100,000', offset: 99}
, labels: {
}},
series:[
{
name: 'Male',
type: 'line',
data: [793,821,836,839,820,827,818,830]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [440,459,472,474,460,472,471,483]
,index: 2
},
{
name: 'All persons',
type: 'line',
data: [606,629,643,645,630,640,635,647]
,index: 3
}
]
}
