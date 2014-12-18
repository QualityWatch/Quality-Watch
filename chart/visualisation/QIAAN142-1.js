/* Created by ianb on 18/12/2014 10:43:25 using v2.3 */
{
title: {text:'Reception'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of obese 4-5 year old children changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Prevalence (%)'}
, max: 40
, labels: {
format: '{value:.1f}' 
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Overweight',
type: 'column',
data: [13.1,13,13.2,13.3,13.2,13.1,13]
,index: 2
},
{
name: 'Obese',
type: 'column',
data: [9.9,9.6,9.6,9.8,9.4,9.5,9.3]
,index: 1
},
{
name: 'Underweight',
type: 'column',
data: [1.3,1.3,1,0.9,1,0.9,0.9]
,index: 0
}
]
}
