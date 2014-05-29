/* Created by ianb on 29/05/2014 15:06:22 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of inguinal hernia repair vary by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Most deprived','Decile 2','Decile 3','Decile 4','Decile 5','Decile 6','Decile 7','Decile 8','Decile 9','Least deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Standardised procedure rate per <br> 100,000 population', offset: 87}
, max: 160
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [122.5,124.6,132.5,133.1,134.9,136.2,139.2,135.8,137.8,132.4]
,index: 1
}
]
}
