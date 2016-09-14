/* Created by NCODowd on 09/09/2016 09:18:53 using v2.7 */    /* Created by NCODowd on 29/06/2016 16:14:25 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of their GP surgeries?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that their overall experience of <br> GP surgery was good', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',showInLegend:false,
type: 'column',
data: [88.3,86.7,85.7,84.8,85.2]
,index: 1
},
{name: 'Error', type: 'errorbar', data: [
[88.19,88.36],
[86.65,86.83],
[85.60,85.80],
[84.72,84.93],
[85.1,85.3]
    
    ]}
]
}