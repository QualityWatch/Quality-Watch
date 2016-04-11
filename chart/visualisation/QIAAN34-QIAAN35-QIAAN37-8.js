/* Created by NCODowd on 01/04/2016 12:06:41 using v2.7 *//* Created by NCODowd on 01/04/2016 11:17:35 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about work pressures?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,'Question change',2015]
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
data: [3.215,3.23,3.095,3.156,3.169,3.085,3.07,3.055,3.077,3.055,3.039,3.023,null,3.356]
},
    { name: 'Eng err',
     type: 'errorbar',
     data: [
         [3.207,3.222],
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
[3.012,3.035],null,
[3.345,3.367]
     ]},
{
name: 'Acute',
type: 'column',
data: [3.216,3.228,3.11,3.155,3.2,3.119,3.094,3.09,3.108,3.054,3.04,3.056,null,3.321]
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
[3.048,3.063],null,
[3.313,3.329]        
     ]},
{
name: 'Ambulance',
type: 'column',
data: [3.019,3.043,3.057,3.083,3.175,3.109,3.137,3.097,3.18,3.193,3.252,3.306,null,3.063]
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
[3.296,3.316],null,
[3.055,3.071]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.165,3.172,3.057,3.12,3.079,3.035,3.027,3.026,3.075,3.026,3.058,3.064,null,3.317]
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
[3.057,3.071],null,
[3.31,3.324]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,null,null,null,null,null,null,3.135,3.118,3.132,3.113,null,3.268]
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
[3.106,3.119],null,
[3.262,3.274]
     ]}
]
}