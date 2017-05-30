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
, categories: [2007,2008,2009,2010,2011,'Question<br>change', 2012,2013,2014,2015,2016]
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
data: [11.26,10.67,9.54,7.09,6.67,null,15.46,14.50,13.00,12.48,15.10]
},
{
name: 'Acute',
type: 'column',
data: [11.12,11.26,9.94,7.67,7.28,null,13.89,13.74,13.67,13.53,15.00]
},
{
name: 'Ambulance',
type: 'column',
data: [27.41,25.38,24.32,18.60,19.86,null,31.94,31.29,31.25,32.10,32.10]
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [21.52,19.43,18.13,14.97,12.76,null,19.97,19.28,18.28,18.38,20.90]
},
{
name: 'Community',
type: 'column',
data: [null,null,null,null,4.0,null,8.56,8.90,8.12,7.87,7.60]
},
]
}
