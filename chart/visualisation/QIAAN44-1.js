/* Created by EFisher on 24/01/2014 16:54:53 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the perceptions of the quality of care for community mental health services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004','2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of respondents who stated <br> that their overall care was poor <br> or very poor', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Poor and very poor (pre-2009 questions)',
type: 'column',
data: [9,9,9,10,8,null,null,null,null]
,index: 1
},
{
name: 'Poor and very poor (post-2009 questions)',
type: 'column',
data: [null,null,null,null,null,null,9,9,9]
,index: 2
}
]
}
