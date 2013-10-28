/* Created by ianb on 14/10/2013 11:39:28 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of quitters changed by gender?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13 (Q1-Q3)']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of adults who quit smoking <br> within four weeks of those who set <br> a quit date ', offset: 99}
, max: 60
, min: 40
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'All',
type: 'line',
data: [53,53,57,56,55,53,51.6,50,49,49,49,50]
,index: 1
},
{
name: 'Male',
type: 'line',
data: [54,54,58,58,56,54,52.7,51,51,50,51,52]
,index: 2
},
{
name: 'Female',
type: 'line',
data: [52,52,56,55,54,52,50.6,49,48,48,48,49]
,index: 3
}
]
}
