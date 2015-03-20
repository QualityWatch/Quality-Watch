/* Created by ianb on 20/03/2015 10:37:38 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people dying in their usual residence changed by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr-10 - Mar-11','Jul-10 - Jun-11','Oct-10 - Sep-11','Jan-11 - Dec-11','Apr-11 - Mar-12','Jul-11 - Jun-13','Oct-11 - Sep-12','Jan-12 - Dec-12','Apr-12 - Mar-13','Jul-12 - Jun-13','Oct-12 - Sep-13','Jan-13 - Dec-13','Apr-13 - Mar-14','Jul-13 - Jun-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of deaths in usual place <br> of residence', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'North East',
visible: true,type: 'line',
data: [40,40.5,41.1,41.6,42.2,43.1,43.4,43.8,43.8,43.8,43.9,44.1,44.6,44.5]
,index: 1
},
{
name: 'Greater Manchester South Cumbria and Lancashire',
visible: false,type: 'line',
data: [36.8,37.2,37.9,38.6,39.4,39.9,40.1,40.4,40.3,40.8,41.1,41.7,42.1,42.1]
,index: 2
},
{
name: 'Yorkshire and the Humber',
visible: false,type: 'line',
data: [39.7,40,40.6,41.2,41.8,42.2,42.9,43.6,43.9,44.3,44.3,44.3,44.2,44.5]
,index: 3
},
{
name: 'Cheshire and Merseyside',
visible: false,type: 'line',
data: [39.7,40,40.4,40.5,41,41.7,41.9,41.9,41.9,41.7,41.8,42.3,42.9,43]
,index: 4
},
{
name: 'East Midlands',
visible: false,type: 'line',
data: [41.3,41.6,42.3,42.9,43.4,43.9,44,44.1,44.2,44.6,44.9,45.3,45.5,45.4]
,index: 5
},
{
name: 'West Midlands',
visible: false,type: 'line',
data: [39,39.3,39.6,39.7,40.2,40.7,41.3,41.7,41.7,41.7,41.6,41.8,42,42.5]
,index: 6
},
{
name: 'East of England',
visible: true,type: 'line',
data: [42.3,43,43.7,44.3,45,45.6,46,46.3,46.5,46.5,46.9,47.3,47.7,48.3]
,index: 7
},
{
name: 'London',
visible: false,type: 'line',
data: [34.2,34.4,34.7,34.9,35,35.4,35.6,35.8,36.1,36.5,36.8,37.2,37.1,37.1]
,index: 8
},
{
name: 'Sussex, Surrey and Kent',
visible: false,type: 'line',
data: [41.7,42.1,42.7,43.4,44.2,45.1,45.8,46.5,46.9,46.9,46.6,47,46.6,46.9]
,index: 9
},
{
name: 'Thames Valley',
visible: false,type: 'line',
data: [41.5,41.5,42.1,42.6,43.4,44.3,44.4,44.4,44.6,44.4,44.2,44.5,44.7,44.8]
,index: 10
},
{
name: 'Hampshire Isle of Wight and Dorset',
visible: false,type: 'line',
data: [43.5,43.9,44.7,45,46.1,46.8,47.4,47.6,47.3,47.4,47.5,47.8,48.3,48.2]
,index: 11
},
{
name: 'South West',
visible: false,type: 'line',
data: [46.2,46.9,47.6,47.9,48.6,48.8,49.1,49.7,50.1,50.7,50.9,50.8,51.1,51.1]
,index: 12
}
]
}
