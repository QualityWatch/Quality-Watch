/* Created by ianb on 27/06/2014 16:15:00 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the percentage of smokers quitting changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of adults on the NHS <br> stop smoking who quit smoking after <br> 4 weeks', offset: 99}
, max: 60
, min: 40
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Successful quitters',
type: 'line',
data: [56.7,56.3,54.7,53.3,51.6,50.2,49.4,48.7,49.1,51.6]
,index: 1
}
]
}
