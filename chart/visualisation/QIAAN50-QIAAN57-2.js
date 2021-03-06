/* Created by ianb on 16/12/2014 10:53:37 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the views of outpatients on whether they were treated with dignity and respect?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2003','2004','2009','2011']
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
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, all of the time',
type: 'column',
data: [87,87,87,89]
,index: 2
},
{
name: 'Yes, some of the time',
type: 'column',
data: [12,12,12,10]
,index: 1
},
{
name: 'No',
type: 'column',
data: [1,1,1,1]
,index: 0
}
]
}
