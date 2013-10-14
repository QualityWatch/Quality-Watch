/* Created by ianb on 14/10/2013 11:39:42 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of women screened changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of women in a population <br> eligible for screening who were <br> screened adequately', offset: 99}
, max: 80
, min: 60
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Breast cancer screening coverage of women (53 - 70)',
type: 'line',
data: [63.5,63.9,65.3,67.7,71.3,73.8,75.9,76.5,76.9,77.2,77]
,index: 1
},
{
name: 'Cervical screening coverage of women (25-64)',
type: 'line',
data: [74.3,74,73.5,72.9,72.8,72.5,72.5,74.7,75.5,75,74.8]
,index: 2
}
]
}
