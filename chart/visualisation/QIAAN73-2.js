/* Created by EFisher on 26/03/2014 16:48:39 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Why are patients exiting alcohol treatment and how has this changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09','2009/10','2010/11','2011/12']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of service users and <br> their reason for exiting alcohol <br> treatment', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Successful Completion',
type: 'line',
data: [50,null,null,null]
,index: 1
},
{
name: 'Dropped Out/Left',
visible: false,type: 'line',
data: [29,null,null,null]
,index: 2
},
{
name: 'Other',
visible: false,type: 'line',
data: [20,null,null,null]
,index: 3
},
{
name: 'Successful Completion',
visible: false,type: 'line',
data: [null,48,54,57.1]
,index: 4
},
{
name: 'Dropped Out/Left',
visible: false,type: 'line',
data: [null,33,30,28.1]
,index: 5
},
{
name: 'Other',
visible: false,type: 'line',
data: [null,19,17,15]
,index: 6
}
]
}
