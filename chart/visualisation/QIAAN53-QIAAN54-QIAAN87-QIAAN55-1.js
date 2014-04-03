/* Created by EFisher on 26/03/2014 16:43:39 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have outpatients\' experiences changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009','2011']
, labels: {
}
},
yAxis: {
title: {text:'Average weighted score of experience <br> of outpatient services (Score out <br> of 100)', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Average score',
type: 'column',
data: [78.6,79.5]
,index: 1
}
]
}
