/* Created by NCODowd on 27/07/2016 12:16:50 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did outpatient ratings of care changed up to 2011?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Excellent','Very good','Good','Fair','Poor','Very Poor']
, labels: {
}
},
yAxis: {
title: {text:'How do you rate the care you received? <br> (Percentage of outpatients)', offset: 87}
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
data: [37,41,16,5,1,0]
,index: 1
},
{
name: '2004',
type: 'column',
data: [37,41,16,5,1,1]
,index: 2
},
{
name: '2009',
type: 'column',
data: [40,41,14,4,1,0]
,index: 3
},
{
name: '2011',
type: 'column',
data: [44,39,12,4,1,0]
,index: 4
}
]
}
