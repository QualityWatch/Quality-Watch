/* Created by ianb on 29/05/2014 15:03:35 using v2.1 */{
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
, min: 40
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [58.6,59.3,60.4,61.3,62.1,62.9,63.7,64.3,65.1,65.7,66.2,null,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [57.8,59.1,59.7,59.7,60.5,61.2,63,63.4,63.5,null,null,null,null]
,index: 2
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [48.1,49.2,50,50.7,51.3,52.6,53.5,54.7,55.3,57.1,58.6,null,null]
,index: 3
},
{
name: 'Finland',
visible: false,type: 'line',
data: [56.2,57.4,57.5,59.9,59.9,60.4,61.3,61.8,62,63.2,63.8,null,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,62.3,62.1,62.5,63.4,null]
,index: 5
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [56.5,56.5,57.3,57.5,58,58.6,59.6,60.2,60.3,60.7,61.7,63.1,63.9]
,index: 6
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [45.1,46.8,48.1,50,50.7,51.9,51.6,51.8,52.8,53,53.2,54,54.5]
,index: 7
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,64.5,64.7,null,null,null]
,index: 8
}
]
}
