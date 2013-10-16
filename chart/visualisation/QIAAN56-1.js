/* Created by ianb on 14/10/2013 11:41:36 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of patients feeling threatened in hospital changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2007','2008','2009','2010','2011','2012']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients responding <br> yes or no when asked if they felt <br> threatened during their stay ', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'No',
type: 'column',
data: [96,96,96,96,97,97]
,index: 1
},
{
name: 'Yes',
type: 'column',
data: [4,4,4,4,3,3]
,index: 0
}
]
}
