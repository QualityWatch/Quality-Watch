/* Created by NCODowd on 08/09/2016 17:46:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How easy did patients find it to get through to someone at the GP surgery on the phone?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients who found <br> it easy to get through to someone <br> at the GP surgery on the phone', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name:'Series1',showInLegend:false,
type: 'column',
data: [64.7,66.6,78,75,72.9,70.6,70.1]
,index: 1
}, {name: 'Error bars',type:'errorbar', data: [[64.60, 64.73], [66.51, 66.64], [77.88, 78.09], [74.88, 75.11], [72.76, 73.01], [70.43,70.70],[69.67, 70.23]]}
]
}
