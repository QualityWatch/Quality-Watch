/* Created by rreed on 4/19/2017 4:41:33 PM using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {:false},
exporting: {chartOptions: {
title: {text: 'How has immunisation coverage against seasonal flu in persons aged 65 changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 04 - Dec 04','Oct 05 - Jan 06','Oct 06 - Jan 07','Oct 07 - Jan 08','Oct 08 - Jan 09','Oct 09 - Jan 10','Sept 10 - Feb 11','Sept 11 - Jan 12','Sept 12 - Jan 13','Sept 13 - Jan 14','Sept 14 - Jan 15']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of persons aged 65 and <br> over immunised against Influenza <br> (seasonal flu) in England', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [71.43,75.3,73.95,73.52,74.1,72.42,72.84,74,73.4,73.21,72.7]
,index: 1
}
]
}
