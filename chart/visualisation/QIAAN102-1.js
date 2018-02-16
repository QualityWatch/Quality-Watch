/* Created by JMorris on 15/02/2018 14:41:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do mortality rates for adults with a serious mental illness differ from those of the general population in England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Standardised mortality ratio for <br> males and females under 75 in England', offset: 87}
, max: 400
, min: 300
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Female with SMI',
type: 'line',
data: [326.1,318.3,329.9,330.7,340.9,343.7,368.3]
,index: 1
},
{
name: 'Male with SMI',
type: 'line',
data: [336.5,332.9,339.2,342.5,351.8,357.6,371.2]
,index: 2
}
]
}
