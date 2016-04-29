/* Created by NCODowd on 25/04/2016 12:35:57 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have alcohol related deaths changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Female age-standardised alcohol-related death<br>rates per 100,000 population in UK', offset: 90}
, max: 50
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Scotland',
type: 'line',
data: [11,12.7,14,14.2,15.5,16.5,16.1,17.6,18.6,18.7,17.3,19.2,19.6,16.9,16.7,16.7,15.2,16,12.5,13,13.3]
,index: 1
},
{
name: 'Northern Ireland',
type: 'line',
data: [7.2,7.6,7.9,7.3,7.5,8.3,7.8,10.2,10.2,11.1,10.6,9.7,9.7,10.3,11.5,11.8,11.2,8.9,10.8,7.5,8.5]
,index: 2
},
{
name: 'Wales',
type: 'line',
data: [6.1,7.2,7,8.3,7.6,9.1,9.3,10.2,8.7,9.7,10.2,10.2,10.8,10.1,12.9,10.3,12,11.1,12.4,10.3,10.4]
,index: 3
},
{
name: 'England',
type: 'line',
data: [5.8,6.3,6.5,7.1,7.4,7.7,7.9,8.2,8.4,8.6,8.9,8.7,9.3,9.5,9.4,9.1,8.9,8.9,8.8,8.7,9.1]
,index: 4
}
]
}
