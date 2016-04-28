/* Created by NCODowd on 27/04/2016 10:33:30 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have conception rates changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Conceptions per 1,000 women aged <br> 15 to 17', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Series1',
type: 'line',
data: [45.1,46.3,46.9,47.7,44.6,43.5,42.5,41.9,41.9,46.3,45.9,47.1,45.1,43.9,42.7,42.9,42.3,41.8,41.5,40.9,42,40.7,38.3,35.5,30.9,27.9,24.5,22.9]
,index: 1
}
]
}
