/* Created by ianb on 26/06/2015 16:56:39 using v2.6 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children by their second birthday'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Time period of second birthday'}
, categories: ['1994/95','1995/96','1996/97','1997/98','1998/99','1999/00','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','Q1 2014/15','Q2 2014/15','Q3 2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children in England <br> immunised by their second birthday', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Pneumococcal Disease (PCV) booster',
visible: true,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,81.5,87.6,89.3,91.5,92.5,92.4,null,null,null]
,index: 1
},
{
name: 'Measles, Mumps, Rubella (MMR)',
visible: false,type: 'line',
data: [91.3,91.8,91.5,90.8,88.3,87.6,87.4,84.1,81.8,79.9,80.9,84.1,85.2,84.6,84.9,88.2,89.1,91.2,92.3,92.7,null,null,null]
,index: 2
},
{
name: 'Hib/MenC booster',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,85.4,90,91.6,92.3,92.7,92.5,null,null,null]
,index: 3
},
{
name: 'Pneumococcal Disease (PCV) booster',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,90,92.3,91.9]
,index: 1
},
{
name: 'Measles, Mumps, Rubella (MMR)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,95,92.2,91.8]
,index: 2
},
{
name: 'Hib/MenC booster',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92.3,92.2,91.8]
,index: 3
}
]
}
