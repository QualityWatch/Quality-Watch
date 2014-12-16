/* Created by ianb on 16/12/2014 11:17:56 using v2.3 */{
title: {text:'Hospital admissions for asthma in under 19s'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the rate of hospital admissions for under 19 year olds changed?'},
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
, min: 50
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'line',
data: [193.9,221.4]
,index: 1
}
]
}
