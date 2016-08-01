/* Created by NCODowd on 27/07/2016 12:15:45 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of patients feeling threatened in hospital changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007','2008','2009','2010','2011','2012','2013','2014','2015']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients responding <br> yes or no when asked if they felt <br> threatened during their stay ', offset: 99}
, max: 1
, min: 0
, labels: {
}},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'No',
type: 'column',
data: [0.96,0.97,0.96,0.96,0.97,0.97,0.97,0.97,0.97]
,index: 1
},
{
name: 'Yes',
type: 'column',
data: [0.04,0.03,0.04,0.04,0.03,0.03,0.03,0.03,0.03]
,index: 0
}
]
}
