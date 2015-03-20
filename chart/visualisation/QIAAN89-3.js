/* Created by ianb on 20/03/2015 10:36:07 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has life expectancy at age 65 changed in UK?'},
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
title: {text:'Life expectancy at age 65 (years)'}
, labels: {
}},
series:[
{
name: 'Male',
type: 'line',
data: [13,13.2,13.2,13.3,13.4,13.7,13.8,13.8,14,14.1,14.3,14.2,14.7,14.6,14.9,15.1,15.3,15.4,15.8,16.1,16.2,16.3,16.7,17,17.3,17.5,17.6,18,18.2,18.5,18.5]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [17,17.1,17.2,17.3,17.3,17.6,17.6,17.6,17.9,17.9,18.1,17.9,18.4,18.2,18.4,18.5,18.6,18.6,19,19.2,19.1,19.1,19.6,19.7,20.1,20.2,20.2,20.7,20.8,21.1,20.9]
,index: 2
}
]
}
