/* Created by JMorris on 15/02/2018 14:40:33 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the long-term trends in NHS staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014,2015,2016]
, labels: {
}
},
yAxis: {
title: {text:'Percentage change of NHS staff numbers <br> (FTE) compared to 2010', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Total',
visible: true,type: 'line',
data: [0,-1.4,-3.2,-3.8,-2.2,-0.3,1.9]
,index: 1
},
{
name: 'HCHS doctors',
visible: false,type: 'line',
data: [0,1.7,3.4,4.4,6.5,8.3,9.4]
,index: 2
},
{
name: 'Nurses & health visitors',
visible: false,type: 'line',
data: [0,-0.9,-2.7,-2.1,-0.3,0.5,1.4]
,index: 3
},
{
name: 'Midwives',
visible: false,type: 'line',
data: [0,2.6,4.7,6.6,8.4,9.2,9.9]
,index: 4
},
{
name: 'Ambulance staff',
visible: false,type: 'line',
data: [0,0.7,0.8,0.6,-0.2,1.4,7.4]
,index: 5
},
{
name: 'Scientific, therapeutic & technical staff',
visible: false,type: 'line',
data: [0,1.5,0.5,1.8,3.4,4.8,7.3]
,index: 6
}
]
}
