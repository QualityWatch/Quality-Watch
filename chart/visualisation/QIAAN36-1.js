{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about support from their managers and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted average (mean score) <br> staff rating the support from immediate <br> manager ', offset: 99}
, max: 5
, labels: {
}},
series:[
{
name: 'England',
type: 'column',
data: [3.63,3.64,3.67,3.69,3.68,3.65,3.69]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
  [3.615,3.643],
[3.622,3.65],
[3.66,3.688],
[3.677,3.706],
[3.667,3.698],
[3.626,3.664],
[3.674,3.716]
     ]},
{
name: 'Acute',
type: 'column',
data: [3.57,3.57,3.61,3.61,3.62,3.61,3.65]
},
        {name: 'Ac err',
     type: 'errorbar',
     data: [
         [3.56,3.576],
[3.561,3.578],
[3.597,3.614],
[3.605,3.623],
[3.606,3.624],
[3.598,3.623],
[3.635,3.658]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [3.12,3.17,3.19,3.25,3.24,3.26,3.24]
},
        {name: 'Amb err',
     type: 'errorbar',
     data: [
         [3.106,3.132],
[3.151,3.186],
[3.175,3.201],
[3.232,3.261],
[3.229,3.26],
[3.24,3.285],
[3.219,3.262]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [3.74,3.73,3.77,3.8,3.79,3.78,3.81]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
[3.726,3.748],
[3.722,3.745],
[3.763,3.786],
[3.786,3.81],
[3.784,3.804],
[3.764,3.787],
[3.797,3.816]
     ]},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,3.73,3.7,3.71]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [
         null,
null,
null,
null,
[3.718,3.733],
[3.687,3.711],
[3.702,3.723]
         
     ]},
]
}
