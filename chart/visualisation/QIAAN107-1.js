        {
legend: {enabled: false},
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did patients know how to contact an out-of hours GP service when their surgery is closed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan 2013 - Sept 2013']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that they know how to contact an <br> out-of-hours GP service', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [58,57.6,{
                y: 56.5,
                color: 'rgba(0,154,166,0.5)'
            }]
}, {
        name: 'error',
        type: 'errorbar',
        data: [
[57.91,58.16],
[57.46,57.72],
[56.37,56.65]

        ]
    }
]
}