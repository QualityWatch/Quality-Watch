/* Created by EFisher on 25/02/2014 18:22:44 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has compliance with good practice changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2001','2004','2006','2008','2010']
, labels: {
}
},
yAxis: {
title: {text:'Percentage compliance against indicator '}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Treated for 90% of stay in stroke unit',
type: 'line',
data: [null,null,51,58,60]
,index: 1
},
{
name: 'Screened for swallowing disorders within 24 hours',
visible: false,type: 'line',
data: [64,63,66,72,83]
,index: 2
},
{
name: 'Brain scan within 24 hours',
visible: false,type: 'line',
data: [58,59,42,59,70]
,index: 3
},
{
name: 'Aspirin by 48 hours',
visible: false,type: 'line',
data: [65,68,71,85,93]
,index: 4
},
{
name: 'Physiotherapy assessment within 72 hours',
visible: false,type: 'line',
data: [59,63,71,84,91]
,index: 5
},
{
name: 'Assessment by occupational therapist within 4 days',
visible: false,type: 'line',
data: [null,null,49,66,83]
,index: 6
},
{
name: 'Weighed at least once',
visible: false,type: 'line',
data: [49,52,57,72,85]
,index: 7
},
{
name: 'Mood assessed by discharge',
visible: false,type: 'line',
data: [52,47,55,65,80]
,index: 8
},
{
name: 'Rehabilitation goals agreed',
visible: false,type: 'line',
data: [61,68,76,86,94]
,index: 9
},
{
name: 'Average for 9 indicators',
visible: false,type: 'line',
data: [null,null,60,72,82]
,index: 10
}
]
}
