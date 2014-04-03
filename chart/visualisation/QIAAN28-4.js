/* Created by EFisher on 26/03/2014 16:39:15 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of quitters changed by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13 (Q1-Q3)']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of adults who quit smoking <br> within four weeks of those who set <br> a quit date ', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Under 18',
type: 'line',
data: [39,40,36,37.7,39,32,32,32,33]
,index: 1
},
{
name: '18-34',
visible: false,type: 'line',
data: [50,49,48,46.3,47,44,43,44,45]
,index: 2
},
{
name: '35-44',
visible: false,type: 'line',
data: [55,54,53,51.5,51,51,50,51,52]
,index: 3
},
{
name: '45-59',
visible: false,type: 'line',
data: [59,57,55,53.3,49,52,51,51,53]
,index: 4
},
{
name: '60 and over',
visible: false,type: 'line',
data: [66,64,63,60.2,53,57,56,57,58]
,index: 5
},
{
name: 'All ages',
visible: false,type: 'line',
data: [56,55,53,51.6,50,49,49,49,50]
,index: 6
}
]
}
