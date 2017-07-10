/* Created by rreed on 06/07/2017 08:50:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol-related deaths changed in different age and sex groups?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-standardised alcohol-related <br> death rates by sex, United Kingdom, <br> deaths registered 1994 to 2014', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Male',
type: 'line',
data: [12.2,13.5,14.4,15.9,17,17.6,17.9,19.5,19.8,21,20.7,21,21.4,21,21.7,20.3,20.7,20.3,19.1,19.1,19.4,19.2]
,index: 1
},
{
name: 'Female',
type: 'line',
data: [6.3,7,7.3,7.9,8.2,8.6,8.7,9.2,9.4,9.6,9.8,9.8,10.3,10.2,10.3,9.9,9.7,9.7,9.4,9.1,9.6,9.7]
,index: 2
}
]
}
