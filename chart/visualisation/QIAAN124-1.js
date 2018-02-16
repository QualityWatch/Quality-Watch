/* Created by JMorris on 15/02/2018 14:40:58 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of adults with learning disabilities live in their own home or with their family?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011-12','2012-13','2013-14','2014-15','2015-16','2016-17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults with a learning <br> disability who live in their own <br> home or with their family', offset: 99}
, max: 80
, min: 60
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of working age (18-64) service users who received long-term support during the year with a primary support reason of learning disability support, who are living on their own or with their family (%)',
type: 'column',
data: [70,73.5,74.9,73.3,75.4,76.2]
,index: 1
}
]
}
