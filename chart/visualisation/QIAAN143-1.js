/* Created by ianb on 16/12/2014 11:17:50 using v2.3 */
{
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What is the trend for asthma, diabetes and epilepsy unplanned emergency admissions for the under 19s?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Directly standardised rate per 100,000 <br> (0-18)', offset: 87}
, max: 400
, min: 50
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Unplanned hospitalisation for asthma, diabetes and epilepsy in under 19s',
type: 'line',
data: [335.9,312.1,336.9]
,index: 1
}
]
}
