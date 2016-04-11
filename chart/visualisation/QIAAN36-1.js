/* Created by EFisher on 31/03/2016 14:17:28 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about support from their managers and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted average (mean score)<br> staff rating the support from immediate <br> manager ', offset: 99}
, max: 5
, labels: {
}},
series:[
{
name: 'England',
type: 'column',
data: [3.63,3.64,3.67,3.69,3.68,3.65,3.69,3.74,3.79]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
 [3.63,3.63],
[3.64,3.64],
[3.67,3.68],
[3.68,3.7],
[3.67,3.69],
[3.64,3.65],
[3.68,3.71],
[3.72,3.75],
[3.78,3.81]
     ]},
{
name: 'Acute',
type: 'column',
data: [3.57,3.57,3.61,3.61,3.62,3.61,3.65,3.66,3.72]
},
        {name: 'Ac err',
     type: 'errorbar',
     data: [
         [3.56,3.57],
[3.57,3.57],
[3.6,3.61],
[3.61,3.62],
[3.61,3.62],
[3.6,3.62],
[3.64,3.65],
[3.65,3.67],
[3.71,3.72]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [3.12,3.17,3.19,3.25,3.24,3.26,3.24,3.29,3.41]
},
        {name: 'Amb err',
     type: 'errorbar',
     data: [
         [3.11,3.13],
[3.16,3.18],
[3.18,3.19],
[3.24,3.25],
[3.24,3.25],
[3.25,3.27],
[3.23,3.25],
[3.28,3.31],
[3.4,3.41]
     ]},
{
name: 'Mental Health & Learning <br>Disability',
type: 'column',
data: [3.74,3.73,3.77,3.8,3.79,3.78,3.81,3.81,3.85]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
[3.73,3.74],
[3.73,3.74],
[3.77,3.78],
[3.79,3.8],
[3.79,3.8],
[3.77,3.78],
[3.8,3.81],
[3.81,3.82],
[3.85,3.86]
     ]},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,3.73,3.7,3.71,3.76,3.8]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [
         [null,null],
[null,null],
[null,null],
[null,null],
[3.72,3.73],
[3.69,3.71],
[3.71,3.72],
[3.75,3.76],
[3.79,3.8]
         
     ]},
]
}