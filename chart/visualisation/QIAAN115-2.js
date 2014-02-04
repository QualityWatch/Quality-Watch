/* Created by EFisher on 24/01/2014 17:07:33 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the infant mortality rate in UK countries changed in the last ten years?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Infant mortality rate*'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'United Kingdom',
type: 'line',
data: [5.6,5.5,5.3,5.3,5.1,5.1,5,4.8,4.7,4.6,4.3,4.3,4.1]
,index: 1
},
{
name: 'England',
type: 'line',
data: [5.6,5.4,5.3,5.3,5.1,5,5,4.8,4.7,4.6,4.3,4.3,4.1]
,index: 2
},
{
name: 'Wales',
type: 'line',
data: [5.2,5.5,4.7,4.1,5.1,4.3,4.1,5.3,4.1,4.8,4,3.9,4.1]
,index: 3
},
{
name: 'Scotland',
type: 'line',
data: [5.7,5.5,5.3,5.1,4.9,5.2,4.5,4.7,4.2,4,3.7,4.1,3.7]
,index: 4
},
{
name: 'Northern Ireland',
type: 'line',
data: [5,6,4.6,5.2,5.3,6.1,5.1,4.9,4.7,5.1,5.7,4.3,3.5]
,index: 5
}
]
}
