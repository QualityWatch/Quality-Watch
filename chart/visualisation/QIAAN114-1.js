/* Created by JMorris on 09/05/2018 14:43:09 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the UK\'s proportion of low birth weight babies compare internationally over time?'},
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
title: {text:'Percentage of live births weighing <br> less than 2500 grams', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [6.3,6.2,6.4,6.3,6.4,6.4,6.4,6.2,6.1,6.2,6.2,6.3,6.2,6.4,6.4,null]
,index: 1
},
{
name: 'Austria',
visible: false,type: 'line',
data: [6.3,6.7,6.6,7.1,6.8,6.8,7.1,7.2,7.1,7.1,7,6.9,6.8,6.8,6.6,6.5]
,index: 2
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [7,7.3,7.3,7.3,6.9,7,7.1,6.8,6.9,7,6.9,6.8,6.8,7,6.9,null]
,index: 3
},
{
name: 'Canada',
visible: false,type: 'line',
data: [5.6,5.5,5.7,5.9,5.9,6,6.1,6,6,6.1,6.2,6.1,6.1,6.3,null,null]
,index: 4
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [5,5.4,5.5,5.4,5.4,5.3,5.2,5.4,5.4,5.3,5.2,5.5,5.4,5.3,5.3,5]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [4.3,4.3,4.3,4.1,4.2,4.1,4.3,4.3,4.1,4.3,4.3,4.1,4.1,4.1,4.2,4.2]
,index: 6
},
{
name: 'France',
visible: false,type: 'line',
data: [6.5,6.7,6.7,6.8,6.4,null,6.7,6.6,6.7,6.7,6.8,6.5,6.7,6.1,6.2,null]
,index: 7
},
{
name: 'Germany',
visible: false,type: 'line',
data: [6.4,6.5,6.7,6.8,6.9,6.8,6.8,6.9,6.8,6.9,6.9,6.9,6.9,6.6,null,null]
,index: 8
},
{
name: 'Greece',
visible: false,type: 'line',
data: [8.1,8.4,8.3,8.7,8.6,8.8,9,8.8,8.4,9.6,10,9.8,9.8,8.9,9.4,9.2]
,index: 9
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [4.8,5.1,4.9,5,4.9,4.9,4.9,5,5.2,4.8,5,5.2,5.4,5.6,5.6,5.6]
,index: 10
},
{
name: 'Italy',
visible: false,type: 'line',
data: [6.7,6.5,6.5,6.7,6.7,6.8,6.7,6.8,7,7,7.3,7.2,7.3,7.3,7.4,7.4]
,index: 11
},
{
name: 'Japan',
visible: false,type: 'line',
data: [8.6,8.8,9,9.1,9.4,9.5,9.6,9.7,9.6,9.6,9.6,9.6,9.6,9.6,9.5,null]
,index: 12
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,6.7,null,null,7,7,6.3,5.5,5.9,6.1,6.4,5.8,null,null,null]
,index: 13
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [6.4,6.5,6.5,6.1,6.1,6,5.8,5.9,5.9,5.9,5.9,5.9,6.1,6,5.8,5.9]
,index: 14
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [7.1,7.9,7.4,7.4,7.6,7.5,7.6,7.8,7.7,8.2,8.3,8.4,8.5,8.7,8.7,8.9]
,index: 15
},
{
name: 'Spain',
visible: false,type: 'line',
data: [6.5,6.8,7.1,7.2,7.1,7.2,7.2,7.6,7.6,7.8,7.7,7.7,7.8,7.7,7.8,7.9]
,index: 16
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [4.4,4.3,4.3,4.3,4.3,4.1,4.3,4.2,4.4,4.2,4.2,4.4,4.2,4.3,4.5,4.4]
,index: 17
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [7.5,7.5,7.6,7.6,7.5,7.5,7.5,7.1,7.1,7.1,6.9,7,7,7,6.9,6.9]
,index: 18
},
{
name: 'United States',
visible: false,type: 'line',
data: [7.6,7.7,7.8,7.9,8.1,8.2,8.3,8.2,8.2,8.2,8.2,8.1,8,8,8,8.1]
,index: 19
}
]
}
