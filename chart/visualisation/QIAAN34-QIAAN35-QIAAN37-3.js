/* Created by NCODowd on 01/04/2016 15:37:05 using v2.7 */
{ title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What do staff report about feeling pressured to work when unwell and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009','2010','2011','2012','2013','2014','Question<br>change','2015*','2016*']
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell (%)<br>*= weighted score', offset: 111}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},  
series:[
{
name: 'England',
type: 'column',
data: [21.52,22.25,22.52,27.01,25.35,22.98,null,58.67,55.81]
},
{
name: 'Acute',
type: 'column',
data: [25.40,25.91,25.89,28.46,27.45,25.91,null,58.48,55.43]
},
{
name: 'Ambulance',
type: 'column',
data: [30.48,32.25,34.69,38.08,39.84,37.41,null,65.23,63.59]
},
{
name: 'Mental Health & Learning Disability',
type: 'column',
data: [18.49,19.18,19.71,22.09,21.71,20.38,null,56.21,55.20]
},
{
name: 'Community',
type: 'column',
data: [null,null,21.81,26.16,24.42,22.11,null,60.28,57.78]
},
]
}
