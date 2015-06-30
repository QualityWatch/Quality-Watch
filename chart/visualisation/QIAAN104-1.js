/* Created by ianb on 26/06/2015 16:56:44 using v2.6 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the number of ACS admissions increased over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001/02','2002/03','2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of admissions'}
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Non-ACS',
type: 'column',
data: [3112290,3154454,3362724,3551780,3742822,3765790,3804195,4002511,4149759,4204330,4168738,4196846,4182686]
,index: 2
},
{
name: 'ACS (primary diagnosis)',
type: 'column',
data: [678460,693903,735456,771544,793606,804330,804309,858838,877455,921316,915740,972720,954025]
,index: 1
},
{
name: 'ACS (secondary diagnosis)',
type: 'column',
data: [25693,28252,31132,33400,37500,41313,46295,52527,61016,70732,74447,80652,85217]
,index: 0
}
]
}
