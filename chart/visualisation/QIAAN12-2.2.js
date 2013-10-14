{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do overall number of medication safety incidents reported change by sector?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 09 - Mar 10','Apr 11 - Sep 11','Oct 11 - Mar 12']
, labels: {
}
},
yAxis: {
title: {text:'Mental health rate of incidents <br> reported per 10,000 bed days', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Mental health rate',
type: 'column',
data: [13.88,17.97,17.92]
,index: 1
}
]
}
