/* Created by EFisher on 03/12/2015 14:04:27 using v2.7 */{
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
title: {text:'Percentage of staff (2014)'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '0',
visible: true,type: 'column',
data: [46.5,44.2,53.2,46.9,47.4]
,index: 5
},
{
name: '1 to 4',
visible: false,type: 'column',
data: [22.3,21.7,20.9,23.4,24.3]
,index: 4
},
{
name: '4.1 to 10',
visible: false,type: 'column',
data: [12.2,12.7,10.5,12.1,12.3]
,index: 3
},
{
name: '10.1 to 20',
visible: false,type: 'column',
data: [7.1,7.8,5.9,6.6,6.3]
,index: 2
},
{
name: '20.1 to 40',
visible: false,type: 'column',
data: [5.4,6,4.5,4.9,4.7]
,index: 1
},
{
name: 'More than 40',
visible: false,type: 'column',
data: [6.5,7.6,4.9,6,5]
,index: 0
}
]
}
