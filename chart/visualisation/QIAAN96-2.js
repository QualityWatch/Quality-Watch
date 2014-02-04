/* Created by EFisher on 24/01/2014 17:04:10 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people dying in their usual residence changed by region?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan-08 - Dec-08','Apr-08 - Mar-09','Jul-08 - Jun-09','Oct-08 - Sep-09','Jan-09 - Dec-09','Apr-09 - Mar-10','Jul-09 - Jun-10','Oct-09 - Sep-10','Jan-10 - Dec-10','Apr-10 - Mar-11','Jul-10 - Jun-11','Oct-10 - Sep-11','Jan-11 - Dec-11','Apr-11 - Mar-12','Jul-11 - Jun-12','Oct-11 - Sep-12','Jan-12 - Dec-12','Apr-12 - Mar-13']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of deaths in usual place <br> of residence', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'London',
type: 'line',
data: [30,30.3,30.4,30.4,30.5,30.9,31.5,32.2,33.1,34.1,34.3,34.7,34.9,35,35.3,35.6,35.8,36]
,index: 1
},
{
name: 'North West',
visible: false,type: 'line',
data: [35.5,35.8,35.8,36,36.5,36.8,37.1,37.4,37.7,38.2,38.6,39.2,39.7,40.3,40.8,40.9,41.2,41.2]
,index: 2
},
{
name: 'West Midlands',
visible: false,type: 'line',
data: [37.1,37.4,37.4,37.8,37.7,37.9,38,38.1,38.8,39,39.3,39.6,39.7,40.2,40.7,41.3,41.6,41.9]
,index: 3
},
{
name: 'North East',
visible: false,type: 'line',
data: [37.7,37.4,37.2,37.5,37.4,37.6,37.8,38.3,38.5,39.1,39.5,39.9,40.6,41.4,42.5,43,43.2,43.3]
,index: 4
},
{
name: 'England',
visible: false,type: 'line',
data: [37.9,38.1,38.1,38.2,38.3,38.4,38.8,39.2,39.8,40.3,40.7,41.3,41.8,42.4,42.9,43.3,43.7,43.9]
,index: 5
},
{
name: 'Yorkshire and the Humber',
visible: false,type: 'line',
data: [38.6,38.4,38,38,37.9,38.1,38.6,38.9,39.5,39.9,40.2,40.9,41.4,41.9,42.4,43.1,43.7,44.1]
,index: 6
},
{
name: 'East Midlands',
visible: false,type: 'line',
data: [39.4,39.8,39.5,39.4,39.7,39.5,40,40.2,40.8,41.3,41.6,42.3,42.9,43.4,43.9,44,44.1,44.3]
,index: 7
},
{
name: 'East of England',
visible: false,type: 'line',
data: [39.9,40.2,40.3,40.2,40.3,40.1,40.4,40.8,41.6,42.6,43.3,43.9,44.5,45.2,45.8,46.2,46.7,46.8]
,index: 8
},
{
name: 'South Central ',
visible: false,type: 'line',
data: [40,40.2,39.9,40.1,40.2,40.4,41.2,41.5,42,42.2,42.4,43.2,43.7,44.7,45.5,45.6,45.6,45.6]
,index: 9
},
{
name: 'South East Coast ',
visible: false,type: 'line',
data: [40,40.3,40.3,40.4,40,40.2,40.5,40.7,41.3,41.7,42.1,42.7,43.4,44.2,45.1,45.8,46.4,46.9]
,index: 10
},
{
name: 'South West',
visible: false,type: 'line',
data: [42.6,42.8,42.9,43.3,43.6,43.9,44.1,44.4,45.2,45.7,46.5,47.1,47.3,48.1,48.3,48.7,49.3,49.6]
,index: 11
}
]
}
