/* Created by NCODowd on 31/05/2016 10:24:38 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has gross expenditure on adult social services changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004/05','2005/06','2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Gross current expenditure on adult <br> social services, in millions', offset: 87}
, max: 20000
, min: 12000
, labels: {
format: '{value:.1f}' 
,formatter: function() {return '£'+this.value;}}},
series:[
{
name: 'Cash terms',
type: 'line',
data: [13498,14357,14898,15275,16076,16807,17040,17229,17159,17249,17043]
,index: 1
},
{
name: 'Real terms',
type: 'line',
data: [17053,17622,17762,17706,18154,18541,18250,18171,17772,17496,17043]
,index: 2
}
]
}
