/* Created by rreed on 05/01/2017 15:04:19 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of older people can access a reablement service?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of older people (over <br> 65) discharged from hospital who <br> were offered a reablement/rehabilitation <br> service', offset: 111}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage of older people discharged from hospital who received a reablement service',
type: 'line',
data: [3,3.2,3.2,3.3,3.06,2.92]
,index: 1
}
]
}
