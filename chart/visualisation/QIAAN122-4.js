/* Created by JMorris on 09/05/2018 14:43:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year colon cancer survival in the UK compare to other countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2000-2004','2005-2009','2010-2014']
, labels: {
}
},
yAxis: {
title: {text:'Colon cancer five-year net surival <br> (15 years old and over)', offset: 87}
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
data: [63.7,68.1,70.6]
,index: 1
},
{
name: 'Austria',
visible: false,type: 'line',
data: [60.7,63.5,63.7]
,index: 2
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [64.2,64.9,67.8]
,index: 3
},
{
name: 'Canada',
visible: false,type: 'line',
data: [61.5,65.6,66.9]
,index: 4
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [51.5,56.5,61.6]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [61.2,63.1,64.8]
,index: 6
},
{
name: 'France',
visible: false,type: 'line',
data: [60.6,63.6,63.7]
,index: 7
},
{
name: 'Germany',
visible: false,type: 'line',
data: [62,64.9,64.8]
,index: 8
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [53.2,58.4,60.5]
,index: 9
},
{
name: 'Italy',
visible: false,type: 'line',
data: [59,64.3,64.1]
,index: 10
},
{
name: 'Japan',
visible: false,type: 'line',
data: [63.4,66.8,67.8]
,index: 11
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [58.1,60.9,63]
,index: 12
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [61.4,62.8,64]
,index: 13
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [56.5,61.1,60.9]
,index: 14
},
{
name: 'Spain',
visible: false,type: 'line',
data: [56.6,61.2,63.3]
,index: 15
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [60.2,64.3,64.9]
,index: 16
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [51.9,56.5,60]
,index: 17
},
{
name: 'United States',
visible: false,type: 'line',
data: [64.7,65.5,64.9]
,index: 18
}
]
}
