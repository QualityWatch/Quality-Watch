/* Created by ianb on 16/12/2014 11:16:29 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol related deaths changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of alcohol related deaths <br> in England', offset: 87}
, labels: {
}},
series:[
{
name: 'Total deaths',
type: 'line',
data: [3157,3109,3127,3403,3786,3987,4435,4768,4942,5039,5479,5592,5984,6036,6197,6517,6544,6771,6582,6669,6775,6495]
,index: 1
}
]
}
