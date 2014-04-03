{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about work pressures?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted average (mean score) <br> staff rating work pressure felt <br> by staff', offset: 99}
, max: 5
, min: 1
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [3.21,3.23,3.1,3.16,3.17,3.09,3.07,3.06,3.08,3.05,3.04]
},
    { name: 'Eng err',
     type: 'errorbar',
     data: [
         [3.2,3.229],
[3.221,3.24],
[3.095,3.095],
[3.156,3.156],
[3.169,3.169],
[3.085,3.085],
[3.058,3.082],
[3.042,3.069],
[3.063,3.092],
[3.038,3.071],
[3.02,3.058]
     ]},
{
name: 'Acute',
type: 'column',
data: [3.22,3.23,3.11,3.16,3.2,3.12,3.09,3.09,3.11,3.05,3.04]
},
    { name: 'Ac err',
     type: 'errorbar',
     data: [
[3.204,3.227],
[3.221,3.236],
[3.102,3.118],
[3.144,3.166],
[3.188,3.212],
[3.108,3.13],
[3.082,3.105],
[3.078,3.101],
[3.096,3.12],
[3.038,3.07],
[3.024,3.055]         
     ]},
{
name: 'Ambulance',
type: 'column',
data: [3.02,3.04,3.06,3.08,3.17,3.11,3.14,3.1,3.18,3.19,3.25]
},
    { name: 'Amb err',
     type: 'errorbar',
     data: [
         [3.009,3.029],
[3.035,3.052],
[3.046,3.068],
[3.072,3.093],
[3.162,3.188],
[3.093,3.124],
[3.122,3.152],
[3.081,3.112],
[3.165,3.194],
[3.177,3.209],
[3.231,3.274]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.17,3.17,3.06,3.12,3.08,3.04,3.03,3.03,3.07,3.03,3.06]
},
        { name: 'MH err',
     type: 'errorbar',
     data: [
         [3.153,3.177],
[3.164,3.18],
[3.048,3.065],
[3.109,3.13],
[3.07,3.089],
[3.025,3.045],
[3.016,3.039],
[3.016,3.037],
[3.064,3.086],
[3.012,3.04],
[3.046,3.071]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,3.13,3.12,3.13]
},
        { name: 'Com err',
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
[3.124,3.146],
[3.103,3.133],
[3.118,3.145]
     ]}
]
}