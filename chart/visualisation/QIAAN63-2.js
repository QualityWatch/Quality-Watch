/* Created by ianb on 07/10/2013 13:30:57 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has satisfaction with social care services changed by region?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['North East','North West','South West','East Midlands','Yorkshire and the Humber','West Midlands','England','South East','Eastern','London']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adults who are satisfied <br> with the service they receive by <br> region', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2011/12',
type: 'column',
data: [66.8,66.4,64.4,63.7,63.4,63.3,62.8,61.6,60.5,57.2]
,index: 1
},
{
name: '2012/13',
type: 'column',
data: [65.9,66,65.2,65.1,65.5,64.1,63.7,62.7,62.3,58.2]
,index: 2
}
]
}

