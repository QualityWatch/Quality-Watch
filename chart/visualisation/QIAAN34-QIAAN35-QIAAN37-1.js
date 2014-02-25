/* Created by Ian on 14/02/2014 10:59:19 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How frequently do staff report working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they worked extra <br> hours (paid and un-paid) plus or minus SEM', offset: 99}
, max: 100
, min: 0
, labels: {
}},
series:[
{
name: 'Key finding 5: Staff working extra hours',
type: 'column',
data: [76.33,71.41,71.18,70.06,66.3,66.21,65.06,65.33,65.19,70.28]
,index: 1
},
    {
name: 'Error',
type: 'errorbar',
data: [[76.12,76.54],
[71.17,71.65],
[71.18,71.18],
[70.06,70.06],
[66.3,66.3],
[66.21,66.21],
[64.74,65.38],
[65,65.66],
[64.83,65.55],
[69.94,70.63]
]
}
]
}
