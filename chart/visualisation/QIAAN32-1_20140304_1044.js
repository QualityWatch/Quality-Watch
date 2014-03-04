/* Created by ianb on 04/03/2014 10:44:16 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of women screened changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of women in a population <br> eligible for screening who were <br> screened adequately', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Breast cancer screening coverage of women (53-70)',
type: 'line',
data: [63.5,63.9,65.3,67.7,71.3,73.8,75.9,76.5,76.9,77.2,77,null]
,index: 1
},
{
name: 'Cervical screening coverage of women (25-64)',
type: 'line',
data: [74.33,73.99,73.52,72.87,72.81,72.49,72.52,74.72,75.46,75,74.8,73.33]
,index: 2
}
]
}
