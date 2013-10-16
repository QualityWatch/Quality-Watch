/* Created by ianb on 14/10/2013 11:43:25 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Why are patients exiting drug treatment and how has this changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of service users and <br> their reason reason for exiting <br> drug treatment', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '% Completed free of dependency',
type: 'line',
data: [20.7,25.2,31.2,40.7,null,null,null]
,index: 1
},
{
name: '% Transferred - not in custody',
type: 'line',
data: [null,null,null,null,14.9,14.5,13.5]
,index: 2
},
{
name: '% Transferred - in custody',
type: 'line',
data: [null,null,null,null,8.4,10.6,11.3]
,index: 3
},
{
name: '% Referred on (old code)',
type: 'line',
data: [10.5,14,17.7,15,null,null,null]
,index: 4
},
{
name: '% Incomplete (including not known)',
type: 'line',
data: [68.7,60.8,51.1,44.3,null,null,null]
,index: 5
},
{
name: '% Completed free of dependency',
type: 'line',
data: [null,null,null,null,37.8,43,47.4]
,index: 6
},
{
name: '% Referred on (old code)',
type: 'line',
data: [null,null,null,null,1.7,0.4,0]
,index: 7
},
{
name: '% Incomplete (including not known)',
type: 'line',
data: [null,null,null,null,37.2,31.5,27.8]
,index: 8
}
]
}
