/* Created by RREED on 30/05/2017 10:41:03 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Staff satisfaction with the quality of work and care they are able to deliver'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2008,2009,2010,2011,2012,2013,2014,2015,2016]

, labels: {
    rotation: - 45
}
},
yAxis: {
title: {text:'Staff personally pleased with<br>the standard and quality of<br>care they provide (%)', offset: 99}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [60.41,73.60,73.19,71.48,77.38,77.58,76.66]
},
{name: 'Acute',
type: 'column',
data: [62.09,74.01,74.54,74.70,78.09,78.87,78.43]
},
{name: 'Ambulance',
type: 'column',
data: [66.89,75.59,76.21,74.83,75.26,72.8,72.61]
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [59.48,74.58,74.44,73.10,76.91,76.03,75.34]
},    
{
name: 'Community',
type: 'column',
data: [null,null,null,72.73,75.72,74.44,75.51]
},
]
}
