/* Created by EFisher on 25/02/2014 18:28:48 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the regional variation in rates of cancelled elective operations in 2012/13?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','South East Coast','South Central','London','Yorkshire and The Humber','North West','South West','West Midlands','East Midlands','East of England']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Rate of cancelled elective operations <br> per 1,000 \'elective\' admissions', offset: 87}
, max: 10
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [4.4,6.4,7.4,8.1,8.2,8.4,9.1,9.6,9.6,9.6]
,index: 1
}
]
}
