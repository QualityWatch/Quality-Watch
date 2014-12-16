/* Created by ianb on 16/12/2014 11:18:13 using v2.3 */{
title: {text:'A&E Attendances (0-4)'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have A&E attendances changed for children aged 0 to 4?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12']
, labels: {
}
},
yAxis: {
title: {text:'Crute rate per 1,000'}
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'line',
data: [483.9,510.8]
,index: 1
}
]
}
