/* Created by NCODowd on 29/06/2016 16:31:35 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are patients\' overall experiences of out-of hours GP services?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of patients who said <br> that their overall experience of <br>  out-of hours GP services were good', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',showInLegend:false,
type: 'column',
data: [70.9,70.2,66.2,68.6]
,index: 1
},
{name: 'Error', type: 'errorbar', data: [
[70.52,71.21],
[69.85,70.57],
[65.82,66.60],
[68.19,69.01]
    
    ]}
]
}
