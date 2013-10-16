/* Created by ianb on 14/10/2013 11:39:46 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting feeling pressure to attend <br> work when feeling unwell in last <br> 3 months ± SEM', offset: 111}
, max: 40
, labels: {
}},
series:[
{
name: 'percentage of staff',
type: 'column',
data: [21.52,22.26,22.52,27.01]
,index: 1
}
]
}
