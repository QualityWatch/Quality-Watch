/* Created by EFisher on 01/10/2015 12:24:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups reporting feeling pressure to work when unwell?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013,2014]
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
data: [21.52,22.26,22.52,27.01,25.35,22.98]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
        [21.251,21.782],
[21.984,22.532],
[22.206,22.827],
[26.68,27.341],
[24.929,25.781],
[22.561,23.393]
     ]},
{
name: 'Disabled staff',
type: 'column',
data: [30.16,31.98,32.64,38.54,37.09,34.34]
},
{
name: 'Non-disabled staff',
type: 'column',
data: [19.33,20.35,20.41,24.56,22.85,20.15]
}
]
}