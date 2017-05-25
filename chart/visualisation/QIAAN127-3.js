/* Created by rreed on 25/05/2017 13:34:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do sickness days vary by job type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['All job roles','Direct Care','Manager,Supervisor','Regulated Professions','Other']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of staff (2015)'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '0',
visible: true,type: 'column',
data: [4500,4200,5100,4700,4600]
,index: 5
},
{
name: '1 to 4',
visible: false,type: 'column',
data: [2200,2100,2200,2200,2400]
,index: 4
},
{
name: '4.1 to 10',
visible: false,type: 'column',
data: [1300,1300,1200,1200,1300]
,index: 3
},
{
name: '10.1 to 20',
visible: false,type: 'column',
data: [700,800,600,700,700]
,index: 2
},
{
name: '20.1 to 40',
visible: false,type: 'column',
data: [600,700,400,500,500]
,index: 1
},
{
name: 'More than 40',
visible: false,type: 'column',
data: [700,900,500,700,500]
,index: 0
}
]
}
