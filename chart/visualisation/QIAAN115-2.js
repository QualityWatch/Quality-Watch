/* Created by JMorris on 09/05/2018 14:43:17 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the UK\'s infant mortality rate compare internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Infant mortality rate (deaths per <br> 1,000 live births)', offset: 87}
, max: 8
, min: 0
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [5.2,5.3,5,4.8,4.7,4.9,4.7,4.1,4.1,4.2,4.1,3.8,3.3,3.6,3.4,3.2]
,index: 1
},
{
name: 'Austria',
visible: false,type: 'line',
data: [4.8,4.8,4.1,4.5,4.5,4.2,3.6,3.7,3.7,3.8,3.9,3.6,3.2,3.1,3,3.1]
,index: 2
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [4.8,4.5,4.4,4.1,3.9,3.7,4,3.9,3.8,3.5,3.6,3.4,3.8,3.5,3.4,3.3]
,index: 3
},
{
name: 'Canada',
visible: false,type: 'line',
data: [5.3,5.2,5.4,5.3,5.3,5.4,5,5.1,5.1,4.9,5,4.9,4.8,null,null,null]
,index: 4
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [5.3,4.9,4.4,4.4,4.4,4.4,3.5,4,4,3.1,3.4,3.5,3.4,3.5,4,3.7]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [3.8,3.2,3,3.1,3.3,3,2.8,2.7,2.6,2.6,2.3,2.4,2.4,1.8,2.2,1.7]
,index: 6
},
{
name: 'France',
visible: false,type: 'line',
data: [4.5,4.6,4.2,4.2,4,3.8,3.8,3.8,3.8,3.9,3.6,3.5,3.5,3.6,3.5,3.7]
,index: 7
},
{
name: 'Germany',
visible: false,type: 'line',
data: [4.4,4.3,4.2,4.2,4.1,3.9,3.8,3.9,3.5,3.5,3.4,3.6,3.3,3.3,3.2,3.3]
,index: 8
},
{
name: 'Greece',
visible: false,type: 'line',
data: [5.9,5.1,5.1,4,4.1,3.8,3.7,3.5,2.7,3.1,3.8,3.4,2.9,3.7,3.7,4]
,index: 9
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [6.2,5.7,5,5.3,4.6,3.8,3.9,3.2,3.4,3.3,3.6,3.5,3.5,3.5,3.3,3.4]
,index: 10
},
{
name: 'Italy',
visible: false,type: 'line',
data: [4.3,4.4,4.1,3.8,3.4,3.3,3.2,3.1,3.1,3.2,3,2.9,2.9,2.9,2.8,2.9]
,index: 11
},
{
name: 'Japan',
visible: false,type: 'line',
data: [3.2,3.1,3,3,2.8,2.8,2.6,2.6,2.6,2.4,2.3,2.3,2.2,2.1,2.1,null]
,index: 12
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [5.1,5.4,5,4.8,4.4,4.9,4.4,4.1,3.8,3.8,3.8,3.6,3.7,3.8,3.6,3.3]
,index: 13
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [6.3,5.6,6.2,5.4,5.9,5,5.1,4.8,5,5.2,5.5,5.2,4.7,5,null,null]
,index: 14
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [5.5,5,5,4.1,3.8,3.5,3.3,3.4,3.3,3.6,2.5,3.1,3.4,2.9,2.9,2.9]
,index: 15
},
{
name: 'Spain',
visible: false,type: 'line',
data: [4.4,4,4.1,3.9,3.9,3.7,3.5,3.4,3.3,3.2,3.2,3.1,3.1,2.7,2.8,2.7]
,index: 16
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [3.4,3.7,3.3,3.1,3.1,2.4,2.8,2.5,2.5,2.5,2.5,2.1,2.6,2.7,2.2,2.5]
,index: 17
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [5.6,5.5,5.2,5.3,5,5.1,4.9,4.7,4.6,4.5,4.2,4.2,4,3.9,3.9,3.9]
,index: 18
},
{
name: 'United States',
visible: false,type: 'line',
data: [6.9,6.8,7,6.8,6.8,6.9,6.7,6.8,6.6,6.4,6.1,6.1,6,6,5.8,null]
,index: 19
}
]
}
