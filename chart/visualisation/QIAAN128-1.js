/* Created by ianb on 07/05/2014 13:26:45 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the volumes of CABG procedures by provider changed?'},
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
name: 'Trusts below reccomended volume',
type: 'column',
data: [33,40,32,35,29,32,36,37,33,29,31,33]
,index: 1
},
{
name: 'Trusts above or equal to reccomended volume',
type: 'column',
data: [27,28,28,28,29,28,29,29,28,28,29,27]
,index: 0
}
]
}
