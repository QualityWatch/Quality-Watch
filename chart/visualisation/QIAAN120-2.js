/* Created by ianb on 16/12/2014 11:07:47 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people in secondary mental health services are employed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','Apr-13','May-13','Jun-13','Jul-13','Aug-13','Sep-13','Oct-13','Nov-13','Dec-13','Jan-14','Feb-14','Mar-14','Apr-14','May-14','Jun-14','Jul-14','Aug-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults on Care Programme <br> Approach receiving secondary mental <br> health services in employment', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Provisional data',
type: 'line',
data: [4.76,6.02,6.82,7.35,7.9,8.79,8.8,8.9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'Final data',
type: 'line',
data: [null,null,null,null,null,null,null,null,7.12,8.51,8.17,8.76,7.74,7.68,7.87,7.89,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Monthly data',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,7.2,7.09,7.05,6.99,6.89,6.9,7.16,7.21,7.26,7.09,6.91,6.84,6.85,6.86,6.77,6.65,6.62]
,index: 3
}
]
}
