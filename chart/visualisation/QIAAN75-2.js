{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does an individual\'s profile affect whether they experience violence?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,'Question change', 2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they experienced <br> physical violence from patients/relatives <br> in last 12 months (%)', offset: 111}
, labels: {
}},
series:[
{
name: 'England',
type: 'column',
data: [11.26,10.67,9.54,7.08,6.65,null,15.46,14.59]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [

[11.264,11.264],
[10.673,10.673],
[8.927,10.158],
[6.53,7.623],
[6.097,7.208], null,
[14.616,16.311],
         [13.746,15.439]]},
{
name: '16-30 years',
type: 'column',
data: [14.16,13,9.78,8.68,7.91,null,20.44,19.3]
},
{
name: '31-40 years',
type: 'column',
data: [12.75,12.29,10.05,8.25,7.1,null,17.42,16.37]
},
{
name: '41-50 years',
type: 'column',
data: [11.13,10.55,8.21,7,6.55,null,15.35,14.37]
},
{
name: '51 years or over',
type: 'column',
data: [8.56,8.15,6.19,5.52,5.3,null,12.73,11.83]
}
]
}
