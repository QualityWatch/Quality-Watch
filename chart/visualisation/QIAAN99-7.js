/* Created by EFisher on 26/03/2014 17:04:42 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does nurse density per population compare internationally and how has it changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Nurse density per 1,000 population <br> (head counts)', offset: 87}
, min: 3.5
, labels: {
format: '{value:.2f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [10.11,10.24,10.14,null,10.09,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [9.03,9.14,9.29,9.34,9.25,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [7.64,7.91,8.19,8.45,8.71,9.12]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [10.49,10.72,11.03,11.16,11.37,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [9.21,9.74,9.7,10.03,10.02,null]
,index: 5
},
{
name: 'Spain',
visible: false,type: 'line',
data: [4.37,4.63,4.93,4.88,5.47,5.28]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [10.96,11,11,11.07,null,null]
,index: 7
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [9.77,9.8,9.97,9.74,8.57,8.41]
,index: 8
},
{
name: 'United States',
visible: false,type: 'line',
data: [10.58,10.76,10.8,10.94,11.08,null]
,index: 9
}
]
}
