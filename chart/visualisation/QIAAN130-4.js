/* Created by ianb on 29/05/2014 15:06:59 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of kidney transplants changed?'},
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
title: {text:'Number'}
, labels: {
}},
series:[
{
name: 'Transplants from deceased donors',
type: 'line',
data: [1388,1308,1326,1440,1453,1570,1657,1667,1792,1930]
,index: 1
},
{
name: 'Transplants from living donors',
type: 'line',
data: [349,462,543,671,801,924,983,1027,1026,1034]
,index: 2
},
{
name: 'Transplant waiting list',
type: 'line',
data: [5074,5425,5863,6481,6980,7190,7183,6871,6633,6348]
,index: 3
}
]
}
