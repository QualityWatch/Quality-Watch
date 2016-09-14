/* Created by NCODowd on 09/09/2016 09:21:44 using v2.7 *//* Created by NCODowd on 29/06/2016 16:24:59 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Would patients recommend their GP surgery to someone who has just moved to the local area?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that they would recommend their <br> GP surgery', offset: 99}
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
data: [81.9,79.9,78.7,77.5,78]
,index: 1
},
{name: 'Error', type: 'errorbar', data: [
[81.82,82.02],
[79.82,80.04],
[78.54,78.77],
[77.39,77.64],
[77.88,78.11]

]}
]
}