/* Created by ianb on 07/05/2014 13:26:50 using v2.1 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the volumes of PTCA procedure by provider changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of trusts'}
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Trusts below recommended volume',
type: 'column',
data: [60,69,76,79,81,59,54,47,40,43,22,23]
,index: 1
},
{
name: 'Trusts above or equal to recommended volume',
type: 'column',
data: [7,5,2,2,2,45,57,63,68,69,74,78]
,index: 0
}
]
}
