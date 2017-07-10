/* Created by rreed on 06/07/2017 08:47:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many discharges from hospital result in emergency admissions within 30 days?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Indirectly standardised percentage <br> of emergency admissions occurring <br> within 30 days of the last, previous <br> discharge after admission.', offset: 111}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [9.5,9.8,10.3,10.7,10.8,11,11.3,11.6,11.8,11.8]
,index: 1
}
]
}
