/* Created by ianb on 26/06/2015 16:43:52 using v2.6 */{
title: {text:'COPD Hospital Admission'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of COPD and asthma admissions compare internationally over time?'},
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
title: {text:'Age(-sex) standardised rate per <br> 100 000 population', offset: 87}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,319.8,324.7,309.7,317,319.3]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [303.9,283.9,287.7,284.4,263.2,269.6,239.4,257.1,222.8,217.2,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,202.7,null,195,205.5,199.5]
,index: 3
},
{
name: 'France',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,84.5,null,null,94.3,101.9]
,index: 4
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,195.6,null,212.9,null,211.8]
,index: 5
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [313.8,294.7,299.2,297.9,299.3,379.3,392.6,408.2,405.9,384.4,359.2,365]
,index: 6
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,223,213.3,210.8,191.4,191.7,159.7,149,134.7,121.3,107.4,89.6]
,index: 7
},
{
name: 'Japan',
visible: false,type: 'line',
data: [null,null,39.6,null,null,36.2,null,null,25.8,null,null,23.5]
,index: 8
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [null,null,null,null,null,168.1,null,163.3,159,159.2,162.1,null]
,index: 9
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,320.9,340.8,330.9,340.6,338.6,331.6,329.3]
,index: 10
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,101,null,76.4,null,70.5]
,index: 11
},
{
name: 'Spain',
visible: false,type: 'line',
data: [240.6,215.3,232.5,241.8,222.8,245.2,215.8,246.8,232.2,227.3,212.7,211.3]
,index: 12
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,162.2,163.8,161.9,160.4,168.8]
,index: 13
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [null,null,null,null,null,null,254.4,239.9,255,234.9,244.1,226.5]
,index: 14
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,213.9,null,242.3,null,226.1,null]
,index: 15
}
]
}
