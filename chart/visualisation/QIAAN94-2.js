/* Created by rreed on 20/12/2016 12:00:54 using v2.7 */
{
title: {text:''},
legend: {enabled: false},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has QOF achievement on asthma changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07 ','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13', '2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of asthma indicator points <br> attained nationally', offset: 87}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of indicator points achieved',
type: 'column',
data: [96.4,97.6,98.2,98.1,98.7,98.7,97.2, 97.2,97.4,97.4]
,index: 1
}
]
}
