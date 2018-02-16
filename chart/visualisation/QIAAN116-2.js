/* Created by JMorris on 15/02/2018 14:40:51 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How involved do people feel in discussions about how their care is working? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Yes, definitely','Yes, to some extent','No, but I wanted to be']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of respondents who felt <br> that they were/were not involved <br> in discussing how their care was <br> working ', offset: 111}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2014',
type: 'column',
data: [60.1,32.9,7]
,index: 1
},
{
name: '2015',
type: 'column',
data: [59.7,32.9,7.4]
,index: 2
},
{
name: '2016',
type: 'column',
data: [60.1,32,7.9]
,index: 3
},
{
name: '2017',
type: 'column',
data: [60.3,31.5,8.2]
,index: 4
}
]
}
