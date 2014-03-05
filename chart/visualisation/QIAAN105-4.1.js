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
, categories: ['2011/12','2012/13','Jan - Sept 2013']
, labels: {
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
name: 'Series1',
type: 'column',
data: [77.7,76.8,{y:75.9, color: 'rgba(0,154,166,0.5)'}]
}, {
            name: 'Error bars',
            type: 'errorbar',
            data: [
[77.62,77.84],
[76.66,76.89],
[75.8,76.04]
            ]
        }
]
}
