/* Created by ianb on 17/01/2014 17:26:13 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did all types of ACS condition show the same trend over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Directly standardised rate of admission <br> per 100,000 population', offset: 87}
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Acute',
type: 'column',
data: [485.88,504.35,542.04,573.32,605.12,622.06,627.26,658.71,678.45,701.37,694.1,723.23,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Chronic',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,710.46,703.49,730.68,744.42,731.54,724.8,692.13,719.28,692.42,699.77,674.51,689.27,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'Other and vaccine preventable',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,81.29,86.77,94.1,103.94,116.01,116.74,122.61,139.38,168.16,194.05,184.35,201.16]
,index: 0
}
]
}
