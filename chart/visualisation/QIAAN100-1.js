/* Created by ianb on 28/04/2015 10:16:16 using v2.6 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the frequency of reported Clostridium difficile infections changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Annual counts of Clostridium Difficile'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'total - 2 years and over',
type: 'line',
data: [55498,36095,25604,21707,18022,14694,13361]
,index: 1
},
{
name: 'trust apportioned - 2 years and over',
type: 'line',
data: [33442,19927,13220,10417,7689,5980,5031]
,index: 2
},
{
name: 'total - 65 years and over',
type: 'line',
data: [45439,28784,20191,16869]
,index: 3
}
]
}
