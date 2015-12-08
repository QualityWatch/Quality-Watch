/* Created by EFisher on 03/12/2015 13:04:48 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How strongly do seasons influence breaches?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['April','May','June','July','August','September','October','November','December','January','February','March']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients from arrival <br> either admitted, transferred or <br> discharged within 4 hours (type <br> 1)', offset: 111}
, max: 1
, min: 0.8
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '2010/11',
visible: true,type: 'line',
data: [null,null,null,null,0.97,0.96,0.96,0.96,0.92,0.94,0.96,0.95]
,index: 1
},
{
name: '2011/12',
visible: false,type: 'line',
data: [0.95,0.96,0.96,0.96,0.96,0.95,0.95,0.95,0.94,0.94,0.92,0.95]
,index: 2
},
{
name: '2012/13',
visible: false,type: 'line',
data: [0.94,0.95,0.95,0.96,0.96,0.95,0.94,0.94,0.92,0.92,0.91,0.9]
,index: 3
},
{
name: '2013/14',
visible: false,type: 'line',
data: [0.9,0.95,0.95,0.95,0.94,0.94,0.93,0.94,0.93,0.93,0.92,0.93]
,index: 4
},
{
name: '2014/15',
visible: false,type: 'line',
data: [0.93,0.92,0.93,0.93,0.93,0.92,0.91,0.9,0.85,0.87,0.88,0.89]
,index: 5
},
{
name: '2015/16',
visible: false,type: 'line',
data: [0.9,0.91,0.92,0.93,0.91,0.9,null,null,null,null,null,null]
,index: 6
}
]
}
