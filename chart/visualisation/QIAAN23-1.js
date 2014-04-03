    {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,'',2010,2011,'',2012,2013]
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
data: [0.86,1.06,1.1,1.22,2.1,1.39,null,1.17,1.08,null,2.83,2.55]
},
    {name: 'Eng err',
     type: 'errorbar',
     data:[
     [0.804,0.924],
[0.993,1.121],
[1.021,1.188],
[1.15,1.3],
[1.989,2.204],
[1.304,1.468],
         null,
[1.094,1.255],
[1.005,1.165],
         null,
[2.647,3.013],
[2.547,2.547]
     ]
},
{
name: 'Acute',
type: 'line',
data: [1.2,1.35,1.23,1.45,2.43,1.59,null,1.38,1.24,null,2.61,2.44]
},
    {name: 'Ac err',
     type: 'errorbar',
     data:[
[1.136,1.256],
[1.292,1.417],
[1.144,1.323],
[1.372,1.521],
[2.329,2.534],
[1.518,1.658],
         null,
[1.312,1.453],
[1.164,1.308],
         null,
[2.493,2.736],
[2.331,2.552]
     ]
},
{
name: 'Ambulance',
type: 'line',
data: [1.65,1.97,1.89,1.76,2.85,2.5,null,1.53,1.9,null,2.87,2.92]
},
    {name: 'Amb err',
     type: 'errorbar',
     data:[
[1.566,1.744],
[1.896,2.039],
[1.812,1.97],
[1.677,1.847],
[2.723,2.985],
[2.418,2.582],
         null,
[1.445,1.623],
[1.76,2.047],
         null,
[2.685,3.056],
[2.832,3.005]

     ]
},
{
name: 'Mental Health & Learning Disability',
type: 'line',
data: [1.02,1.3,1.08,1.34,2.52,1.72,null,1.53,1.39,null,4.17,3.77]
},
    {name: 'MH err',
     type: 'errorbar',
     data:[
[0.964,1.079],
[1.235,1.37],
[1.014,1.139],
[1.265,1.406],
[2.406,2.637],
[1.636,1.8],
         null,
[1.449,1.615],
[1.317,1.468],
         null,
[3.946,4.402],
[3.583,3.962]
     ]
},
{
name: 'Community',
type: 'line',
data: [null,null,null,null,null,null,null,null,0.9,null,1.38,1.44]
},
    {name: 'Com err',
     type: 'errorbar',
     data:[null,null,null,null,null,null,null,null,
[0.831,0.964],
           null,
[1.276,1.486],
[1.362,1.519]
     ]
}
]
}
