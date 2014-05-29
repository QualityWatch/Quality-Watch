/* Created by ianb on 29/05/2014 15:03:25 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does five-year breast cancer survival in the UK compare to other countries?'},
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
title: {text:'Breast cancer five-year relative <br> surival (15-99)', offset: 87}
, min: 65
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Australia',
type: 'line',
data: [83.2,83.9,84.6,85.2,85.8,86.1,86.5,86.8,87.2,87.5,87.7,null,null]
,index: 1
},
{
name: 'Canada',
visible: false,type: 'line',
data: [83.3,85.8,85.6,85,86.7,87.2,87.5,86.6,87.7,null,null,null,null]
,index: 2
},
{
name: 'Finland',
visible: false,type: 'line',
data: [81.6,84.2,85.8,83.7,87.1,86.5,84.7,85.2,86.1,87.4,85.9,null,null]
,index: 3
},
{
name: 'Ireland',
visible: false,type: 'line',
data: [71.2,71.7,72.9,74.4,75.4,76.3,77.3,78.9,79.5,80,80.5,null,null]
,index: 4
},
{
name: 'New Zealand',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,84.4,84.5,85.6,86.4,null]
,index: 5
},
{
name: 'Sweden',
visible: false,type: 'line',
data: [81.8,82.6,83.1,83.8,84.5,85.3,85.7,86.1,86.1,86,85.9,86.3,87.4]
,index: 6
},
{
name: 'United Kingdom',
visible: false,type: 'line',
data: [72.1,72.8,75,76.6,77.1,78.4,78.6,78.8,80.4,80.8,81.9,80.7,82]
,index: 7
},
{
name: 'United States',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,89.3,88.7,null,null,null]
,index: 8
}
]
}
