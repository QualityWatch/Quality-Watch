/* Created by ianb on 16/12/2014 11:16:41 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has alcohol related admissions to hospital changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
}
},
yAxis: {
title: {text:'Directly standardised rate of alcohol <br> related admissions tohospital  per <br> 100,000', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Male',
type: 'line',
data: [805.6,833.4,848.3,848.6,829.4]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [446.2,464.9,477.9,479.1,464.9]
,index: 2
},
{
name: 'All',
type: 'line',
data: [614.6,638.1,651.9,652.8,636.9]
,index: 3
}
]
}
