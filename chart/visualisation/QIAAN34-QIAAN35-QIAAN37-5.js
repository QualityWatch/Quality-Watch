/* Created by ianb on 14/10/2013 11:39:47 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of staff feeling pressured to work when unwell changed by sector?'},
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
, min: 0
, labels: {
}},
series:[
{
name: 'Acute',
type: 'column',
data: [25.4,25.91,25.89,28.46]
,index: 1
},
{
name: 'Ambulance',
type: 'column',
data: [30.48,32.25,34.69,38.08]
,index: 2
},
{
name: 'MH&LD',
type: 'column',
data: [18.49,19.18,19.71,22.09]
,index: 3
},
{
name: 'Community trusts',
type: 'column',
data: [0,0,21.81,26.16]
,index: 4
}
]
}
