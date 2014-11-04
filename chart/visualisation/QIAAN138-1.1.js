{
title: {text:'Coronary artery bypass graft'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of cardiac procedures compare internationally and over time?'},
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
title: {text:'Total procedures per 100,000 population'}
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [87.7,84.4,81.7,78.5,72.9,70.5,69.4,65.4,63.2,57.1,55.9,54.6,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [76.5,76.7,76,77.2,74.7,71.9,68.1,65.5,63,60.5,58.6,57.6,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [39.8,40,37.8,36,32.9,30.3,30.1,30.8,31.2,30.2,28.4,28.5,29.6]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,79.9,75.3,76.4,73.2,70.9,68.5,67.3,68.4]
,index: 4
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,59.1,60.3,59.4,57.8,53.1,49.3,48.2,46.3,43.2,41.6,39.4,37.8]
,index: 5
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [51.4,50.9,50.5,47,41.9,40.7,37.3,38.9,38.7,39,41.6,40.9,43.7]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,null,null,17.9,18.1,17.3,17.8,18.4,17.5,17.5,18.1,17.7]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,50.5,51.1,53.1,46.7,42.1,40.1,37.5,34.6]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [43.3,42.9,43.4,42.2,41.5,37.7,37.6,38.2,36.3,32.9,30.9,30.3,28.8]
,index: 9
},
{
name: 'United States',
visible: false,type: 'line',
data: [111,106.6,105.8,91.8,85.1,88.1,84.6,77,79.5,79,null,null,null]
,index: 10
}
]
}