/* Created by EFisher on 23/11/2015 15:47:22 using v2.7 */        {
legend: {enabled: false},
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did patients know how to contact an out-of hours GP service when their surgery is closed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','Jan 2013 - Sept 2013','July 2013 - Mar 2014','Jan 2014 - Sept 2014','July 2014 - Mar 2015']
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
                color: 'rgba(0,154,166,100)'
            },{
                y: 55.9,
                color: 'rgba(0,154,166,100)'
            },{
                y: 55.4,
                color: 'rgba(0,154,166,100)'
            },{
                y: 56.4,
                color: 'rgba(0,154,166,100)'
            }]
}, {
        name: 'error',
        type: 'errorbar',
        data: [
[57.91,58.16],
[57.46,57.72],
[56.37,56.65],
[55.76,56.04],
[55.26,55.54],
[56.25,56.55]


        ]
    }
]
}