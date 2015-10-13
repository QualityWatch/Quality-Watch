/* Created by EFisher on 01/10/2015 10:59:47 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How frequently do staff report working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]

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
data: [76.33,71.41,71.18,70.06,66.3,66.21,65.06,65.33,65.19,70.28,70.92,71.57]

},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [76.12,76.544],
[71.165,71.646],
[71.184,71.184],
[70.058,70.058],
[66.304,66.304],
[66.208,66.208],
[64.742,65.38],
[65.001,65.66],
[64.826,65.546],
[69.937,70.627],
[70.588,71.255],
[71.211,71.924]
     ]},
{
name: 'Acute',
type: 'column',
data: [75.19,71.5,71.73,70.45,67.64,67.42,65.7,65.44,64.9,69.54,70.09,70.96]
},
    {name: 'Acute err',
     type: 'errorbar',
     data: [
         [74.985,75.387],
[71.318,71.673],
[71.536,71.921],
[70.187,70.705],
[67.395,67.879],
[67.178,67.663],
[65.438,65.963],
[65.187,65.697],
[64.645,65.155],
[69.258,69.812],
[69.808,70.364],
[70.703,71.208]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [85.55,83.78,83.16,83.21,81.72,80.65,79.66,79.6,80.52,83.8,83.25,84.25]
},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
         [85.263,85.833],
[83.567,83.994],
[82.941,83.382],
[82.974,83.451],
[81.485,81.965],
[80.287,81.012],
[79.363,79.961],
[79.351,79.859],
[80.316,80.733],
[83.509,84.084],
[82.864,83.641],
[84.037,84.47]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [74.02,69.41,69.73,68.51,64.13,64.11,63.3,64.76,64.77,69.57,70.84,71.24]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [73.83,74.218],
[69.183,69.63],
[69.552,69.911],
[68.208,68.808],
[63.793,64.457],
[63.776,64.446],
[62.984,63.61],
[64.46,65.069],
[64.466,65.071],
[69.241,69.894],
[70.566,71.118],
[70.942,71.543]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,65.34,70.39,70.92,70.35]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [
         null,null,null,null,null,null,null,null,[65.022,65.652],[70.075,70.696],[70.619,71.213],
[70.054,70.644]
     ]}
]
}