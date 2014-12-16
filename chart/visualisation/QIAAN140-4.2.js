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
title: {text:'Percentage of women who drank more <br> than 6 units on heaviest drinking <br> day in last week', offset: 99}
, max: 35
, labels: {
}},
series:[
{
name: 'Age 16-24',
type: 'line',
data: [27,25,24,24,24,17,18,17]
,index: 1
},
{
name: 'Age 25-44',
type: 'line',
data: [20,21,22,20,19,19,16,14]
,index: 2
},
{
name: 'Age 45-64',
type: 'line',
data: [12,12,13,13,11,11,12,11]
,index: 3
},
{
name: 'Age 65+',
type: 'line',
data: [2,2,3,2,2,2,2,3]
,index: 4
}
]
}