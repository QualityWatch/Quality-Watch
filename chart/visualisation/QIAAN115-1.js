/* Created by JMorris on 09/05/2018 14:43:16 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the infant mortality rate in UK countries changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Infant mortality rate (deaths per <br> 1,000 live births)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'England',
type: 'line',
data: [6.1,6.1,5.9,5.6,5.7,5.6,5.4,5.3,5.3,5.1,5,5,4.8,4.7,4.6,4.3,4.3,4.1,3.9,3.9,3.9,3.9]
,index: 1
},
{
name: 'Wales',
type: 'line',
data: [6.1,5.6,5.9,5.7,6.4,5.2,5.5,4.7,4.1,5.1,4.3,4.1,5.3,4.1,4.8,4,3.9,4.1,3.6,3.7,3.7,3.1]
,index: 2
},
{
name: 'Scotland',
type: 'line',
data: [6.2,6.2,5.3,5.6,5,5.7,5.5,5.3,5.1,4.9,5.2,4.5,4.7,4.2,4,3.7,4.1,3.7,3.3,3.6,3.2,3.3]
,index: 3
},
{
name: 'Northern Ireland',
type: 'line',
data: [7.1,5.8,5.6,5.6,6.4,5,6,4.6,5.2,5.3,6.1,5.1,4.9,4.7,5.1,5.7,4.3,3.5,4.6,4.8,5.1,4.6]
,index: 4
}
]
}
