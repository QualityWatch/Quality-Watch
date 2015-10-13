/* Created by EFisher on 12/10/2015 14:30:36 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have standards of assessment and screening during hospital stay changed for stroke care?'},
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
name: 'Proportion of applicable patients who were given a swallowing screening within 4h of arrival to hospital',
type: 'line',
data: [65,67.3,69.2,68.7]
,index: 1
},
{
name: 'Proportion of applicable patients who are assessed by a nurse within 24h AND at least one therapist within 24h AND
all relevant therapists within 72h AND have rehab goals agreed within 5 days ',
type: 'line',
data: [46.3,48.7,52.7,52.7]
,index: 2
}
]
}
