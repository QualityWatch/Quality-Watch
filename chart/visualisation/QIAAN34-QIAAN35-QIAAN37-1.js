{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How frequently do staff report working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they worked extra <br> hours (paid and un-paid) (%)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [76.3,71.4,71.2,70.1,66.3,66.2,65.1,65.3,65.2,70.3,70.9]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [75.916,76.747],
[70.934,71.877],
[71.184,71.184],
[70.058,70.058],
[66.304,66.304],
[66.208,66.208],
[64.436,65.687],
[64.685,65.976],
[64.48,65.891],
[69.606,70.957],
[70.268,71.575]
     ]},
{
name: 'Acute',
type: 'column',
data: [75.2,71.5,71.7,70.4,67.6,67.4,65.7,65.4,64.9,69.5,70.1]
},
    {name: 'Acute err',
     type: 'errorbar',
     data: [
         [74.792,75.58],
[71.148,71.844],
[71.351,72.106],
[69.938,70.954],
[67.162,68.111],
[66.946,67.896],
[65.186,66.214],
[64.942,65.942],
[64.4,65.4],
[68.992,70.078],
[69.523,70.648]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [85.5,84.3,83.8,83.2,81.7,80.6,79.7,79.6,80.5,83.8,83.3]
},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
         [84.989,86.106],
[83.895,84.622],
[83.478,84.121],
[82.745,83.68],
[81.255,82.195],
[79.939,81.36],
[79.076,80.248],
[79.107,80.103],
[80.115,80.933],
[83.233,84.36],
[82.467,84.037]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [73.9,69.4,69.6,68.4,64.1,64.1,63.3,64.8,64.8,69.6,70.8]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [73.554,74.314],
[68.969,69.844],
[69.29,69.995],
[67.831,69.008],
[63.41,64.713],
[63.454,64.768],
[62.683,63.911],
[64.167,65.362],
[64.176,65.361],
[68.928,70.207],
[70.284,71.4]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,65.3,70.4,70.9]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [
         null,
null,
null,
null,
null,
null,
null,
null,
[64.72,65.954],
[69.776,70.994],
[70.316,71.516]
     ]}
]
}
