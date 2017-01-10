/* Created by NCODowd on 24/05/2016 16:31:54 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Perceptions of the quality of care for community mental health services'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Overall experience'}
, categories: ['0 (very poor)',1,2,3,4,5,6,7,8,9,'10 (very good)']
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
name: '2014',
type: 'column',
data: [2,2,3,4,4,10,8,14,19,14,18]
,index: 1
},
{
name: '2015',
type: 'column',
data: [3,2,3,5,5,11,8,13,20,13,17]
,index: 2
},
{
name: '2016',
type: 'column',
data: [3,2,3,4,5,10,8,12,20,14,19]
,index: 3
}
]
}
