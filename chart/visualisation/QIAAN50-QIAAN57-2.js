/* Created by EFisher on 24/01/2014 16:55:18 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the views of outpatients on whether they were treated with dignity and respect?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Yes, all of the time','Yes, some of the time','No']
, labels: {
}
},
yAxis: {
title: {text:'Were you treated with dignity and <br> respect? (Percentage of outpatients)', offset: 87}
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
data: [87,12,1]
,index: 1
},
{
name: '2004',
type: 'column',
data: [87,12,1]
,index: 2
},
{
name: '2009',
type: 'column',
data: [87,12,1]
,index: 3
},
{
name: '2011',
type: 'column',
data: [89,10,1]
,index: 4
}
]
}
