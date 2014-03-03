/* Created by EFisher on 25/02/2014 18:17:57 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the frequency of MRSA infections changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'MRSA counts'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'MRSA counts',
type: 'line',
data: [4451,2935,1898,1481,1116,924]
,index: 1
}
]
}
