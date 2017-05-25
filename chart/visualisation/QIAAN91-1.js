/* Created by rreed on 25/05/2017 13:39:11 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have conception rates changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Conceptions per 1,000 women aged <br> 15 to 17', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Conceptions per 1,000 women aged 15 to 17',
type: 'line',
data: [47.1,52.7,54.9,54.5,53,48.9,44.6,41.1,40.1,41.4,41.9,39.3,38.8,39,40,43.1,44.4,44.1,45.1,46.3,46.9,47.7,44.6,43.5,42.5,41.9,41.9,46.3,45.9,47.1,45.1,43.9,42.7,42.9,42.3,41.8,41.5,40.9,42,40.7,38.3,35.5,30.9,27.9,24.5,22.9,21]
,index: 1
}
]
}
