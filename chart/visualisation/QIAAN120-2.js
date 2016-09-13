/* Created by NCODowd on 13/09/2016 11:07:27 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of people in secondary mental health services are employed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13','2013-14','2014-15']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of adults on Care Programme <br> Approach receiving secondary mental <br> health services in employment', offset: 99}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [950,890,880,700,680]
,index: 1
}
]
}
