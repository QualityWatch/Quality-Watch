/* Created by NCODowd on 04/04/2016 13:24:03 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does an individual\'s profile affect whether they experience violence?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,'Question<br>change', 2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they experienced <br> physical violence from patients/relatives <br> in last 12 months (%)', offset: 111}
, labels: {
}},
series:[
{
name: 'All',
type: 'column',
data: [11.264,10.673,9.543,7.088,6.671,null,15.464,14.592,13.053,12.481]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [

[11.264,11.264],
[10.673,10.673],
[9.229,9.857],
[6.809,7.367],
[6.387,6.954],null,
[15.032,15.896],
[14.16,15.024],
[12.596,13.51],
[12.013,12.948]]},
{
name: '16-30 years',
type: 'column',
data: [14.16,13,9.78,8.68,7.91,null,20.44,19.3,17.74,17.53]
},
{
name: '31-40 years',
type: 'column',
data: [12.75,12.29,10.05,8.25,7.1,null,17.42,16.37,14.46,13.39]
},
{
name: '41-50 years',
type: 'column',
data: [11.13,10.55,8.21,7,6.55,null,15.35,14.37,12.92,12.03]
},
{
name: '51 years or over',
type: 'column',
data: [8.56,8.15,6.19,5.52,5.3,null,12.73,11.83,10.58,10.08]
}
]
}