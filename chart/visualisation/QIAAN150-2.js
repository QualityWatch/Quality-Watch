/* Created by ianb on 20/03/2015 10:57:31 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do admissions for falls vary by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Least deprived','2nd decile','3rd decile','4th decile','5th decile','6th decile','7th decile','8th decile','9th decile','Most deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'2012/13 monthly rate of admissions <br> per 100,000 people (standardised <br> for age and sex)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'column',
data: [1385.7,1421.1,1486.9,1533.7,1580,1641.8,1756,1940.6,1993.1,2184.8]
,index: 1
}
]
}
