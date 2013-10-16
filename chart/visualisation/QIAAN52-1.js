/* Created by ianb on 14/10/2013 11:40:53 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long did outpatients say they had to wait for an appointment and how has this changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004','2009','2011']
, labels: {
}
},
yAxis: {
title: {text:'How long did outpatients have to <br> wait for an appointment?(proportion <br> of outpatients)', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Up to 1 month',
type: 'column',
data: [35,47,0]
,index: 7
},
{
name: '1 month to 6 weeks',
type: 'column',
data: [22,26,0]
,index: 6
},
{
name: 'More than 6 weeks but no more than 3 months',
type: 'column',
data: [23,17,0]
,index: 5
},
{
name: 'More than 3 months',
type: 'column',
data: [19,10,0]
,index: 4
},
{
name: 'Up to 1 month',
type: 'column',
data: [0,0,49]
,index: 3
},
{
name: '1 month to 6 weeks',
type: 'column',
data: [0,0,27]
,index: 2
},
{
name: 'More than 6 weeks but no more than 3 months',
type: 'column',
data: [0,0,17]
,index: 1
},
{
name: 'More than 3 months',
type: 'column',
data: [0,0,6]
,index: 0
}
]
}
