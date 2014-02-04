/* Created by EFisher on 24/01/2014 16:57:50 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has placement to stroke beds changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr-Jun 2011','Jul-Sep 2011','Oct-Dec 2011','Jan-Mar 2012','Apr-Jun 2012','Jul-Sep 2012','Oct-Dec 2012']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of those who arrive at <br> a stroke bed within 4 hours', offset: 87}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Arrived at stroke bed within 4 hours',
type: 'line',
data: [54,58,60,56,63,66,65]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Arrived at stroke bed within 4 hours trendline',
data: [[0, 52.857],[6, 64]]
}
]
}
