/* Created by NCODowd on 27/04/2016 10:33:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Rates of newly diagnosed STIs in England'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Rate per 100,000 population'}
, max: 200
, min: 0
, labels: {
}},
series:[
{
name: 'Genital Herpes',
type: 'line',
data: [34.34,37.78,45.71,50.36,52.58,56.41,58.66,59.57,60.05,58.99]
,index: 1
},
{
name: 'Syphilis',
type: 'line',
data: [6.3,6.11,6.24,5.55,5.45,5.03,5.51,5.53,6.01,8.01]
,index: 2
},
{
name: 'Gonorrhoea',
type: 'line',
data: [34.84,33.73,33.32,28.92,30.93,32,39.71,47.81,54.62,64.9]
,index: 3
},
{
name: 'Genital Warts',
type: 'line',
data: [134.08,136.76,146.5,150.83,149.18,143.62,144.14,138.13,137.14,131.09]
,index: 4
},
{
name: 'Chlamydia',
type: 'line',
data: [null,null,null,null,null,null,null,182.12,189.9,198.39]
,index: 5
}
]
}
