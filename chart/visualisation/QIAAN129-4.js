/* Created by ianb on 29/05/2014 15:06:16 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the rates of knee replacements by deprivation changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Standardised rate per 100,000 population'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Most deprived',
type: 'line',
data: [106.47,115.63,121.11,127.7,150.28,155.04,147.4,149.02,154.9,152.96]
,index: 1
},
{
name: 'Decile 2',
visible: false,type: 'line',
data: [119.7,125.52,128.54,134.39,155.98,162.1,155,158.6,163.95,157.94]
,index: 2
},
{
name: 'Decile 3',
visible: false,type: 'line',
data: [117.31,125.3,133.2,135.58,157.22,163.8,155.18,158.04,160.36,151.28]
,index: 3
},
{
name: 'Decile 4',
visible: false,type: 'line',
data: [119.91,128.87,137.07,140.01,159.26,163.07,153.83,159.5,161.78,157.69]
,index: 4
},
{
name: 'Decile 5',
visible: false,type: 'line',
data: [120.38,128.43,132.69,137.74,155.81,158.05,154.82,160.43,161.28,155.79]
,index: 5
},
{
name: 'Decile 6',
visible: false,type: 'line',
data: [120.37,121.96,131.6,135.35,149.82,154.64,148.79,154.4,157.05,150.04]
,index: 6
},
{
name: 'Decile 7',
visible: false,type: 'line',
data: [114.94,121.12,126.63,133.7,150.83,154.85,147.46,150.35,153.81,149.01]
,index: 7
},
{
name: 'Decile 8',
visible: false,type: 'line',
data: [113.23,119.03,122.82,129.62,144.58,148.25,141.74,146.24,149.73,146.58]
,index: 8
},
{
name: 'Decile 9',
visible: false,type: 'line',
data: [108.2,114.34,115.85,126.53,140.87,141.34,140.02,140.33,143.71,139.05]
,index: 9
},
{
name: 'Least deprived',
visible: false,type: 'line',
data: [98.96,104.48,107.13,115.4,129.73,130.04,127.53,134.89,136.6,131.31]
,index: 10
}
]
}
