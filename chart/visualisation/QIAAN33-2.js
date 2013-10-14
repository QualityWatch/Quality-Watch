/* Created by ianb on 14/10/2013 11:39:45 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of women having adequate cervical screening changed by age?'},
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
title: {text:'Percentage of women in a population <br> eligible for cervical screening <br> who were screened adequately', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Cervical screening coverage of women within 3.5 years (25 - 49)',
type: 'line',
data: [71.7,71.2,70.6,69.6,69.6,69.2,69.3,72.5,74,73.7,73.5]
,index: 1
},
{
name: 'Cervical screening coverage of women within 5 years (50 - 64)',
type: 'line',
data: [81,81,80.8,81,80.7,80.5,80.3,80,78.9,78,77.8]
,index: 2
},
{
name: 'Cervical screening coverage of women (25-64)',
type: 'line',
data: [74.3,74,73.5,72.9,72.8,72.5,72.5,74.7,75.5,75,74.8]
,index: 3
}
]
}
