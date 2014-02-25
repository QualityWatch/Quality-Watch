/* Created by Ian on 14/02/2014 11:20:56 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting feeling pressure to attend <br> work when feeling unwell in last <br> 3 months plus or minus SEM', offset: 111}
, max: 40
, labels: {
}},
series:[
{
name: 'percentage of staff',
type: 'column',
data: [21.52,22.26,22.52,27.01]
,index: 1
},  {
name: 'Error',
type: 'errorbar',
data: [[21.25,21.78],
[21.98,22.53],
[22.21,22.83],
[26.68,27.34]
]
}

]
}
