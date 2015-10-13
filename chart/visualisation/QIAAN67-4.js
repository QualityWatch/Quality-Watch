/* Created by EFisher on 12/10/2015 14:30:36 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have discharge procedures and ongoing care changed for stroke?'},
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
title: {text:'Proportion of applicable patients'}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of applicable patients who have a continence plan drawn up within 3 weeks of clock start ',
type: 'line',
data: [79.2,83,85,85.5]
,index: 1
},
{
name: 'Proportion of applicable patients who have mood and cognition screening by discharge ',
type: 'line',
data: [81.4,84,87,87.2]
,index: 2
}
]
}
