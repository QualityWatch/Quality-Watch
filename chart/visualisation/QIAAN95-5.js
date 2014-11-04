/* Created by ianb on 04/11/2014 13:01:08 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do inpatients report having their admission date changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012','2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of inpatients who <br> had their admission date changed <br> by the hospital.', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'No',
type: 'column',
data: [80,80,79,80,80,79,79,80,81]
,index: 3
},
{
name: 'Yes, once',
type: 'column',
data: [17,17,18,17,17,17,17,16,16]
,index: 2
},
{
name: 'Yes, 2 or 3 times',
type: 'column',
data: [3,3,3,3,3,3,3,3,3]
,index: 1
},
{
name: 'Yes, 4 times or more',
type: 'column',
data: [0,0,0,0,0,0,0,0,0]
,index: 0
}
]
}
