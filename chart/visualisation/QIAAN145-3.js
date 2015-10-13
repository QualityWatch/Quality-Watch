/* Created by EFisher on 12/10/2015 14:33:32 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of inpatients warned of danger signals on discharge changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2002','2005','2006','2007','2008','2009','2010','2011','2012','2013','1905']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of respondents'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, completely',
type: 'column',
data: [41,40,39,39,40,39,41,42,41,43,43]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [20,21,21,21,21,21,21,21,21,21,21]
,index: 1
},
{
name: 'No',
type: 'column',
data: [39,40,40,41,39,40,38,38,38,36,35]
,index: 0
}
]
}
