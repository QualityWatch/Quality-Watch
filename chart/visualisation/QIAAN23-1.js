/* Created by ianb on 14/10/2013 11:39:09 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of NHS staff <br> reporting experiencing physical <br> violence from other staff', offset: 99}
, labels: {
}},
series:[
{
name: 'Manager/supervisor',
type: 'line',
data: [0.45,0.37,0.47,0.54,0.5,1.02,0.61,null,null,null]
,index: 1
},
{
name: 'Colleagues',
type: 'line',
data: [0.81,0.7,0.81,0.83,0.99,1.58,1.08,null,null,null]
,index: 2
},
{
name: 'Manager / team leader or other colleagues',
type: 'column',
data: [null,null,null,null,null,null,null,1.17,1.08,null]
,index: 1
},
{
name: 'Manager / team leader or other colleagues',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,2.83]
,index: 2
}
]
}
