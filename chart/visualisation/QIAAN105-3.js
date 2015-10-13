/* Created by EFisher on 05/10/2015 15:19:33 using v2.7 */{
        legend: {
            enabled: false
        },
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How convenient did patients find the appointment they were able to get?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12', '2012/13', 'July 2013 - March 2014', 'July 2014 - March 2015']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> the appointment they were able to <br> get was convenient', offset: 99}
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
data: [93.3, 92.5,{y:91.9, color:'#3FCFD5'},{y:91.8, color:'#3FCFD5'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[93.23, 93.37], [92.42, 92.58], [91.82, 91.98], [91.71, 91.89]
            ]
        }
]
}