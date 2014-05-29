/* Created by ianb on 29/05/2014 15:06:05 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has variation in the rates of hip replacements by deprivation changed over time?'},
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
data: [104.19,103.1,105.78,109.35,126.82,129.48,123.91,124.97,134.32,134.26]
,index: 1
},
{
name: 'Decile 2',
visible: false,type: 'line',
data: [112.58,112.29,114.93,118.96,130.08,133.16,126.26,136.4,138.09,134.73]
,index: 2
},
{
name: 'Decile 3',
visible: false,type: 'line',
data: [116.36,119.22,121.01,126.09,138.03,142.63,141.63,145.11,149.39,146.68]
,index: 3
},
{
name: 'Decile 4',
visible: false,type: 'line',
data: [126.47,126.25,127.1,134.04,148.05,149.75,144.57,152.22,160.38,155.07]
,index: 4
},
{
name: 'Decile 5',
visible: false,type: 'line',
data: [134.81,134.06,131.18,139.14,151.76,154.53,155.49,159.2,164.69,165]
,index: 5
},
{
name: 'Decile 6',
visible: false,type: 'line',
data: [130.71,129.43,137.26,141.53,157.29,161.94,156.95,164.67,171.92,166.04]
,index: 6
},
{
name: 'Decile 7',
visible: false,type: 'line',
data: [131.74,134.02,133.64,144.04,152.66,157.89,161.51,169.57,169.6,168.08]
,index: 7
},
{
name: 'Decile 8',
visible: false,type: 'line',
data: [130.56,128.73,135.54,141.33,152.52,158.85,159.73,166.53,167.77,165.53]
,index: 8
},
{
name: 'Decile 9',
visible: false,type: 'line',
data: [129.29,130.76,130.67,140.01,152.61,160.36,158.06,163.58,168.55,171.67]
,index: 9
},
{
name: 'Least deprived',
visible: false,type: 'line',
data: [122.27,122.19,120.19,130.41,143.34,150.39,150.67,158.53,160.76,164.63]
,index: 10
}
]
}
