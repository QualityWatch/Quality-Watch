/* Created by EFisher on 12/10/2015 14:33:22 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of obese 10-11 year old children changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of 10-11 year olds (%)'}
, labels: {
format: '{value:.1f}' 
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Overweight',
type: 'column',
data: [14.2,14.3,14.3,14.6,14.4,14.7,14.4,14.4]
,index: 2
},
{
name: 'Obese',
type: 'column',
data: [17.5,18.3,18.3,18.7,19,19.2,18.9,19.1]
,index: 1
},
{
name: 'Underweight',
type: 'column',
data: [1.5,1.4,1.3,1.3,1.3,1.3,1.3,1.4]
,index: 0
}
]
}
