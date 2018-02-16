/* Created by JMorris on 15/02/2018 14:44:05 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How successful are reablement services for older people? '},
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
title: {text:'Proportion of older people (aged <br> 65 and over) who are still at home <br> 91 days after discharge from hospital <br> into reablement services', offset: 111}
, max: 95
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [81.9,82.7,81.4,82.5,81.9,82.7,82.5]
,index: 1
}
]
}
