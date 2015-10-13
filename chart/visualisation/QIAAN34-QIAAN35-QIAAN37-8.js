/* Created by EFisher on 01/10/2015 10:33:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about work pressures?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
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
data: [3.21,3.23,3.1,3.16,3.17,3.09,3.07,3.06,3.08,3.05,3.04,3.02]
},
    { name: 'Eng err',
     type: 'errorbar',
     data: [
         [3.2,3.229],
[3.225,3.235],
[3.095,3.095],
[3.156,3.156],
[3.169,3.169],
[3.085,3.085],
[3.064,3.076],
[3.049,3.062],
[3.07,3.085],
[3.046,3.063],
[3.029,3.048],
[3.012,3.035]
     ]},
{
name: 'Acute',
type: 'column',
data: [3.22,3.23,3.11,3.16,3.2,3.12,3.09,3.09,3.11,3.05,3.04,3.06]
},
    { name: 'Ac err',
     type: 'errorbar',
     data: [
[3.21,3.222],
[3.225,3.232],
[3.106,3.114],
[3.15,3.161],
[3.194,3.206],
[3.113,3.124],
[3.088,3.099],
[3.084,3.096],
[3.102,3.114],
[3.046,3.062],
[3.032,3.047],
[3.048,3.063]         
     ]},
{
name: 'Ambulance',
type: 'column',
data: [3.02,3.04,3.06,3.08,3.17,3.11,3.14,3.1,3.18,3.19,3.25,3.31]
},
    { name: 'Amb err',
     type: 'errorbar',
     data: [
         [3.014,3.024],
[3.039,3.048],
[3.052,3.063],
[3.078,3.088],
[3.168,3.181],
[3.101,3.117],
[3.13,3.145],
[3.089,3.105],
[3.172,3.187],
[3.185,3.201],
[3.241,3.263],
[3.296,3.316]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.17,3.17,3.06,3.12,3.08,3.04,3.03,3.03,3.07,3.03,3.06,3.06]
},
        { name: 'MH err',
     type: 'errorbar',
     data: [
         [3.159,3.171],
[3.168,3.176],
[3.052,3.061],
[3.114,3.125],
[3.074,3.084],
[3.03,3.04],
[3.021,3.033],
[3.021,3.032],
[3.069,3.08],
[3.019,3.033],
[3.052,3.065],
[3.057,3.071]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,3.13,3.12,3.13,3.11]
},
        { name: 'Com err',
     type: 'errorbar',
     data: [null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            [3.129,3.141],
            [3.11,3.126],
            [3.125,3.139],
[3.106,3.119]
     ]}
]
}