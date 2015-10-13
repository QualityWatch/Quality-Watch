/* Created by EFisher on 12/10/2015 14:33:24 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the trend for asthma, diabetes and epilepsy unplanned emergency admissions for the under 19s?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Indirectly standardised rate per <br> 100,000 ', offset: 87}
, labels: {
}},
series:[
{
name: 'Series1',
type: 'line',
data: [345.9,377.2,354.7,389.1,347.4,366.3,354.6,347,319,340.6,313.4]
,index: 1
}
]
}
