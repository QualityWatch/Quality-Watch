{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people who drank heavily in the past week changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of men who drank more <br> than 8 units on heaviest drinking <br> day in last week', offset: 99}
, labels: {
}},
series:[
{
name: 'Age 16-24',
type: 'line',
data: [32,30,32,30,24,24,22,22]
,index: 1
},
{
name: 'Age 25-44',
type: 'line',
data: [30,31,31,27,27,25,24,24]
,index: 2
},
{
name: 'Age 45-64',
type: 'line',
data: [22,21,24,21,21,20,19,19]
,index: 3
},
{
name: 'Age 65+',
type: 'line',
data: [6,7,8,7,5,7,6,7]
,index: 4
}
]
}