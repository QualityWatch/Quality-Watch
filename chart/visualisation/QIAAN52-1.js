/* Created by EFisher on 24/01/2014 16:55:27 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long did outpatients say they had to wait for an appointment and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Up to 1 month',
type: 'column',
data: [35,47,0]
,index: 7
},
{
name: '1 month to 6 weeks',
visible: false,type: 'column',
data: [22,26,0]
,index: 6
},
{
name: 'More than 6 weeks but no more than 3 months',
visible: false,type: 'column',
data: [23,17,0]
,index: 5
},
{
name: 'More than 3 months',
visible: false,type: 'column',
data: [19,10,0]
,index: 4
},
{
name: 'Up to 1 month',
visible: false,type: 'column',
data: [0,0,49]
,index: 3
},
{
name: '1 month to 6 weeks',
visible: false,type: 'column',
data: [0,0,27]
,index: 2
},
{
name: 'More than 6 weeks but no more than 3 months',
visible: false,type: 'column',
data: [0,0,17]
,index: 1
},
{
name: 'More than 3 months',
visible: false,type: 'column',
data: [0,0,6]
,index: 0
}
]
}
