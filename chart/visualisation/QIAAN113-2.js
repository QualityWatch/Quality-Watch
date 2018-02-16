/* Created by JMorris on 15/02/2018 14:45:08 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the smoking status of pregnant women and the number of maternities changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003/04','2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of maternities'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Total maternities',
type: 'line',
data: [566355,576935,583011,601262,634035,640681,652967,659543,664691,658112,632956,622643,631225,619234]
,index: 1
},
{
name: 'Smokers',
type: 'line',
data: [93489,97558,90661,90887,91573,92123,91328,89211,87640,83487,75913,70879,67195,65023]
,index: 2
},
{
name: 'Non-smokers',
type: 'line',
data: [394962,440110,456508,485511,532503,538202,550242,563749,570786,566101,548203,533178,544282,542096]
,index: 3
},
{
name: 'Unknown smoking status',
type: 'line',
data: [77904,39267,35842,24864,9959,10356,11397,6583,6265,8524,8840,18586,19748,12115]
,index: 4
}
]
}
