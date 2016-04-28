/* Created by NCODowd on 21/04/2016 16:04:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people who drank heavily in the past week changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {rotation: -90,
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
data: [31.71,29.80,31.91,30.16,24.34,23.57,21.68,21.57,20.92,21.57]
,index: 1
},
{
name: 'Age 25-44',
type: 'line',
data: [29.66,30.61,30.54,26.16,27.04,24.92,23.89,24.30,22.82,22.21]
,index: 2
},
{
name: 'Age 45-64',
type: 'line',
data: [20.93,20.99,24.50,20.66,21.42,19.61,18.91,18.73,19.95,22.31]
,index: 3
},
{
name: 'Age 65+',
type: 'line',
data: [6.21,6.66,8.34,7.04,5.39,6.58,5.93,6.65,8.28,7.52]
,index: 4
}
]
}