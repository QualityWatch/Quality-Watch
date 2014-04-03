/* Created by EFisher on 26/03/2014 16:46:44 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have influenza vaccination rates in over-65-year-olds changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 04 - Dec 04','Oct 05 - Jan 06','Oct 06 - Jan 07','Oct 07 - Jan 08','Oct 08 - Jan 09','Oct 09 - Jan 10','Sep 10 - Feb 11','Sep 11 - Jan 12']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of persons aged 65 and <br> over immunised against influenza', offset: 87}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [71.4,75.3,73.9,73.5,74.1,72.4,72.8,74]
,index: 1
}
]
}
