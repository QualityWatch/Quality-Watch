/* Created by RREED on 30/05/2017 16:43:06 using v2.7 */
        {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about violence they experience from colleagues and managers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,'Method change',2010,2011,'Method change',2012,2013,2014,2015,2016]
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
data: [0.86,1.06,1.10,1.22,2.10,1.39,null,1.18,1.09,null,2.83,2.55,2.33,1.72,1.80]
},
{
name: 'Acute',
type: 'line',
data: [1.20,1.35,1.23,1.45,2.43,1.59,null,1.38,1.24,null,2.61,2.44,2.58,1.96,1.90]
},
{
name: 'Ambulance',
type: 'line',
data: [1.65,1.97,1.89,1.76,2.85,2.50,null,1.53,1.90,null,2.87,2.92,2.31,2.54,1.80]
},
{
name: 'Mental Health & Learning Disability',
type: 'line',
data: [1.02,1.30,1.08,1.34,2.52,1.72,null,1.53,1.39,null,4.17,3.77,3.47,2.49,2.50]
},
{
name: 'Community',
type: 'line',
data: [null,null,null,null,null,null,null,null,0.90,null,1.38,1.44,1.38,0.96,0.90]
},
]
}
