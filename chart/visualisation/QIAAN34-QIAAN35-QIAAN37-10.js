/* Created by NCODowd on 01/04/2016 15:03:33 using v2.7 *//* Created by EFisher on 01/10/2015 11:41:31 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Are there differences between staff groups in report being ill due to work related stress?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> reporting that they had been ill <br> due to work related stress <br> (%)', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'column',
data: [35.1,34.47,32.45,32.71,28.06,28.31,29.11,30.05,38.16,38.31,37.68,35.65]
},
    {name: 'Eng err',
     type: 'errorbar',
     data: [
        [34.923,35.274],
[34.282,34.66],
[32.214,32.691],
[32.514,32.914],
[27.872,28.254],
[28.126,28.499],
[28.912,29.302],
[29.802,30.29],
[37.855,38.466],
[37.935,38.691],
[37.23,38.135],
[35.274,36.025]
     ]},
{
name: 'Disabled staff',
type: 'column',
data: [50.48,52.13,50.34,47.03,42.76,41.24,42.17,43.74,52.3,53.19,51.83,50.46]
},
{
name: 'Non-disabled staff',
type: 'column',
data: [34.04,33.33,30.76,30.78,26.11,25.83,26.84,27.49,35.34,35.45,34.58,32.46]
}
]
}