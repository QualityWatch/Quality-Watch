/* Created by JMorris on 09/05/2018 14:43:41 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year breast cancer survival in the UK compare to other countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2000-2004','2005-2009','2010-2014']
, labels: {
}
},
yAxis: {
title: {text:'Breast cancer five-year net surival <br> (15 years old and over)', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [87,88.5,89.5]
,index: 1
},
{
name: 'Austria',
visible: false,type: 'line',
data: [81.7,83.9,84.8]
,index: 2
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [84.8,85.3,86.4]
,index: 3
},
{
name: 'Canada',
visible: false,type: 'line',
data: [85.8,87.5,88.2]
,index: 4
},
{
name: 'Denmark',
visible: false,type: 'line',
data: [80.3,84,86.1]
,index: 5
},
{
name: 'Finland',
visible: false,type: 'line',
data: [86.5,87.7,88.5]
,index: 6
},
{
name: 'France',
visible: false,type: 'line',
data: [86.8,87.2,86.7]
,index: 7
},
{
name: 'Germany',
visible: false,type: 'line',
data: [83.9,85.6,86]
,index: 8
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [77.2,81.4,82]
,index: 9
},
{
name: 'Italy',
visible: false,type: 'line',
data: [84.2,85.9,86]
,index: 10
},
{
name: 'Japan',
visible: false,type: 'line',
data: [85.9,88.9,89.4]
,index: 11
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [83.9,85.8,86.6]
,index: 12
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [82.8,86.1,87.6]
,index: 13
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [81.6,86.1,87.6]
,index: 14
},
{
name: 'Spain',
visible: false,type: 'line',
data: [83.1,84.7,85.4]
,index: 15
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [85.6,87.9,88.8]
,index: 16
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [79.8,83.8,85.6]
,index: 17
},
{
name: 'United States',
visible: false,type: 'line',
data: [88.9,89.8,90.2]
,index: 18
}
]
}
