/* Created by ianb on 08/10/2013 13:50:41 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has compliance with good practice changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
series:[
{
name: 'Treated for 90% of stay in stroke unit',
type: 'line',
data: [null,null,51,58,60]
,index: 1
},
{
name: 'Screened for swallowing disorders within 24 hours',
type: 'line',
data: [64,63,66,72,83]
,index: 2
},
{
name: 'Brain scan within 24 hours',
type: 'line',
data: [58,59,42,59,70]
,index: 3
},
{
name: 'Aspirin by 48 hours',
type: 'line',
data: [65,68,71,85,93]
,index: 4
},
{
name: 'Physiotherapy assessment within 72 hours',
type: 'line',
data: [59,63,71,84,91]
,index: 5
},
{
name: 'Asessment by occupational therapist within 4 days',
type: 'line',
data: [null,null,49,66,83]
,index: 6
},
{
name: 'Weighed at least once',
type: 'line',
data: [49,52,57,72,85]
,index: 7
},
{
name: 'Mood assessed by discharge',
type: 'line',
data: [52,47,55,65,80]
,index: 8
},
{
name: 'Rehabilitation goals agreed',
type: 'line',
data: [61,68,76,86,94]
,index: 9
},
{
name: 'Average for 9 indicators',
type: 'line',
data: [null,null,60,72,82]
,index: 10
}
]
}
