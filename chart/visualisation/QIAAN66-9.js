/* Created by rreed on 4/19/2017 4:41:53 PM using v2.7 */{
title: {text:'Measles Immunisation Coverage'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does UK\'s measles immunisation coverage compare internationally?'},
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
title: {text:'Percentage of children immunised'}
, max: 100
, min: 60
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [91,92,94,94,94,94,94,94,94,94,94,94,94,94,93]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [82,82,82,82,82,88,92,92,93,95,95,95,96,96,96]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [96,95,95,95,94,94,93,94,94,95,95,95,98,95,95]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [84,85,86,87,88,87,89,90,89,89,89,89,90,89,90]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [92,94,94,95,96,96,96,97,97,97,97,97,97,97,97]
,index: 5
},
{
name: 'Greece',
visible: false,type: 'line',
data: [89,91,92,94,95,96,98,99,99,99,99,99,99,99,97]
,index: 6
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [79,73,73,78,81,84,86,87,89,90,90,92,92,92,93]
,index: 7
},
{
name: 'Italy',
visible: false,type: 'line',
data: [74,77,81,84,86,87,88,90,90,90,91,90,90,90,86]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [96,96,95,95,96,96,95,96,96,96,96,96,96,96,96]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [85,85,84,84,83,82,82,79,86,89,91,93,92,92,93]
,index: 10
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [87,90,93,96,95,93,97,95,97,95,96,97,97,98,98]
,index: 11
},
{
name: 'Spain',
visible: false,type: 'line',
data: [94,96,97,98,97,97,97,97,98,98,95,97,97,95,96]
,index: 12
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [91,94,95,95,96,96,97,96,96,97,97,97,97,97,97]
,index: 13
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [88,85,85,82,81,82,85,86,86,86,89,90,92,93,93]
,index: 14
},
{
name: 'United States',
visible: false,type: 'line',
data: [91,91,91,93,93,92,92,92,92,90,92,92,92,91,91]
,index: 15
}
]
}
