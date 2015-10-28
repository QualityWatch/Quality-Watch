/* Created by EFisher on 26/10/2015 10:07:51 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the infant mortality rate in UK countries changed in the last 15 years?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Deaths under 1 year per 1,000 live <br> births', offset: 87}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'United Kingdom',
type: 'line',
data: [5.6,5.5,5.3,5.3,5.1,5.1,5,4.8,4.7,4.6,4.3,4.3,4.1,3.9,3.9]
,index: 1
},
{
name: 'England',
type: 'line',
data: [5.6,5.4,5.3,5.3,5.1,5,5,4.8,4.7,4.6,4.3,4.3,4.1,3.9,3.9]
,index: 2
},
{
name: 'Wales',
type: 'line',
data: [5.2,5.5,4.7,4.1,5.1,4.3,4.1,5.3,4.1,4.8,4,3.9,4.1,3.6,3.7]
,index: 3
},
{
name: 'Scotland',
type: 'line',
data: [5.7,5.5,5.3,5.1,4.9,5.2,4.5,4.7,4.2,4,3.7,4.1,3.7,3.3,3.6]
,index: 4
},
{
name: 'Northern Ireland',
type: 'line',
data: [5,6,4.6,5.2,5.3,6.1,5.1,4.9,4.7,5.1,5.7,4.3,3.5,4.6,4.8]
,index: 5
}
]
}
