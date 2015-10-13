/* Created by EFisher on 01/10/2015 12:03:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013,2014]
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
data: [21.52,22.26,22.52,27.01,25.35,22.98]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
        [21.251,21.782],
[21.984,22.532],
[22.206,22.827],
[26.68,27.341],
[24.929,25.781],
[22.561,23.393]
     ]},
{
name: 'Acute',
type: 'column',
data: [25.4,25.91,25.89,28.46,27.45,25.91]
},
        {name: 'Ac err',
     type: 'errorbar',
     data: [
        [25.238,25.566],
[25.723,26.101],
[25.689,26.099],
[28.221,28.694],
[27.222,27.669],
[25.692,26.127]
     ]},

{
name: 'Ambulance',
type: 'column',
data: [30.48,32.25,34.69,38.08,39.84,37.41]
},
        {name: 'Amb err',
     type: 'errorbar',
     data: [
         [30.202,30.754],
[31.866,32.627],
[34.364,35.019],
[37.753,38.41],
[39.281,40.394],
[37.074,37.739]
     ]},

{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [18.49,19.18,19.71,22.09,21.71,20.38]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [18.262,18.71],
[18.932,19.423],
[19.497,19.922],
[21.829,22.352],
[21.504,21.908],
[20.192,20.574]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,21.81,26.16,24.42,22.11]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [null,null,[21.637,21.983],[25.972,26.345],[24.224,24.612],
[21.974,22.241]
     ]}
]
}