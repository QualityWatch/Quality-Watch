{

title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Would patients recommend their GP surgery to someone who has just moved to the local area?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','July 2013 - March 2014']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that they would recommend their <br> GP surgery', offset: 99}
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
    data: [81.9,79.9,{y:78.7, color: '#3FCFD5'}]
},
    {name: 'Error', type: 'errorbar', data: [
[81.82,82.02],
[79.82,80.04],
[78.54,78.77]
    
    ]}
]
}