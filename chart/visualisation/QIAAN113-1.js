/* Created by JMorris on 15/02/2018 14:45:07 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Has the percentage of women who are smokers at the time of delivery decreased?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The percentage of women known to <br> be a smoker at the time of delivery', offset: 87}
, max: 20
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [15.8,14.7,14.6,14.2,13.7,13.3,12.9,12.2,11.7,11,10.7]
,index: 1
}
]
}
