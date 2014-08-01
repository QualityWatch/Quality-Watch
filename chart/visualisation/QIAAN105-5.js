{
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
, categories: ['2011/12','2012/13','July 2013 - March 2014']
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
data: [79.1,76.3,{y:74.6, color: 'rgba(0,154,166,0.5)'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[79.04,79.26],
[76.23,76.46],
[74.48,74.73]
            ]
        }
]
}