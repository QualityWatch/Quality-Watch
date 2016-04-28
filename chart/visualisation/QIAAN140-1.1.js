/* Created by NCODowd on 25/04/2016 12:38:22 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol related deaths changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Male age-standardised alcohol-related <br> death rates per 100,000 population <br> in UK', offset: 99}
, max: 50
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Scotland',
type: 'line',
data: [23.3,25.7,31.2,34.2,35.6,39,41.3,44,45.9,47.7,45.5,44.6,44.2,40.2,40.3,34.6,37.1,33.1,29.9,29.8,31.2]
,index: 1
},
{
name: 'Northern Ireland',
type: 'line',
data: [11.7,11.8,13.9,16.7,16.8,18.2,20.5,19.7,24.6,19.8,24.4,23.3,23.6,26.5,25,24.2,24.7,22.7,22.9,21.4,20.3]
,index: 2
},
{
name: 'Wales',
type: 'line',
data: [12.7,13.8,14.2,13.8,14.6,15.5,16,18.2,18,20.7,19.7,18.7,19.7,23.4,24.5,23.6,21.5,20.1,21.5,20.7,19.9]
,index: 3
},
{
name: 'England',
type: 'line',
data: [10.9,12.2,12.6,14,15.1,15.3,15.4,16.9,17,18.2,17.9,18.6,19,18.6,19.4,18.4,18.7,18.9,17.6,17.8,18.1]
,index: 4
}
]
}
