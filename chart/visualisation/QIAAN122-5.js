/* Created by ianb on 29/05/2014 15:03:30 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year cervical cancer survival in the UK compare to other countries?'},
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
title: {text:'Cervical cancer five-year relative <br> survival (15-99)', offset: 87}
, min: 50
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [68.6,68.1,68.3,67.6,67.6,67.2,67,67.9,67.4,67.9,67.5,null,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [67.3,68.2,62.3,66.7,68.8,71.4,71.7,64.9,66,null,null,null,null]
,index: 2
},
{
name: 'Finland',
visible: false,type: 'line',
data: [60.7,64.5,68.2,71.9,70.1,65.8,65.4,68.4,61.9,63.9,65.1,null,null]
,index: 3
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [55.9,59.2,59.4,59.6,60.9,59.7,58.7,56.9,57.6,56.6,57.2,null,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,66.4,68.1,65,64.7,null]
,index: 5
},
{
name: 'Norway',
visible: false,type: 'line',
data: [68.4,61.4,68.8,67.6,68,74.2,65.5,67.2,72.8,78.2,71.5,71.4,null]
,index: 6
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [66.2,67.1,65.6,63.8,64.4,65.7,66,65.8,65.6,68.1,67.3,68.4,67.3]
,index: 7
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [57.7,56.5,57.9,58.7,57,60,60.2,57.8,57.1,58.7,60.1,60.7,60.9]
,index: 8
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,64.4,62.2,null,null,null]
,index: 9
}
]
}
