/* Created by EFisher on 24/01/2014 16:59:08 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion in paid employment changed by hours worked?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of employed adults with <br> learning difficulties ', offset: 87}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Regularly but less than weekly',
type: 'column',
data: [4.3,4.8,5.4,5.9]
,index: 4
},
{
name: 'Less than 4 hours a week',
type: 'column',
data: [29.8,27.3,27.9,28.4]
,index: 3
},
{
name: '4 to less than 16 hours a week',
type: 'column',
data: [31.1,33.4,32.8,35.2]
,index: 2
},
{
name: '16 to less than 30 hours a week',
type: 'column',
data: [19.3,19.6,19.8,18.6]
,index: 1
},
{
name: '30 or more hours a week',
type: 'column',
data: [15.7,14.8,14.1,12]
,index: 0
}
]
}
