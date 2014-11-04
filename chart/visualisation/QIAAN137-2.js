/* Created by ianb on 04/11/2014 13:15:49 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has penicillin prescribing changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Broad-Spectrum Penicillins',
type: 'line',
data: [15.3,14.4,14.9,14.6,15.6,15.4,15,15.7,15.6,16.7,15.4]
,index: 1
},
{
name: 'Penicillinase-Resistant Penicillins',
type: 'line',
data: [3.3,3.3,3.3,3.5,3.5,3.6,3.8,4,4.1,4.3,4.3]
,index: 2
},
{
name: 'Benzylpenicillin&Phenoxymethylpenicillin',
type: 'line',
data: [2.6,2.4,2.4,2.5,2.6,2.5,2.5,2.5,2.5,2.6,2.4]
,index: 3
},
{
name: 'Mecillinams',
type: 'line',
data: [0,0,0,0,0,0,0,0,0,0,0]
,index: 4
}
]
}
