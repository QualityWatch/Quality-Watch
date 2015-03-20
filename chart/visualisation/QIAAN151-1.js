/* Created by ianb on 20/03/2015 10:58:03 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of babies admitted to a neonatal unit soon after birth vary over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Full-term neonatal episodes rate <br> per 100 full-term live births', offset: 87}
, min: 0
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [5.1,6,6.1]
,index: 1
}
]
}
