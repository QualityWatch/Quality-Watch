/* Created by JMorris on 15/02/2018 14:47:37 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of obese 4-5 year old children changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of 4-5 year olds (%)'}
, max: 100
, labels: {
format: '{value:.1f}' 
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'obese',
type: 'column',
data: [9.9,9.6,9.6,9.8,9.4,9.5,9.3,9.5,9.1,9.3,9.6]
,index: 3
},
{
name: 'overweight',
type: 'column',
data: [13,13,13.2,13.3,13.2,13.1,13,13.1,12.8,12.8,13]
,index: 2
},
{
name: 'healthy weight',
type: 'column',
data: [75.8,76.2,76.2,76,76.4,76.5,76.9,76.5,77.2,76.9,76.4]
,index: 1
},
{
name: 'underweight',
type: 'column',
data: [1.3,1.3,1,0.9,1,0.9,0.9,0.9,1,1,1]
,index: 0
}
]
}
