/* Created by rreed on 05/01/2017 15:05:23 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year colorectal cancer survival in the UK compare to other countries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1995-2000','1996-2001','1997-2002','1998-2003','1999-2004','2000-2005','2001-2006','2002-2007','2003-2008','2004-2009','2005-2010','2006-2011','2007-2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Colorectal cancer five-year relative <br> survival (15-99)', offset: 87}
, max: 100
, min: 40
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
visible: true,type: 'line',
data: [58.6,59.3,60.4,61.3,62.1,62.9,63.7,64.3,65.1,65.7,66.2,null,null]
,index: 1
},
{
name: 'Belgium',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,63.5,64.5,null,null]
,index: 2
},
{
name: 'Canada',
visible: false,type: 'line',
data: [57.8,59.1,59.7,59.7,60.5,61.2,63,63.4,63.5,null,null,null,null]
,index: 3
},
{
name: 'Germany',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,64.3,null,null,null]
,index: 4
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [48.1,49.2,50,50.7,51.3,52.6,53.5,54.7,55.3,57.1,58.6,null,null]
,index: 5
},
{
name: 'Korea',
visible: false,type: 'line',
data: [53.1,55.6,57.4,59.3,61.4,62.5,64.6,66,67.3,68.7,68.7,72.8,null]
,index: 6
},
{
name: 'Netherlands',
visible: false,type: 'line',
data: [56.2,58.2,57.9,58.2,58.2,60.2,58.9,59,60.6,60.9,62,62.9,null]
,index: 7
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,62.3,62.1,62.5,63.4,null]
,index: 8
},
{
name: 'Portugal',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,55,55.8,57.2,58.3,null,null]
,index: 9
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [56.5,56.5,57.3,57.5,58,58.6,59.6,60.2,60.3,60.7,61.7,63.1,63.9]
,index: 10
},
{
name: 'United Kingdom',
visible: true,type: 'line',
data: [45.1,46.8,48.1,50,50.7,51.9,51.6,51.8,52.8,53,53.2,54,54.5]
,index: 11
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,64.5,64.7,null,null,null]
,index: 12
}
]
}
