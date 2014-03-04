{
    legend: {enabled: false},
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of their GP surgeries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan - Sept 2013']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that their overall experience of <br> GP surgery was good', offset: 99}
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
    data: [88.3,86.7,{y:86.2, color:'#3FCFD5'}]
},
    {name: 'Error', type: 'errorbar', data: [
[88.19,88.36],
[86.65,86.83],
[86.08,86.28]
    
    ]}
]
}