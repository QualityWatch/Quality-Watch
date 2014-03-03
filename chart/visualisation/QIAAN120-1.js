/* Created by EFisher on 25/02/2014 18:35:38 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the rates of employment in England?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Rate of employment'}
, min: 20
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Population ',
type: 'line',
data: [72.32,72.44,73.09,73.31,72.95,72.79,72.92,72.63,71.69,70.87,71.18,71.07,70.37,70.63,71.42,70.96,70.63,70.49,70.67,70.71,70.56,71.07,71.87,72.09,71.34]
,index: 1
},
{
name: 'People with mental illness',
type: 'line',
data: [26.61,26.68,27.52,27.42,28.07,27.85,28.28,27.54,28.63,27.83,27.5,28.12,30.15,29.73,29.62,28.65,28.07,27.42,28.97,30.21,29.71,31.19,32.63,33.27,32.37]
,index: 2
}
]
}
