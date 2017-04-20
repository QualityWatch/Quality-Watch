/* Created by rreed on 4/19/2017 4:41:52 PM using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children by their second birthday - England'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Time period of second birthday'}
, categories: ['1994/95','1995/96','1996/97','1997/98','1998/99','1999/00','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','Q1 2014/15','Q2 2014/15','Q3 2014/15','Q4 2014/15','Q1 2015/16','Q2 2015/16','Q3 2015/16','Q4 2015/16','Q1 2016/17','Q2 2016/17']
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
series:[
{
name: 'Pneumococcal Disease (PCV) booster',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,81.5,87.6,89.3,91.5,92.5,92.4,90,92.3,91.9,92.1,91.8,92.1,91.7,91.3,91.4,91.4]
,index: 1
},
{
name: 'Measles, Mumps, Rubella (MMR)',
type: 'line',
data: [91.3,91.8,91.5,90.8,88.3,87.6,87.4,84.1,81.8,79.9,80.9,84.1,85.2,84.6,84.9,88.2,89.1,91.2,92.3,92.7,95,92.2,91.8,92,91.8,91.5,91.4,91.5,91.4,91.2]
,index: 2
},
{
name: 'Hib/MenC booster',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,85.4,90,91.6,92.3,92.7,92.5,92.3,92.2,91.8,92.1,91.9,91.8,91.7,91.5,91.5,91.2]
,index: 3
}
]
}
