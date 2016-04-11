/* Created by NCODowd on 01/04/2016 15:37:05 using v2.7 *//* Created by EFisher on 01/10/2015 12:03:20 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2009,2010,2011,2012,2013,2014,'Question<br>change',2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell (%)', offset: 111}
, max: 100
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [21.516,22.258,22.516,27.011,25.355,22.977,null,56.456]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
        [21.251,21.782],
[21.984,22.532],
[22.206,22.827],
[26.68,27.341],
[24.929,25.781],
[22.561,23.393],null,
[55.967,56.946]
     ]},
{
name: 'Acute',
type: 'column',
data: [25.402,25.912,25.894,28.458,27.445,25.909,null,58.924]
},
        {name: 'Ac err',
     type: 'errorbar',
     data: [
       [25.238,25.566],
[25.723,26.101],
[25.689,26.099],
[28.221,28.694],
[27.222,27.669],
[25.692,26.127],null,
[58.591,59.257]
     ]},

{
name: 'Ambulance',
type: 'column',
data: [30.478,32.247,34.692,38.082,39.837,37.407,null,65.736]
},
        {name: 'Amb err',
     type: 'errorbar',
     data: [
         [30.202,30.754],
[31.866,32.627],
[34.364,35.019],
[37.753,38.41],
[39.281,40.394],
[37.074,37.739],null,
[65.388,66.084]
     ]},

{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [18.486,19.178,19.709,22.091,21.706,20.383,null,58.622]
},
        {name: 'MH err',
     type: 'errorbar',
     data: [
         [18.262,18.71],
[18.932,19.423],
[19.497,19.922],
[21.829,22.352],
[21.504,21.908],
[20.192,20.574],null,
[58.223,59.02]
     ]},

{
name: 'Community',
type: 'column',
data: [null,null,21.81,26.159,24.418,22.108,null,60.117]
},
        {name: 'Com err',
     type: 'errorbar',
     data: [null,
null,
[21.637,21.983],
[25.972,26.345],
[24.224,24.612],
[21.974,22.241],null,
[59.76,60.475]
     ]}
]
}