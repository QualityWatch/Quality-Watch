/* Created by EFisher on 06/10/2015 09:09:59 using v2.7 */{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are GPs open at times that are convenient and are patients satisfied with this?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10', '2010/11', '2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015']
, labels: {
     rotation: -45,
 step: 1
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> they were satisfied  with their <br> GP surgery opening hours', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [79.4, 78.3, 81, 79.6,{y:76.9, color:'#3FCFD5'},{y:74.9, color:'#3FCFD5'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[79.35, 79.45], [78.24, 78.36], [80.9, 81.1], [79.49, 79.71], [76.78, 77.02], [74.77, 75.03]
            ]
        }
]
}