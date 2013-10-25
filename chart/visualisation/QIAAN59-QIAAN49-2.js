/* Created by ianb on 14/10/2013 11:41:53 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the perceptions of people feeling involved in their outpatient care changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Yes, definitely','Yes, to some extent','No']
, labels: {
}
},
yAxis: {
title: {text:'Were you involved as much as you <br> liked to be in decisions about your <br> care and treatment? (Percentage <br> of outpatients)', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2003',
type: 'column',
data: [70,24,6]
,index: 1
},
{
name: '2004',
type: 'column',
data: [70,24,6]
,index: 2
},
{
name: '2009',
type: 'column',
data: [70,24,6]
,index: 3
},
{
name: '2011',
type: 'column',
data: [72,22,6]
,index: 4
}
]
}
