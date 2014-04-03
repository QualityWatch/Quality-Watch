{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about experiencing violence from patients or relatives?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,'Question change', 2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they experienced <br> physical violence from patients/relatives <br> in the last 12 months (%)', offset: 111}
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
name: 'Acute',
type: 'column',
data: [11.12,11.26,9.94,7.67,7.28,null,13.89,13.74]
},
    {name: 'Ac err',
     type: 'errorbar',
     data: [
[10.804,11.436],
[10.932,11.578],
[9.626,10.244],
[7.404,7.938],
[7.028,7.531],null,
[13.413,14.376],
[13.262,14.219]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [27.41,25.38,24.32,18.6,19.86,null,31.94,31.29]
},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
[26.912,27.911],
[24.659,26.094],
[23.82,24.81],
[18.193,19.006],
[19.512,20.201],null,
[31.362,32.513],
[30.557,32.026]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [21.52,19.44,18.13,14.97,12.76,null,19.97,19.28]
},
    {name: 'MH err',
     type: 'errorbar',
     data: [
[20.904,22.13],
[18.926,19.959],
[17.657,18.612],
[14.494,15.44],
[12.239,13.282],null,
[19.088,20.843],
[18.571,19.988]
     ]},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,4.09,null,8.56,8.9]
},
    {name: 'Com err',
     type: 'errorbar',
     data: [
null,
null,
null,
null,
[3.879,4.297],null,
[8.157,8.962],
[8.486,9.313]
     ]},
]
}