/* Created by EFisher on 05/10/2015 15:29:00 using v2.7 */{
legend: {
            enabled: false
        },
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did patients describe their overall experience of making an appointment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> overall their experience of making <br> an appointment was good', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [79.1, 76.3,{y:74.6, color:'#3FCFD5'},{y:73.3, color:'#3FCFD5'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[78.99, 79.21], [76.18, 76.42], [74.47, 74.73], [73.17, 73.43]
            ]
        }
]
}