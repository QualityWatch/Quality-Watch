/* Created by NCODowd on 27/07/2016 12:16:06 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have standards of assessment and screening during hospital stay changed for stroke care?'},
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
name: 'Applicable patients given a swallow screen within 4h of clock start',
type: 'line',
data: [63.60,68.10,71.60]
,index: 1
},
{
name: 'Assessed by a nurse within 24h AND at least one therapist within 24h AND<br>all relevant therapists within 72h AND have rehab goals agreed within 5 days',
type: 'line',
data: [44.10,51.40,56.40]
,index: 2
}
]
}
