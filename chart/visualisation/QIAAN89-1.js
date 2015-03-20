/* Created by ianb on 20/03/2015 10:36:00 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has life expectancy changed by country?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Life expectancy from birth (years)'}
, min: 60
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [74.7,75.5,75.8,75.6,76.1,76.3,76.3,76.5,77,77.4,77.5,78,78,77.9,78.2,78.5,78.7,79,79.3,79.7,80,80.3,80.6,80.9,81.1,81.4,81.5,81.6,81.8,82,82.1]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [74,74,74.5,74.6,74.8,75.5,75.7,75.7,76.1,76.3,76.5,76.5,76.8,77,77.3,77.5,77.6,77.7,77.8,78.1,78.2,78.2,79,79.1,79.5,79.9,79.8,80.1,80.3,80.7,80.5]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [75.9,76.2,76.5,76.5,76.6,77,77,77.3,77.6,77.8,78,null,78,78,78.2,78.3,78.5,78.8,79,79.3,79.5,79.7,79.9,80.1,80.4,80.5,80.7,80.9,81.2,81.5,null]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [74.8,74.8,75.3,75.4,75.6,76.2,76.4,76.6,76.9,77,77.3,77.4,77.7,77.9,78.1,78.4,78.7,78.9,79.2,79.3,79.4,79.2,80.3,80.3,80.9,81.2,81.3,81.5,81.8,82.2,82.1]
,index: 4
},
{
name: 'Finland',
visible: false,type: 'line',
data: [74.6,74.4,74.8,74.5,74.8,74.8,74.8,75,75,75.5,75.7,75.8,76.6,76.6,76.9,77.1,77.3,77.5,77.7,78.2,78.3,78.5,79,79.1,79.5,79.6,79.9,80.1,80.2,80.6,80.7]
,index: 5
},
{
name: 'Germany',
visible: false,type: 'line',
data: [73.5,73.8,74.3,74.4,74.6,75,75.2,75.4,75.3,75.5,76,76.1,76.4,76.6,76.9,77.3,77.7,77.9,78.2,78.5,78.5,78.6,79.2,79.4,79.8,80.1,80.2,80.3,80.5,80.8,81]
,index: 6
},
{
name: 'Greece',
visible: false,type: 'line',
data: [75.9,75.7,76.2,76,76.5,76.3,76.8,77,77.1,77.1,77,77.4,77.6,77.5,77.7,77.9,77.9,78,78.2,78.8,79,79.2,79.3,79.5,79.9,79.7,80.3,80.4,80.7,80.8,80.7]
,index: 7
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [72.9,null,null,73.4,73.6,74.5,74.5,74.5,74.9,75.1,75.5,75.3,75.9,75.6,75.9,76.1,76.3,76.2,76.6,77.2,77.7,78.2,78.6,79,79.3,79.7,80.2,80.3,80.8,80.8,81]
,index: 8
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [72.9,null,null,73.4,73.6,74.5,74.5,74.5,74.9,75.1,75.5,75.3,75.9,75.6,75.9,76.1,76.3,76.2,76.6,77.2,77.7,78.2,78.6,79,79.3,79.7,80.2,80.3,80.8,80.8,81]
,index: 9
},
{
name: 'Israel',
visible: false,type: 'line',
data: [74.2,74.5,74.9,75.3,75,75.3,75.7,76.4,76.7,76.8,76.6,77.2,77.5,77.5,78.2,78.1,78.2,78.5,78.8,79.3,79.5,79.7,80.2,80.2,80.6,80.6,81,81.5,81.7,81.7,81.8]
,index: 10
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [76.1,76.3,76.4,76.5,76.4,76.9,77.1,76.9,77,77.2,77.4,77.1,77.5,77.6,77.6,78,78,77.9,78.2,78.3,78.4,78.7,79.2,79.5,79.9,80.3,80.5,80.8,81,81.3,81.2]
,index: 11
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [73.5,73.7,73.8,74,74.1,74.5,74.8,75.2,75.5,75.8,76.1,76.3,76.6,76.8,77.1,77.4,77.8,78,78.4,78.7,79,79.3,79.5,79.8,80.1,80.2,80.4,80.8,81,81.2,81.5]
,index: 12
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [72.5,72.4,72.7,73,73.4,73.8,73.8,74.4,74.1,74.1,74.7,74.6,75.5,75.4,75.3,75.8,76,76.3,76.9,77.2,77.4,77.5,78.4,78.2,79,79.2,79.5,79.7,80,80.6,80.5]
,index: 13
},
{
name: 'Spain',
visible: false,type: 'line',
data: [76.3,76.1,76.5,76.4,76.7,76.9,76.9,77,77,77.2,77.6,77.8,78.1,78.1,78.3,78.8,78.9,78.9,79.4,79.8,79.9,79.7,80.4,80.3,81.1,81.2,81.5,81.9,82.4,82.6,82.5]
,index: 14
},
{
name: 'Sweden',
visible: false,type: 'line',
data: Not found
,index: 15
},
{
name: 'Not found',
visible: false,type: 'Not found',
data: Not found
,index: Not found
},
{
name: 'Not found',
visible: false,type: 'Not found',
data: Not found
,index: Not found
},
{
name: 'Not found',
visible: false,type: 'Not found',
data: Not found
,index: Not found
},
{
name: 'Not found',
visible: false,type: 'Not found',
data: Not found
,index: Not found
}
]
}
