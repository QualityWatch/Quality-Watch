{
title: {text:'Transluminal coronary angioplasty'},
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
data: [115.8,122.9,140.7,157.5,167.1,171.9,172,165.8,165.5,166,170.7,168.5,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [null,null,null,null,null,null,166.1,160.6,160.8,156.2,153.8,153.7,null]
,index: 2
},
{
name: 'France',
visible: false,type: 'line',
data: [142.8,152.8,160.6,171.2,177.6,180.5,186.2,185.6,189.3,194.4,198.7,198,206.3]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,279.3,293.5,302.1,312.7,319.4,338.8,348.8,361.6]
,index: 4
},
{
name: 'Italy',
visible: false,type: 'line',
data: [null,96.5,115.4,133.9,159.2,173.3,192.6,196,198.7,190.6,199.2,197.5,202.8]
,index: 5
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [71.1,80.6,82.6,88.6,104.2,107.6,98.6,105.6,113.1,113.6,117.9,119.3,125.5]
,index: 6
},
{
name: 'Spain',
visible: false,type: 'line',
data: [null,null,null,null,78.4,91.7,96.8,104.3,101.3,111,113.5,115.9,118]
,index: 7
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [null,null,null,null,null,148.9,176.6,173.8,182.4,178.8,183.6,189,196.8]
,index: 8
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [44.5,51.5,60.4,75,89.8,98.6,106.8,105.7,112.3,115.7,119.8,121.7,123.6]
,index: 9
},
{
name: 'United States',
visible: false,type: 'line',
data: [195.7,198.4,226.2,227,225.9,221.6,233.3,204.5,200.3,193.3,156.6,null,null]
,index: 10
}
]
}