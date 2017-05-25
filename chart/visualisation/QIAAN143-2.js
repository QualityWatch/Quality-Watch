/* Created by rreed on 25/05/2017 13:38:26 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the rate of hospital admissions for asthma for under 19 year olds changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Crute Rate per 100,000 (Age 0-18)'}
, min: 0
, labels: {
}},
series:[
{
name: 'Crude rate per 100,000',
type: 'column',
data: [193.9,221.5,197.2,216.1,202.4]
,index: 1
}
]
}
