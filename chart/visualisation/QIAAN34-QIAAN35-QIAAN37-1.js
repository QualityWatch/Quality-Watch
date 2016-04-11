/* Created by NCODowd on 01/04/2016 14:09:24 using v2.7 *//* Created by EFisher on 01/10/2015 10:59:47 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How frequently do staff report working extra hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]

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
data: [76.332,71.406,71.184,70.058,66.304,66.208,65.061,65.331,65.186,70.282,70.922,71.567,73.259]

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
[71.211,71.924],
[72.917,73.601]
     ]},
{
name: 'Acute',
type: 'column',
data: [75.186,71.496,71.729,70.446,67.637,67.421,65.7,65.442,64.9,69.535,70.086,70.956,72.086]
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
[70.703,71.208],
[71.82,72.352]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [85.548,83.78,83.161,83.212,81.725,80.65,79.662,79.605,80.524,83.796,83.252,84.253,83.457]
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
[84.037,84.47],
[83.043,83.872]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [74.024,69.406,69.732,68.508,64.125,64.111,63.297,64.764,64.768,69.567,70.842,71.243,72.802]
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
[70.942,71.543],
[72.506,73.098]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,65.337,70.385,70.916,70.349,73.462]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [null,
null,
null,
null,
null,
null,
null,
null,
[65.022,65.652],
[70.075,70.696],
[70.619,71.213],
[70.054,70.644],
[73.224,73.7]
     ]}
]
}