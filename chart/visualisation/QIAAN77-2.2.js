/* Created by JMorris on 06/02/2018 12:01:29 using v2.7 */{
title: {text:'Age'},
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
title: {text:'Proportion of older people who are <br> still at home 91 days after discharge <br> into reablement services', offset: 99}
, max: 95
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Total aged 65 and over',
type: 'line',
data: [82.7,81.4,82.5,81.9,82.7,82.5]
,index: 1
},
{
name: 'Aged 65 to 74',
type: 'line',
data: [87.3,85.1,85.8,86.1,85.4,85.7]
,index: 2
},
{
name: 'Aged 75 to 84',
type: 'line',
data: [84.2,83.6,83.9,83.9,84.2,83.7]
,index: 3
},
{
name: 'Aged 85 and over',
type: 'line',
data: [79.8,78.2,80.2,79.1,80.4,80.3]
,index: 4
}
]
}
