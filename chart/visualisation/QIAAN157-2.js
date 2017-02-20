/* Created by NCODowd on 21/04/2016 16:16:28 using v2.7 */
/* Created by EFisher on 20/04/2016 14:57:34 using v2.7 */

{title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Why are patients exiting drug treatment and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009-10','2010-11','2011-12','2012-13','2013-14','2014-15', '2015-16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:''}
, max: 60
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Dropped out/left',
type: 'column',
data: [30.2,26.9,24.8,25.1,25.8,27.4,30.3]
,index: 4
},
{
name: 'Transferred - (in/not in custody)',
type: 'column',
data: [17.1,16.2,15.5,15.1,15.1,14.9,13.2]
,index: 3
},
{
name: 'Other',
type: 'column',
data: [4.1,3,2.9,2.5,2.7,2.8,3.2]
,index: 2
},
{
name: 'Treatment declined ',
type: 'column',
data: [3.8,3.6,3.1,2.9,2.7,2.2,2.2]
,index: 1
},
{
name: 'Treatment withdrawn',
type: 'column',
data: [1.8,1.4,1.1,1,0.8,0.8,0.6]
,index: 0
},
{
name: 'Treatment completed free of dependence',
type: 'line',
data: [43.0,48.9,52.6,53.3,52.9,51.9,50.5]
,index: 5
}
]
}
