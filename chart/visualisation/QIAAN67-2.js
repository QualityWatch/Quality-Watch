/* Created by EFisher on 25/02/2014 18:22:47 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have TIA investigation rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010','2012']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of people investigated'}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'High risk TIA Outpatients (investigated same day)',
type: 'line',
data: [18,47]
,index: 1
},
{
name: 'Low risk TIA Outpatients (investigated within a week)',
type: 'line',
data: [56,59]
,index: 2
},
{
name: 'High risk TIA Inpatients (investigated same day)',
type: 'line',
data: [40,59]
,index: 3
},
{
name: 'Low risk TIA Inpatients (investigated within a week)',
type: 'line',
data: [22,14]
,index: 4
}
]
}
