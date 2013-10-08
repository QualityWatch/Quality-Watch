{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers feeling involved vary by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Yorkshire and the Humber','South East','North West','South West','Eastern','England','West Midlands','East Midlands','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of carers who always <br> or usually felt they had been involved <br> or consulted in discussions about <br> the services and support the person <br> they care for receives (2012/13)', offset: 123}
, max: 85
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012/13',
type: 'column',
data: [79.3,76.3,73.9,73.8,73.7,73.5,{color:'#E10E49',y:72.8},71.2,70,65.9]
,index: 1
}
]
}
