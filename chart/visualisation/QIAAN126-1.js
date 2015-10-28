/* Created by EFisher on 26/10/2015 10:08:29 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Who employs the adult social care workforce?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of jobs across sector'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'CASSR (local authority)',
type: 'column',
data: [11.147,10.114,9.257]
,index: 4
},
{
name: 'Private',
type: 'column',
data: [55.944,56.376,57.237]
,index: 3
},
{
name: 'Voluntary',
type: 'column',
data: [18.881,18.792,19.079]
,index: 2
},
{
name: 'NHS',
type: 'column',
data: [5.186,5.133,5.352]
,index: 1
},
{
name: 'Direct payment recipients',
type: 'column',
data: [9.091,9.396,9.211]

,index: 0
}
]
}
