/* Created by ianb on 08/10/2013 13:50:04 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of social care users who feel safe changed by age?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18 to 64','65 and over']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people who use  social <br> care servicesand feel as safe as <br> they wanted ', offset: 99}
, max: 90
, min: 50
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011-12',
type: 'column',
data: [60.6,65.6]
,index: 1
},
{
name: '2012-13',
type: 'column',
data: [61.3,67]
,index: 2
}
]
}
