/* Created by ianb on 22/10/2013 11:27:32 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of smokers quitting changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of adults on the NHS <br> stop smoking  who quit smoking after <br> 4 weeks', offset: 99}
, max: 60
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Successful quitters ',
type: 'line',
data: [52.7,52.8,57,56,55,53,52,50,49,49,49]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Successful quitters  trendline',
data: [[0, 56.3],[10, 49.7]]
}
]
}
