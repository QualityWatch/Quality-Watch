/* Created by ianb on 16/12/2014 11:02:52 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did all types of ACS condition show the same trend over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','','2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
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
data: [485.88,504.37,542.06,573.31,605.13,622.07,627.26,658.72,678.68,702.27,694.1,727.55,717.98,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Chronic',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,710.45,703.48,730.67,744.41,731.52,724.81,692.13,719.29,692.73,700.54,674.52,693.94,668.36,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'Other and vaccine preventable',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,81.29,86.78,94.1,103.93,116.01,116.75,122.6,139.37,168.23,194.2,184.36,204.6,197.03]
,index: 0
}
]
}
