/* Created by NCODowd on 14/09/2016 15:40:55 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Does feeling supported to manage their long-term condition(s) differ by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['1 - Most deprived',2,3,4,5,6,7,8,9,'10 - Least deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of people who feel supported <br> to manage their long-term condition', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Indicator value',
type: 'column',
data: [60.8,61,62,63.7,64.5,65.6,66.1,66.8,66.8,68.2]
,index: 1
}
]
}
