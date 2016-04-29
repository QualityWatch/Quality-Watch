/* Created by NCODowd on 27/04/2016 10:33:26 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s DTP immunisation coverage compare internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children immunised'}
, max: 100
, min: 60
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [90,92,92,93,92,92,92,92,92,92,92,92,92,91]
,index: 1
},
{
name: 'OECD Best (Belgium)',
visible: false,type: 'line',
data: [95,95,95,95,95,97,99,99,99,99,99,98,99,99]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [92,92,93,91,94,94,94,94,94,95,95,95,95,96]
,index: 3
},
{
name: 'OECD Best (France)',
visible: false,type: 'line',
data: [97,97,97,97,98,98,99,98,98,98,99,99,99,99]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [90,93,93,97,96,96,96,96,96,96,96,96,96,96]
,index: 5
},
{
name: 'OECD Best (Greece)',
visible: false,type: 'line',
data: [89,91,92,94,95,96,98,99,99,99,99,99,99,99]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [86,84,83,86,89,90,91,92,93,94,94,95,95,96]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [87,93,93,96,94,95,96,97,96,96,96,96,97,97]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [97,97,97,98,98,98,96,96,97,97,97,97,97,97]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [90,90,90,90,89,89,89,88,89,92,93,95,93,92]
,index: 10
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [96,97,98,99,95,93,97,97,97,96,98,98,98,98]
,index: 11
},
{
name: 'Spain',
visible: false,type: 'line',
data: [95,96,98,98,97,96,98,96,97,96,97,97,97,96]
,index: 12
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [99,99,99,99,99,98,98,98,98,98,98,98,98,98]
,index: 13
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [91,91,91,91,92,91,92,92,92,93,94,95,97,96]
,index: 14
},
{
name: 'United States',
visible: false,type: 'line',
data: [94,94,94,96,96,96,96,95,96,95,95,95,96,94]
,index: 15
}
]
}
