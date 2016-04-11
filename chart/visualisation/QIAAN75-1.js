/* Created by NCODowd on 04/04/2016 13:15:36 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff say about experiencing violence from patients or relatives?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,'Question<br>change',2012,2013,2014,2015]
, labels: {
    rotation: -45
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
name: 'Acute',
type: 'column',
data: [11.12,11.255,9.935,7.671,7.28,null,13.895,13.741,13.669,13.525]
},
    {name: 'Ac err',
     type: 'errorbar',
     data: [
[10.959,11.281],
[11.09,11.42],
[9.778,10.093],
[7.535,7.807],
[7.151,7.408],null,
[13.649,14.14],
[13.497,13.984],
[13.398,13.94],
[13.263,13.788]
     ]},
{
name: 'Ambulance',
type: 'column',
data: [27.412,25.376,24.315,18.6,19.856,null,31.937,31.292,31.255,32.104]
},
    {name: 'Amb err',
     type: 'errorbar',
     data: [
[27.157,27.667],
[25.01,25.742],
[24.062,24.568],
[18.392,18.807],
[19.68,20.032],null,
[31.644,32.231],
[30.918,31.666],
[30.819,31.69],
[31.706,32.503]
     ]},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [21.517,19.443,18.134,14.967,12.761,null,19.966,19.28,18.279,18.375]
},
    {name: 'MH err',
     type: 'errorbar',
     data: [
[21.205,21.83],
[19.179,19.706],
[17.891,18.378],
[14.725,15.208],
[12.494,13.027],null,
[19.518,20.413],
[18.919,19.64],
[17.958,18.6],
[18.062,18.688]
     ]},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,4.088,null,8.559,8.9,8.116,7.868]
},
    {name: 'Com err',
     type: 'errorbar',
     data: [
null,
null,
null,
null,
[3.981,4.195],null,
[8.354,8.765],
[8.689,9.11],
[7.983,8.248],
[7.699,8.036]
     ]},
]
}
