/* Created by JMorris on 15/02/2018 14:47:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Rates of new STI diagnoses in England'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
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
data: [37.8,45.7,50.4,52.6,56.4,58.7,60.9,62.3,61.4,60.7,58.2]
,index: 1
},
{
name: 'Syphilis',
type: 'line',
data: [6.1,6.2,5.5,5.5,5,5.5,5.6,6.2,8.1,9.6,10.8]
,index: 2
},
{
name: 'Gonorrhoea',
type: 'line',
data: [33.7,33.3,28.9,30.9,32,39.7,50.2,57.8,68.3,75.3,66.2]
,index: 3
},
{
name: 'Genital Warts',
type: 'line',
data: [136.8,146.5,150.8,149.2,143.6,144.1,141.1,141.7,134.6,124.9,114.5]
,index: 4
}
]
}
