/* Created by JMorris on 28/11/2017 12:59:52 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does public and private health expenditure vary across Europe?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Greece','Luxembourg','Ireland','Portugal','Spain','Italy','Finland','United Kingdom','Austria','Belgium','Netherlands','France','Denmark','Sweden','Germany']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of GDP (2016 estimated <br> values)', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Public health expenditure',
type: 'column',
data: [4.8,5.3,5.5,5.9,6.3,6.7,7,7.7,7.8,8,8.5,8.7,8.7,9.2,9.5]
,index: 1
},
{
name: 'Private health expenditure',
type: 'column',
data: [3.5,1.1,2.3,3,2.6,2.2,2.4,2,2.5,2.4,2,2.3,1.7,1.8,1.7]
,index: 0
}
]
}
