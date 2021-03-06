/* Created by ianb on 20/03/2015 10:37:34 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people dying in their usual place of residence changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan-08 - Dec-08','Apr-08 - Mar-09','Jul-08 - Jun-09','Oct-08 - Sep-09','Jan-09 - Dec-09','Apr-09 - Mar-10','Jul-09 - Jun-10','Oct-09 - Sep-10','Jan-10 - Dec-10','Apr-10 - Mar-11','Jul-10 - Jun-11','Oct-10 - Sep-11','Jan-11 - Dec-11','Apr-11 - Mar-12','Jul-11 - Jun-13','Oct-11 - Sep-12','Jan-12 - Dec-12','Apr-12 - Mar-13','Jul-12 - Jun-13','Oct-12 - Sep-13','Jan-13 - Dec-13','Apr-13 - Mar-14','Jul-13 - Jun-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of deaths in usual place <br> of residence', offset: 87}
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [37.9,38.1,38.1,38.2,38.3,38.4,38.8,39.2,39.8,40.3,40.7,41.3,41.8,42.4,42.9,43.3,43.7,43.8,44.1,44.2,44.5,44.7,44.8]
,index: 1
}
]
}
