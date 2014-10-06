{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of staff feeling under pressure to work when unwell changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting feeling pressure to attend <br> work when feeling unwell in last <br> 3 months ± SEM', offset: 111}
, max: 40
, labels: {
}},
series:[
{
name: 'Percentage',
type: 'column',
data: [21.52,22.26,22.52,27.01]
},
    {name: 'Error',
     type: 'errorbar',
     data:[
         [21.00,22.04],
[21.72,22.79],
[21.91,23.12],
[26.36,27.66]
     ]}
]
}
