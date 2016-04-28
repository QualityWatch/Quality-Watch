/* Created by NCODowd on 21/04/2016 16:12:17 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people who drank heavily in the past week changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {rotation:-90
}
},
yAxis: {
title: {text:'Percentage of women who drank more <br> than 6 units on heaviest drinking <br> day in last week', offset: 99}
, max: 35
, tickInterval: 5
, labels: {
}},
series:[
{
name: 'Age 16-24',
type: 'line',
data: [26.62,24.83,24.50,23.47,24.22,16.96,18.40,16.92,15.81,17.49]
,index: 1
},
{
name: 'Age 25-44',
type: 'line',
data: [20.08,20.95,22.25,19.98,18.58,19.17,16.22,13.61,15.65,16.87]
,index: 2
},
{
name: 'Age 45-64',
type: 'line',
data: [12.37,12.27,12.90,12.93,11.24,11.38,12.22,11.15,12.25,12.71]
,index: 3
},
{
name: 'Age 65+',
type: 'line',
data: [2.32,2.15,2.75,2.17,1.79,2.37,2.20,2.59,2.12,3.31]
,index: 4
}
]
}