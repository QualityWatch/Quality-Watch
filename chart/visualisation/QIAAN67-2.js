/* Created by NCODowd on 13/09/2016 11:04:56 using v2.7 */{
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
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Applicable patients given a swallow screen within 4h of clock start',
type: 'line',
data: [63.6,68.1,71.6]
,index: 1
},
{
name: 'Assessed by a nurse within 24h AND at least one therapist within 24h AND<br>all relevant therapists within 72h AND have rehab goals agreed within 5 days',
type: 'line',
data: [44.1,51.4,56.4]
,index: 2
}
]
}
