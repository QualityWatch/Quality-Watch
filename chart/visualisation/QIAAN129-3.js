/* Created by ianb on 29/05/2014 15:06:10 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of NHS knee replacement operation vary by deprivation?'},
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
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [153,157.9,151.3,157.7,155.8,150,149,146.6,139,131.3]
,index: 1
}
]
}
