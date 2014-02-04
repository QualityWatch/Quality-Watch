/* Created by EFisher on 24/01/2014 16:54:08 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about support from their managers and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted average (mean) staff <br> rating the support from immediate <br> manager ', offset: 99}
, max: 5
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Key Finding 9: Support from immediate manager',
type: 'column',
data: [3.6,3.6,3.7,3.7,3.7,3.6]
,index: 1
}
]
}
