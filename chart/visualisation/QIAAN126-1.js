/* Created by EFisher on 26/10/2015 10:08:29 using v2.7 */{
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
data: [1114.7,1011.4,925.7]
,index: 4
},
{
name: 'Private',
type: 'column',
data: [5594.4,5637.6,5723.7]
,index: 3
},
{
name: 'Voluntary',
type: 'column',
data: [1888.1,1879.2,1907.9]
,index: 2
},
{
name: 'NHS',
type: 'column',
data: [518.6,513.3,535.2]
,index: 1
},
{
name: 'Direct payment recipients',
type: 'column',
data: [909.1,939.6,921.1]
,index: 0
}
]
}
