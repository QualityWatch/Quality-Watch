/* Created by ianb on 16/12/2014 11:18:19 using v2.3 */{
title: {text:'Emergency admissions for children with lower respiratory tract infections '},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have emergency admissions for children with lower respiratory tract infections changed over time?'},
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
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'line',
data: [379,356,399.6]
,index: 1
}
]
}
