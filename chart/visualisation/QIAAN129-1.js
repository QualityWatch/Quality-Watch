/* Created by ianb on 29/05/2014 15:05:59 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of NHS hip replacement operation vary by deprivation?'},
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
, max: 180
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [134.3,134.7,146.7,155.1,165,166,168.1,165.5,171.7,164.6]
,index: 1
}
]
}
