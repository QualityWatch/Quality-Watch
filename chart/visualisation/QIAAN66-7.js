/* Created by ianb on 27/04/2015 18:07:34 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Immunisation against seasonal flu in persons aged 65 in England'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 04 - Dec 04','Oct 05 - Jan 06','Oct 06 - Jan 07','Oct 07 - Jan 08','Oct 08 - Jan 09','Oct 09 - Jan 10','Sept 10 - Feb 11','Sept 11 - Jan 12','Sept 12 - Jan 13','Sept 13 - Jan 14']
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
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'column',
data: [71.4,75.3,73.9,73.5,74.1,72.4,72.8,74,73.4,73.2]
,index: 1
}
]
}
