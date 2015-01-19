/* Created by ianb on 16/12/2014 11:17:56 using v2.3 */
{
credits: {enabled: false},
title: {text: ''},
exporting: {chartOptions: {
title: {text: 'How has the rate of hospital admissions for asthma in under 19 year olds changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Crute Rate per 100,000 (Age 0-18)'}
, min: 0
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Hospital admissions for asthma in under 19s',
type: 'line',
data: [193.9,221.4]
,index: 1
}
]
}
