/* Created by ianb on 14/10/2013 11:39:46 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about working extra hours and how has this changed?'},
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
}
]
}
