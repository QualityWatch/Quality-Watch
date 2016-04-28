/* Created by NCODowd on 27/04/2016 10:33:37 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has alcohol related admissions to hospital changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly standardised rate of alcohol <br> related admissions to hospital  <br> per 100,000', offset: 99}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Male',
type: 'line',
data: [805.6,833.39,848.32,848.58,829.36,835.3]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [446.17,464.91,477.87,479.08,464.87,474.78]
,index: 2
},
{
name: 'All',
type: 'line',
data: [614.63,638.07,651.92,652.81,636.85,645.13]
,index: 3
}
]
}
