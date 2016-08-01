/* Created by NCODowd on 27/07/2016 12:16:06 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have standards of admission to hospital for stroke care changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2013/14','2014/15','2015/16']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of patients'}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Admitted to a stroke unit within 4 hours AND receive thrombolysis if clinically needed',
type: 'line',
data: [56.60,56.20,58.00]
,index: 1
},
{
name: 'Brain scan within 1 hour of arrival to hospital',
type: 'line',
data: [41.90,44.10,47.50]
,index: 2
},
{
name: 'Target for brain scan',
type: 'line',
data: [50.00,50.00,50.00]
,index: 3
}
]
}
