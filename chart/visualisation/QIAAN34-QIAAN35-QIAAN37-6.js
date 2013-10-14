/* Created by ianb on 14/10/2013 11:39:47 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about being ill with work related stress and how has this changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress ± SEM', offset: 99}
, max: 50
, labels: {
}},
series:[
{
name: 'Key finding 11: Staff suffering work-related stress in last 12 months',
type: 'column',
data: [35.1,34.47,32.45,32.71,28.06,28.31,29.11,30.05,38.16]
,index: 1
}
]
}
