/* Created by ianb on 01/10/2014 11:54:08 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the number of calls resulting in an emergency response changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Monthly number of category A calls'}
, max: 500000
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Number category A',
type: 'column',
data: [194617,200706,196613,205952,197883,201988,217997,208380,235387,223779,216615,228985,215997,225609]
,index: 4
},
{
name: 'Percentage',
type: 'line',
data: [0.77,0.77,0.75,0.77,0.78,0.76,0.76,0.77,0.74,0.78,0.74,0.76,0.76,0.75,0.77,0.77,0.78,0.76,0.76,0.76,0.71,0.76,0.75,0.74,0.76,0.78,0.77,0.74,0.75,0.74,0.74,0.73,0.72,0.76,0.74,0.75,0.74,0.73,0.71,0.69]
,index: 4
},
{
name: 'Eight minute target',
type: 'line',
data: [0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75]
,index: 3
},
{
name: 'Number red 1',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,10453,10860,11053,11171,11117,11254,13360,11958,10841,12306,11147,10873,10207,11328,11399,10679,11156,11095,12849,11915,10763,11829,12053,12840,12439,13283]
,index: 3
},
{
name: 'Number red 2',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,203988,211754,204238,202751,216511,214057,244519,225511,205301,236512,224352,224842,214799,228733,221441,216928,233469,227179,249721,234247,218545,242633,235255,249815,240914,248827]
,index: 2
}
]
}
