{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about being ill with work related stress and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress plus or minus SEM', offset: 99}
, max: 50
, labels: {
}},
series:[
{
name: 'Key finding 11: Staff suffering work-related stress in last 12 months',
type: 'column',
data: [35.1,34.47,32.45,32.71,28.06,28.31,29.11,30.05,38.16]
}, { name: 'error', type: 'errorbar', data: [ 
[34.75,35.44],
[34.47,34.47],
[32.45,32.45],
[32.71,32.71],
[28.06,28.06],
[27.95,28.68],
[28.72,29.49],
[29.57,30.52],
[37.56,38.76]

 ] }
]
}
