/* Created by EFisher on 25/02/2014 18:29:54 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the long-term trends in NHS staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Percentage increase in numbers of <br> full time equivalent for major staff <br> groups', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Total',
type: 'line',
data: [0,4.6,9.1,12.8,12.3,11.6,15.1,20.4,22.7,20.9,20.7]
,index: 1
},
{
name: 'All doctors',
visible: false,type: 'line',
data: [0,5.1,12.4,17.5,22.5,24.5,29,36.2,36.4,38.3,40.4]
,index: 2
},
{
name: 'GPs',
visible: false,type: 'line',
data: [0,3.2,6.4,9.4,14.5,15.7,16.8,23.8,20.9,21.1,23]
,index: 3
},
{
name: 'Qualified nursing staff ',
visible: false,type: 'line',
data: [0,3.8,7.2,10,10.8,10.1,12,14.4,15.5,14.6,14.1]
,index: 4
},
{
name: 'Scientific, therapeutic & technical staff',
visible: false,type: 'line',
data: [0,4.6,10.4,15.1,16.4,19,23.9,30.2,33.5,33.9,35]
,index: 5
},
{
name: 'Qualified ambulance staff',
visible: false,type: 'line',
data: [0,2.5,10.7,16.3,5,10.4,12.8,14.9,18.1,19.2,18.5]
,index: 6
},
{
name: 'Support to clinical staff',
visible: false,type: 'line',
data: [0,4.9,7.9,11,8.6,5.6,9.6,15.8,18.3,15.6,15]
,index: 7
},
{
name: 'NHS infrastructure support',
visible: false,type: 'line',
data: [0,6.3,12.7,17.8,12.6,11.9,18.4,28.3,27.6,20.1,17.8]
,index: 8
}
]
}
