{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol related deaths changed in different age and sex groups?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Age-sex standardised alcohol related <br> death rates per 100,000 population', offset: 87}
, max: 45
, min: 0
, tickInterval: 5
, labels: {
}},
series:[
{
name: 'Female 15-34',
type: 'line',
data: [0.7,0.6,0.6,0.5,0.5,0.6,0.6,0.7,0.9,1.1,0.8,0.9,1.1,1,1,1,1.3,1.2,1.4,1.3,1.4,1.1]
,index: 1
},
{
name: 'Female 35-54',
type: 'line',
data: [6.1,5.9,6.3,7.3,8.2,8.8,9.3,9.6,11,10.9,12,12.1,11.7,12.6,12.6,13.3,12.9,12.7,12.3,12.2,12.3,11.3]
,index: 2
},
{
name: 'Female 55-74',
type: 'line',
data: [11.9,11.4,11.9,12.2,12.7,13.2,14.7,15.8,15.1,15.9,15.8,16.4,17.3,17.6,16.7,18.4,19.5,19.2,18.3,18.2,18,18.3]
,index: 3
},
{
name: 'Female 75+',
type: 'line',
data: [10.4,9.7,8.9,9.3,10.5,10,11.1,10.4,11.5,10.7,11.8,11.4,12.7,12.1,13.1,12.7,12.5,12.6,13.2,11.3,12.3,13.6]
,index: 4
}
]
}
