{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups reporting feeling pressure to work when unwell?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell (%)', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [21.5,22.3,22.5,27,25.4]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
         [20.996,22.036],
[21.722,22.794],
[21.908,23.125],
[26.363,27.658],
[24.52,26.19]
     ]},
{
name: 'Disabled staff',
type: 'column',
data: [30.2,32,32.6,38.5,37.1]
},
{
name: 'Non-disabled staff',
type: 'column',
data: [19.3,20.4,20.4,24.6,22.9]
}
]
}
