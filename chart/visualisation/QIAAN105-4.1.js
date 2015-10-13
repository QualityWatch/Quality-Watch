/* Created by EFisher on 06/10/2015 08:59:57 using v2.7 */{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are GPs open at times that are convenient and are patients satisfied with this?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015']
, labels: {
    rotation: -45,
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> their GP surgery opens at times <br> that are convenient for them', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage',
type: 'column',
data: [77.7, 76.8,{y:74.6, color:'#3FCFD5'},{y:73.8, color:'#3FCFD5'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[77.59, 77.81], [76.68, 76.92], [74.47, 74.72], [73.67, 73.93]
            ]
        }
]
}