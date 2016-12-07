/* Created by EFisher on 26/10/2015 10:04:00 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the frequency of MRSA infections changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Annual counts of MRSA'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'total',
type: 'line',
data: [4451,2935,1898,1481,1116,924,862,800,819]
,index: 1
},
{
name: 'trust apportioned',
type: 'line',
data: [null,1606,1004,688,473,398,364,285,297]
,index: 2
}
]
}
