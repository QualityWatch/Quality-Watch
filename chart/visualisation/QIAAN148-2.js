/* Created by ianb on 30/01/2015 15:42:09 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of patients with STEMI receiving angiography changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004-5','2005-6','2006-7','2007-8','2008-9','2009-10','2010-11','2011-12','2012-13','2013-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage'}
, labels: {
}},
series:[
{
name: 'Series1',
type: 'column',
data: [31.9,43.4,53.8,54.6,59.3,66.3,68.5,68.7,69.8,72.2]
,index: 1
}
]
}
