/* Created by JMorris on 15/02/2018 14:47:38 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of obese 10-11 year old children changed over time?'},
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
title: {text:'Proportion of 10-11 year olds (%)'}
, max: 100
, labels: {
format: '{value:.1f}' 
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'obese',
type: 'column',
data: [17.5,18.3,18.3,18.7,19,19.2,18.9,19.1,19.1,19.8,20]
,index: 3
},
{
name: 'overweight',
type: 'column',
data: [14.2,14.3,14.3,14.6,14.4,14.7,14.4,14.4,14.2,14.3,14.3]
,index: 2
},
{
name: 'healthy weight',
type: 'column',
data: [66.9,66,66.1,65.4,65.3,64.9,65.4,65.1,65.3,64.5,64.4]
,index: 1
},
{
name: 'underweight',
type: 'column',
data: [1.5,1.4,1.3,1.3,1.3,1.3,1.3,1.4,1.4,1.3,1.3]
,index: 0
}
]
}
