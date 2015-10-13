/* Created by EFisher on 01/10/2015 09:48:47 using v2.7 */    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,'',2010,2011,'',2012,2013,2014]
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
data: [0.86,1.06,1.1,1.22,2.1,1.39,null,1.18,1.09,null,2.83,2.55,2.33]
},
    {name: 'Eng err',
     type: 'errorbar',
     data:[
     [0.834,0.895],
[1.057,1.057],
[1.105,1.105],
[1.225,1.225],
[2.097,2.097],
[1.344,1.428],null,
[1.135,1.217],
[1.047,1.128],null,
[2.736,2.923],
[2.547,2.547],
[2.238,2.413]

     ]
},
{
name: 'Acute',
type: 'line',
data: [1.2,1.35,1.23,1.45,2.43,1.59,null,1.38,1.24,null,2.61,2.44,2.58]
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
data: [1.65,1.97,1.89,1.76,2.85,2.5,null,1.53,1.9,null,2.87,2.92,2.31]
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
[2.239,2.384]

     ]
},
{
name: 'Mental Health & Learning Disability',
type: 'line',
data: [1.02,1.3,1.08,1.34,2.52,1.72,null,1.53,1.39,null,4.17,3.77,3.47]
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
[3.366,3.574]
     ]
},
{
name: 'Community',
type: 'line',
data: [null,null,null,null,null,null,null,null,0.9,null,1.38,1.44,1.38]
},
    {name: 'Com err',
     type: 'errorbar',
     data:[null,null,null,null,null,null,null,null,
[0.863,0.931],
null,
[1.327,1.435],
[1.401,1.48],
[1.333,1.418]
           
     
           
     ]
}
]
}

