/* Created by ianb on 14/10/2013 11:45:21 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has life expectancy changed by gender?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Life expectancy from birth (years)'}
, labels: {
}},
series:[
{
name: 'All',
type: 'line',
data: [73.8,74.1,74.3,74.5,74.7,74.8,75.2,75.3,75.4,75.7,75.9,76.3,76.2,76.8,76.6,76.9,77.2,77.3,77.5,77.9,78.2,78.3,78.4,79,79.2,79.5,79.7,79.9,80.4,80.7,81.1]
,index: 1
},
{
name: 'Males',
type: 'line',
data: [70.8,71.1,71.3,71.6,71.7,71.9,72.3,72.4,72.6,72.9,73.1,73.6,73.5,74.1,74,74.3,74.6,74.8,75,75.5,75.8,76,76.2,76.8,77.1,77.3,77.6,77.8,78.3,78.7,79.1]
,index: 2
},
{
name: 'Females',
type: 'line',
data: [76.8,77,77.3,77.4,77.6,77.7,78,78.1,78.1,78.5,78.7,79,78.9,79.5,79.3,79.5,79.7,79.8,79.9,80.3,80.5,80.6,80.5,81.2,81.3,81.7,81.8,81.9,82.5,82.6,83.1]
,index: 3
}
]
}
