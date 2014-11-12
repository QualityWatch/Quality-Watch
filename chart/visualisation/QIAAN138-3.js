{
title: {text:'Caesarean section'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the rate of caesarean sections compare internationally and over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, 

categories: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Total procedures per 1000 live births'}
, min: 100
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Canada',
type: 'line',
data: 

[209.1,221.7,234.1,247.8,253.2,261.9,262.3,266.1,263.6,261.7,261.1,262.4,null]
,index: 1
},
{
name: 'Finland',
visible: false,type: 'line',
data: 

[157.8,164,163.6,161.6,163.9,162.8,161.4,162.6,164.9,157.5,161.4,161.8,161.9]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: 

[178.4,185.5,192,193.1,193.9,198.8,202.4,207.2,206.4,207.7,210.2,210,207.6]
,index: 3
},
{
name: 'Italy',
visible: false,type: 'line',
data: 

[null,352.6,366.2,378.2,383.8,390.9,394.6,392.2,385.9,387.6,384.6,377.1,368.4]
,index: 4
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: 

[118.7,136.4,135.2,135.3,136.4,135.7,137.8,139.2,143,148.4,155.9,null,null]
,index: 5
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: 

[202.9,213.5,224.3,224.3,225.4,230.3,244.2,232.1,232.7,240.7,237.5,243.1,254.7]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: 

[null,224.7,234.5,237.8,243.1,251,260.1,253.6,247.4,250.1,249.6,249.1,251.5]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: 

[null,null,null,null,null,168.1,171.7,171.7,166.7,169.3,164.4,162.1,163]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: 

[196.6,206.4,212.8,218.8,216.8,226.4,228.3,235.6,231.7,236.8,238.6,241.9,244.2]
,index: 9
}
]
}
