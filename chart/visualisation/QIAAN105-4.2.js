{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are GPs open at times that are convenient and are patients satisfied with this?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','Jan - Sept 2013']
, labels: {
 rotation: -90
, step: 1
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
data: [79.4,78.3,81,79.6,{y:78.6, color: 'rgba(0,154,166,0.5)'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[79.32,79.42],
[78.19,78.31],
[80.85,81.05],
[79.54,79.76],
[78.5,78.74]
            ]
        }
]
}
