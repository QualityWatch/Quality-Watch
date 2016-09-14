/* Created by NCODowd on 09/09/2016 08:59:44 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long do patients have to wait to see someone at the GP surgery?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients who waited <br> more than a certain amount of time <br> after their appointment time ', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'More than 15 minutes',
type: 'column',
data: [24.3,25.9,26.7,27.1,26.7]
,index: 0
}
]
}