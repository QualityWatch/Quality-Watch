/* Created by ianb on 16/12/2014 11:17:04 using v2.3 */
{
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the trends in hospital admissions as a result of self-harm for children and young people?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007/08 - 09/10','2008/09 - 10/11','2009/10 - 11/12','2010/11 - 12/13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Directly Standardised Rate per 100,000 <br> (Age 10-24)', offset: 87}
, min: 0
, labels: {
}},
series:[
{
name: 'Hospital admissions as a result of self-harm for ages 10-24',
type: 'line',
data: [329.53,342.31,347.93,352.26]
,index: 1
}
]
}
