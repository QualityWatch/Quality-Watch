{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell (%)', offset: 111}
, max: 100
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [21.5,22.3,22.5,27,25.4]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [20.996,22.036],
[21.722,22.794],
[21.908,23.125],
[26.363,27.658],
[24.52,26.19]
     ]},
{
name: 'Acute',
type: 'column',
data: [25.4,25.9,25.9,28.5,27.4]
},
        {name: 'Ac err',
     type: 'errorbar',
     data: [
         [25.081,25.723],
[25.541,26.283],
[25.492,26.296],
[27.994,28.921],
[26.993,27.897]
     ]},

{
name: 'Ambulance',
type: 'column',
data: [30.5,32.2,34.7,38.1,39.8]
},
        {name: 'Amb err',
     type: 'errorbar',
     data: [
         [29.936,31.02],
[31.501,32.992],
[34.049,35.334],
[37.438,38.726],
[38.713,40.962]
     ]},

{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [18.5,19.2,19.7,22.1,21.7]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [18.046,18.926],
[18.697,19.658],
[19.293,20.126],
[21.578,22.604],
[21.298,22.114]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,21.8,26.2,24.4]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [
         null,
null,
[21.47,22.15],
[25.794,26.523],
[24.026,24.81]
     ]}
]
}