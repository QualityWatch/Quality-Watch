/* Created by EFisher on 26/03/2014 16:39:56 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of women being invited for cervical screening changed?'},
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
title: {text:'Proportion of eligible women invited <br> for testing by age group', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of women invited (25-49)',
type: 'line',
data: [33.1,32.4,32.1,35.9,35.7,34.1,35.3,38.6,34.6]
,index: 1
},
{
name: 'Proportion of women invited (50-64)',
type: 'line',
data: [29.9,27.5,26.1,20.6,16.2,20.2,23.1,23.6,21.2]
,index: 2
},
{
name: 'Proportion of women invited (25-64)',
type: 'line',
data: [32.2,31,30.4,31.4,29.9,30,31.6,34,30.5]
,index: 3
}
]
}
