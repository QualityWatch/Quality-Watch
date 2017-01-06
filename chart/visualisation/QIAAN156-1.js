/* Created by rreed on 05/01/2017 15:06:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Rates of newly diagnosed STIs in England'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Rates of new STI diagnoses in England <br> (per 100,000 population)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Genital Herpes',
type: 'line',
data: [37.8,45.7,50.4,52.6,56.4,58.7,60.9,62.3,61.4,61.2]
,index: 1
},
{
name: 'Syphilis',
type: 'line',
data: [6.1,6.2,5.5,5.5,5,5.5,5.6,6.2,8.1,9.7]
,index: 2
},
{
name: 'Gonorrhoea',
type: 'line',
data: [33.7,33.3,28.9,30.9,32,39.7,50.2,57.8,68.3,75.8]
,index: 3
},
{
name: 'Genital Warts',
type: 'line',
data: [136.8,146.5,150.8,149.2,143.6,144.1,141.1,141.7,134.6,125.8]
,index: 4
}
]
}
