{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of out-of hours GP services?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan - Sept 2013']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that their overall experience of <br>  out-of hours GP services were good', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [70.9,70.2,{y: 67.5, color: '#3FCFD5'}]
},
    {name: 'Error', type: 'errorbar', data: [
[70.52,71.21],
[69.85,70.57],
[67.14,67.91]
    
    ]}
]
}
