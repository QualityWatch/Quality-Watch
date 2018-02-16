/* Created by JMorris on 15/02/2018 14:44:07 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of older people receive reablement services after discharge from hospital?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of older people (aged <br> 65 and over) who received reablement <br> services after discharge from hospital', offset: 99}
, max: 4
, min: 2
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage of older people discharged from hospital who received a reablement service',
type: 'line',
data: [3,3.2,3.2,3.3,3.06,2.92,2.7]
,index: 1
}
]
}
