/* Created by JMorris on 09/05/2018 14:43:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cervical cancer survival in the UK compare to other countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2000-2004','2005-2009','2010-2014']
, labels: {
}
},
yAxis: {
title: {text:'Cervical cancer five-year net surival <br> (15 years old and over)', offset: 87}
, max: 75
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [67.9,67.5,66.4]
,index: 1
},
{
name: 'Austria',
visible: false,type: 'line',
data: [65.4,66,63.9]
,index: 2
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [65.1,65.7,65.4]
,index: 3
},
{
name: 'Canada',
visible: false,type: 'line',
data: [67.9,66.9,66.6]
,index: 4
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [63,66.7,69.5]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [67.8,65.2,67.4]
,index: 6
},
{
name: 'France',
visible: false,type: 'line',
data: [61.7,62.1,65]
,index: 7
},
{
name: 'Germany',
visible: false,type: 'line',
data: [64.9,65.7,65.2]
,index: 8
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [57.8,58.7,63.6]
,index: 9
},
{
name: 'Italy',
visible: false,type: 'line',
data: [67.3,67.7,66.8]
,index: 10
},
{
name: 'Japan',
visible: false,type: 'line',
data: [67.5,69.2,71.4]
,index: 11
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [66.1,65.5,67.5]
,index: 12
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [67.4,64.4,67.4]
,index: 13
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [60.4,65.3,66.2]
,index: 14
},
{
name: 'Spain',
visible: false,type: 'line',
data: [63.6,64.5,64.5]
,index: 15
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [66.9,67.7,68.3]
,index: 16
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [58.9,61.9,63.8]
,index: 17
},
{
name: 'United States',
visible: false,type: 'line',
data: [64.3,63,62.6]
,index: 18
}
]
}
