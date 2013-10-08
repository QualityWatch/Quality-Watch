{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do overall number of medication safety incidents reported change by sector?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},xAxis: {
title: {text:''}
, categories: ['Oct 09 - Mar 10','Apr 11 - Sep 11','Oct 11 - Mar 12']
, labels: {
}
},
yAxis: {
title: {text:'Acute rate of incidents reported <br> per 10,000 admissions', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Acute rate',
type: 'column',
data: [62.69,75.06,74.73]
,index: 1
}
]
}
