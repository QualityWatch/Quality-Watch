/* Created by EFisher on 26/03/2014 17:05:18 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the number of ACS admissions increased over time?'},
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
title: {text:'Number of admissions'}
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Non-ACS',
type: 'column',
data: [3112289,3154452,3362723,3551777,3742817,3765784,3804179,4002415,4147953,4198372,4167965,4162451]
,index: 2
},
{
name: 'ACS (primary diagnosis)',
type: 'column',
data: [678460,693903,735456,771544,793606,804330,804310,858826,877104,920185,915707,965157]
,index: 1
},
{
name: 'ACS (secondary diagnosis)',
type: 'column',
data: [25693,28252,31132,33400,37500,41313,46295,52524,60970,70653,74442,78756]
,index: 0
}
]
}
