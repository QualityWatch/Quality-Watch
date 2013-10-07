/* Created by ianb on 07/10/2013 13:29:26 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have patients\' experiences with A&E services changed over time?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008','2012']
, labels: {
}
},
yAxis: {
title: {text:'Average weighted score of experience <br> of A&E services (Score out of 100)', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Average score',
type: 'column',
data: [80,79.1]
,index: 1
}
]
}

