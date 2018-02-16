/* Created by JMorris on 06/02/2018 11:58:48 using v2.7 */{
title: {text:'Gender'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does successful reablement vary by age and sex?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of older people (aged <br> 65 and over) who are still at home <br> 91 days after discharge into reablement <br> services', offset: 111}
, max: 95
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Males',
type: 'line',
data: [80.4,79.3,79.6,80.1,80.2,80.1]
,index: 1
},
{
name: 'Females',
type: 'line',
data: [84,82.6,84.3,83.3,84.2,83.9]
,index: 2
}
]
}
