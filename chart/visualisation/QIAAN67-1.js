/* Created by EFisher on 12/10/2015 14:30:35 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have standards of admission to hospital for stroke care changed?'},
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
name: 'Proportion of applicable patients directly admitted to a stroke unit within 4 hours AND who receive thrombolysis if clinically needed',
type: 'line',
data: [56.5,57.2,59,56.3]
,index: 1
},
{
name: 'Proportion of patients who has a brain scan within 1 hour of arrival to hospital',
type: 'line',
data: [43.2,43.1,44.1,44]
,index: 2
},
{
name: 'Target for brain scan',
type: 'line',
data: [50,50,50,50]
,index: 3
}
]
}
