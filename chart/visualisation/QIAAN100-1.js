/* Created by ianb on 14/10/2013 11:38:43 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of Clostridium difficile changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Annual counts of Clostridium difficile'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'total - 2 years and over',
type: 'line',
data: [55498,36095,25604,21695,18022,14687]
,index: 1
},
{
name: 'Trust apportioned - 2 years and over',
type: 'line',
data: [33442,19927,13221,10414,7689,5974]
,index: 2
},
{
name: 'total - 65 years and over',
type: 'line',
data: [45439,28784,20191,16869,null,null]
,index: 3
}
]
}
