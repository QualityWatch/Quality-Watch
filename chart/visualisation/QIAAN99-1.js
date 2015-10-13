/* Created by EFisher on 12/10/2015 14:31:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the long-term trends in NHS staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Percentage change compared to 2004'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Total',
visible: true,type: 'line',
data: [0,3.3,2.9,2.2,5.5,10.3,12.4,10.8,10.6,11.5,13.8]
,index: 1
},
{
name: 'All doctors',
visible: false,type: 'line',
data: [0,4.6,9,10.8,14.7,21.2,21.4,23,24.9,26.9,29.2]
,index: 2
},
{
name: 'All GPs',
visible: false,type: 'line',
data: [0,2.8,7.6,8.7,9.7,16.3,13.6,13.9,15.6,17,19]
,index: 3
},
{
name: 'Total qualified nursing staff ',
visible: false,type: 'line',
data: [0,2.6,3.3,2.7,4.5,6.7,7.8,6.9,6.4,7.4,9.4]
,index: 4
},
{
name: 'Qualified Allied Health Professions',
visible: false,type: 'line',
data: [0,3.4,4.5,7,11.5,16,17.8,18.1,18.5,20.8,24]
,index: 5
},
{
name: 'Qualified Healthcare Scientists',
visible: false,type: 'line',
data: [0,6,7.9,6.9,9.6,13.9,13.7,11.9,10.8,5.1,-2.6]
,index: 6
},
{
name: 'Other qualified scientific, therapeutic & technical staff',
visible: false,type: 'line',
data: [0,4.2,5,10.1,16.2,25.2,33.1,35.6,39.6,42.6,50.1]
,index: 7
},
{
name: 'Qualified ambulance staff',
visible: false,type: 'line',
data: [0,5,-5.2,-0.3,1.8,3.8,6.6,7.6,7,7.4,6.7]
,index: 8
},
{
name: 'NHS infrastructure support',
visible: false,type: 'line',
data: [0,4.5,-0.1,-0.7,5.1,13.8,13.2,6.6,4.6,2.8,3.6]
,index: 9
}
]
}
