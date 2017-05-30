/* Created by NCODowd on 04/04/2016 13:24:03 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does an individual\'s profile affect whether they experience violence?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,'Question<br>change', 2012,2013,2014,2015,2016]
, labels: {
rotation:-45
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
data: [11.26,10.67,9.54,7.00,6.67,null,15.46,14.50,13.00,12.48,15.10]
},
{
name: '16-30 years',
type: 'column',
data: [14.16,13.00,9.78,8.68,7.91,null,20.44,19.30,17.74,17.53,16.74]
},
{
name: '31-40 years',
type: 'column',
data: [12.75,12.29,10.05,8.25,7.10,null,17.42,16.37,14.46,13.39,12.50]
},
{
name: '41-50 years',
type: 'column',
data: [11.13,10.55,8.21,7.00,6.55,null,15.35,14.37,12.92,12.03,11.46]
},
{
name: '51 years or over',
type: 'column',
data: [8.56,8.15,6.19,5.52,5.30,null,12.73,11.83,10.58,10.08,9.33]
}
]
}
