/* Created by EFisher on 12/10/2015 14:30:36 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has ongoing rehabilitation changed for stroke care?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan-Mar 2014 ','Apr-Jun 2014',' Jul-Sep 2014 ','Oct-Dec 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of patients'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of patients who received the 45 minutes of occupatoinal therapy required 5 days a week.',
type: 'line',
data: [54.9,67.3,76.1,74.3]
,index: 1
},
{
name: 'Proportion of patients who received the 45 minutes of physiotherapy required 5 days a week.',
type: 'line',
data: [53.4,67.1,69.9,70.9]
,index: 2
},
{
name: 'Proportion of patients who received the 45 minutes of speech & language therapy required 5 days a week.',
type: 'line',
data: [23.9,30.9,36.4,37.8]
,index: 3
}
]
}
