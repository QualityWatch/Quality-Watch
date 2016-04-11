/* Created by NCODowd on 01/04/2016 16:43:06 using v2.7 *//* Created by EFisher on 01/10/2015 09:48:47 using v2.7 */
    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,' ',2010,2011,' ',2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> experiencing physical violence from <br> other staff in previous 12 months(%)', offset: 99}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'England',
type: 'line',
data: [0.864,1.057,1.105,1.225,2.097,1.386,null,1.176,1.088,null,2.83,2.547,2.325,1.717]
},
    {name: 'Eng err',
     type: 'errorbar',
     data:[
     [0.834,0.895],
[1.057,1.057],
[1.105,1.105],
[1.225,1.225],
[2.097,2.097],
[1.344,1.428],
null,
[1.135,1.217],
[1.047,1.128],
null,
[2.736,2.923],
[2.547,2.547],
[2.238,2.413],
[1.649,1.785]

     ]
},
{
name: 'Acute',
type: 'line',
data: [1.196,1.354,1.233,1.446,2.431,1.588,null,1.383,1.236,null,2.615,2.441,2.582,1.957]
},
    {name: 'Ac err',
     type: 'errorbar',
     data:[
[1.165,1.227],
[1.323,1.386],
[1.188,1.279],
[1.409,1.484],
[2.379,2.484],
[1.552,1.624],
         null,
[1.346,1.419],
[1.199,1.272],
         null,
[2.553,2.677],
[2.385,2.498],
[2.52,2.644]
     ]
},
{
name: 'Ambulance',
type: 'line',
data: [1.655,1.968,1.891,1.762,2.854,2.5,null,1.534,1.904,null,2.871,2.919,2.312,2.535]
},
    {name: 'Amb err',
     type: 'errorbar',
     data:[
[1.61,1.7],
[1.931,2.004],
[1.85,1.931],
[1.719,1.806],
[2.787,2.921],
[2.458,2.542],
null,
[1.489,1.58],
[1.83,1.977],
null,
[2.776,2.965],
[2.875,2.963],
[2.239,2.384],
[2.464,2.606]
     ]
},
{
name: 'Mental Health & Learning Disability',
type: 'line',
data: [1.021,1.303,1.077,1.335,2.521,1.718,null,1.532,1.392,null,4.174,3.773,3.47,2.491]
},
    {name: 'MH err',
     type: 'errorbar',
     data:[
[0.992,1.051],
[1.268,1.337],
[1.045,1.108],
[1.299,1.372],
[2.463,2.58],
[1.676,1.76],
null,
[1.49,1.575],
[1.354,1.431],
null,
[4.058,4.29],
[3.676,3.869],
[3.366,3.574],
[2.422,2.56]
     ]
},
{
name: 'Community',
type: 'line',
data: [null,null,null,null,null,null,null,null,0.897,null,1.381,1.441,1.376,0.961]
},
    {name: 'Com err',
     type: 'errorbar',
     data:[null,
null,
null,
null,
null,
null,
null,
null,
[0.863,0.931],
null,
[1.327,1.435],
[1.401,1.48],
[1.333,1.418],
[0.905,1.018]             
     ]
}
]
}