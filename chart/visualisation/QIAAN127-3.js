{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do sickness days vary by job type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['All job roles','Direct Care','Manager, Supervisor','Professional','Other']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of staff'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: '0 sick days',
type: 'column',
data: [42.4,40.6,47.8,42.8,43.2]
,index: 5
},
{
name: '1 to 4 sick days',
type: 'column',
data: [23.4,22.7,22.9,24.2,25.2]
,index: 4
},
{
name: '4.1 to 10 sick days',
type: 'column',
data: [13.2,13.6,12,12.9,13.3]
,index: 3
},
{
name: '10.1 to 20 sick days',
type: 'column',
data: [7.7,8.6,6.1,7.1,6.9]
,index: 2
},
{
name: '20.1 to 40 sick days',
type: 'column',
data: [6.2,6.7,5.4,6,5.5]
,index: 1
},
{
name: 'More than 40 sick days',
type: 'column',
data: [7,7.8,5.8,7,5.8]
,index: 0
}
]
}