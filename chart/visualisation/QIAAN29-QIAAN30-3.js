{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers finding easy to access information vary by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','Yorkshire and the Humber','South West','West Midlands','North West','England','East Midlands','South East','Eastern','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of carers who found it <br> very or fairly easy to find information <br> and advice about support, services <br> or benefits (2012/13)', offset: 111}
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
data: [74.7,72.3,71,70.4,70,{color:'#E10E49',y:69},67.6,67.5,65.9,63.8]
,index: 1
}
]
}
