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
 min: 0,
 tickInterval: 5,
title: {text:'Age-sex standardised alcohol related <br> death rates per 100,000 population', offset: 87}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Male 15-34 ',
type: 'line',
data: [1.2,1.1,1.4,1.4,1.7,1.6,1.6,2.1,1.9,1.8,2.3,2.2,2.1,2.1,2,2.1,2.2,2.7,2.4,2.4,2.2,1.8]
,index: 1
},
{
name: 'Male 35-54',
type: 'line',
data: [12,12.2,11.9,13.9,15.1,17.6,20.1,21.8,21.8,22.1,24.7,24.21,26.78,25.94,26.33,27.44,26.58,27.53,26.08,25.79,25.34,23.1]
,index: 2
},
{
name: 'Male 55-74',
type: 'line',
data: [21.5,20.7,20.6,21.6,24.5,24.5,27,28.6,30,30.6,31.6,33.2,36.5,35.7,37.7,38.7,38.6,40,37.3,39.9,40.4,36.8]
,index: 3
},
{
name: 'Male 75+',
type: 'line',
data: [17.4,19.1,18.4,18.5,22,18.8,19.4,21.9,22,20.8,25.4,23.8,21.6,23.1,24,22.8,21.9,22.6,24.7,21.9,23.6,26.8]
,index: 4
}
]
}
