/* Created by ianb on 27/04/2015 18:07:09 using v2.5 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Vaccination coverage in children by their first birthday'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Time period of first birthday'}
, categories: ['1994/95','1995/96','1996/97','1997/98','1998/99','1999/00','2000/01','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','Q1 2014/15','Q2 2014/15','Q3 2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {max: 100, 
title: {text:'Percentage of children England immunised <br> by their first birthday', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Diphtheria',
visible: true,type: 'line',
data: [93,93.1,93.2,92.5,92,92,91.2,90.7,90.9,90.9,90.1,91.4,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'Tetanus',
visible: false,type: 'line',
data: [93,93.1,93.2,92.5,92,92,91,90.7,90.9,90.9,90.1,91.3,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Polio',
visible: false,type: 'line',
data: [93,93,93.1,92.5,92,92,91.1,90.5,90.8,90.9,90,91.3,null,null,null,null,null,null,null,null,null,null,null]
,index: 3
},
{
name: 'Pertussis (Whooping Cough)',
visible: false,type: 'line',
data: [90.7,91.6,91.8,91.4,91.1,91.2,90.5,90.2,90.5,90.6,89.9,91.4,null,null,null,null,null,null,null,null,null,null,null]
,index: 4
},
{
name: 'Haemophilus Influenzae b (Hib)',
visible: false,type: 'line',
data: [92,92.6,92.8,92.2,91.7,91.8,90.9,90.5,90.7,90.8,89.9,91.3,null,null,null,null,null,null,null,null,null,null,null]
,index: 5
},
{
name: 'Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib)',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,91.1,91.3,92,93.6,94.2,94.7,94.7,94.3,null,null,null]
,index: 6
},
{
name: 'Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,93.9,93.9,94.1]
,index: 1
},
{
name: 'MenC',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,89.1,90,90.2,89.6,90.9,91,90.3,91.2,92.7,93.4,93.9,93.9,null,null,null,null]
,index: 7
},
{
name: 'Men C',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,96,null]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV)',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,83.7,91.3,92.9,93.6,94.2,94.4,94.1,null,null,null]
,index: 8
},
{
name: 'Pneumococcal Disease (PCV)',
visible: false,type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,93.7,93.5,94]
,index: 3
}
]
}
