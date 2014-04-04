  {
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does people with learning disabilities living in their own home vary across England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North West','North East','Yorkshire and the Humber','England','Eastern','East Midlands','South East','South West','London','West Midlands']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults with learning <br> disabilities who live in their own <br> home or with their family (%)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: '2012-13',
type: 'column',
    data: [85.3,79,77.9,{y:73.5, color: '#E10E49'},73.1,72.3,71.1,69.1,68.1,66]
,index: 1
}
]
}