/* Created by ianb on 01/10/2014 11:47:46 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Perceptions of the quality of care for community mental health services in 2013 and 2014'},
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
data: [2,2,3,4,4,10,8,14,20,14,18]
,index: 2
}
]
}
