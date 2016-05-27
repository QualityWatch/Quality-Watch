/* Created by NCODowd on 24/05/2016 16:31:54 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Perceptions of the quality of care for community mental health services'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Overall care experience, going from very poor (0) to very good (10)'}
, categories: [0,1,2,3,4,5,6,7,8,9,10]
, labels: {
}
},
yAxis: {
title: {text:'The proportion of users who overall <br> felt their care experience was very <br> poor (0) to very good (10)', offset: 99}
, max: 20
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2013',
type: 'column',
data: [2,2,2,4,4,10,8,14,20,15,18]
,index: 1
},
{
name: '2014',
type: 'column',
data: [2.3,2.2,2.7,3.9,4.4,10,8.2,14.1,19.6,14.3,18.4]
,index: 2
},
{
name: '2015',
type: 'column',
data: [2.8,2.2,2.8,4.5,4.8,10.8,8,13.3,19.6,13.6,17.5]
,index: 3
}
]
}
