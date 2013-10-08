{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How satisfied were patients with their experiences of maternity services?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010]
},
yAxis: {
title: {text:'Average weighted score of experience <br> of maternity services (Score out <br> of 100)', offset: 70}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
type: 'column',
name: 'Average score',
data: [77]
}
]
}
