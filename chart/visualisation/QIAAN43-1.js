/* Created by EFisher on 26/03/2014 16:41:47 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have employment rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07 Q2','2006/07 Q3','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Employment rate'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'People with LTCs',
type: 'line',
data: [58.1,57.7,57.5,58,58.2,57.7,57.8,57.8,58.4,57.8,57.3,57.5,57.6,58,59,59.6,59.4,59.2,58.6,59.2]
,index: 1
},
{
name: 'Population',
type: 'line',
data: [73.3,73,72.4,73.1,73.3,72.3,72.8,72.9,72.6,73,70.9,71.2,71.1,71.7,70.6,71.4,71,70.4,70.5,70.6]
,index: 2
}
]
}
