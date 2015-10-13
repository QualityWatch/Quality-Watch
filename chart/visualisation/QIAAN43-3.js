/* Created by EFisher on 12/10/2015 14:29:31 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have regional employment gaps changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07Q2','2006/07Q3','2006/07Q4','2007/08Q1','2007/08Q2','2007/08Q3','2007/08Q4','2008/09Q1','2008/09Q2','2008/09Q3','2008/09Q4','2009/10Q1','2009/10Q2','2009/10Q3','2009/10Q4','2010/11Q1','2010/11Q2','2010/11Q3','2010/11Q4','2011/12Q1','2011/12Q2','2011/12Q3','2011/12Q4','2012/13Q1','2012/13Q2','2012/13Q3','2012/13Q4','2013/14Q1','2013/14Q2','2013/14Q3','2013/14Q4','2014/15Q1','2014/15Q2','2014/15Q3']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage difference in emplyment <br> of people with LTCs compared to <br> the general populatuion', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'East Midlands',
visible: true,type: 'line',
data: [13.1,13.5,15.5,17.5,15.6,15.2,14.5,14.1,14,13.9,12.5,12.8,13,13.6,10.4,11.5,12.2,11.3,10.9,11.7,11.3,10.5,12,11.6,12,11.1,10.9,11.5,12.1,12.2,13.2,13.9,12.3,12.5]
,index: 1
},
{
name: 'Eastern',
visible: false,type: 'line',
data: [12.6,12.9,13.2,13.1,12.8,13.2,12.9,12.3,13.1,12.5,11.6,12.2,12.3,11.3,9.2,10,10.3,9.5,7.7,9,8.6,10.2,10.5,9.9,9.4,10.6,10.3,11.4,11.4,13.5,12.4,12.3,12.4,11.7]
,index: 2
},
{
name: 'London',
visible: false,type: 'line',
data: [17.1,17.8,17.3,16.7,15.8,15.6,16.7,16.3,16.8,16.3,16.1,14.9,16.9,14.4,12.9,12.3,12.7,12.8,12.7,13,11.8,13,13.1,13.2,13.2,12.7,11.9,13.1,13.4,13.9,13.6,11,11.7,13.7]
,index: 3
},
{
name: 'Merseyside',
visible: false,type: 'line',
data: [21,19.2,16.8,18.3,16.6,20.1,18.1,19.1,19.8,16,15.3,15.5,16.2,16.6,14.2,13.4,14.5,12.7,13.4,11.9,10.6,12.3,16.7,18.1,18.3,17,18.2,21.2,21.4,20.8,20.7,20.7,20.3,19.2]
,index: 4
},
{
name: 'North East',
visible: false,type: 'line',
data: [18.2,18.2,18.2,16.6,18,19.5,18.5,19.1,16.7,14.9,13.7,14.3,14,14.6,12,12.9,13,13.2,12.8,12.8,14,14.3,13.3,14,15.8,13.5,13.8,13.6,16.2,15.3,16,15.1,14.5,14.9]
,index: 5
},
{
name: 'North West',
visible: false,type: 'line',
data: [18.9,17.7,16.2,18.4,17.5,16.6,17,17.2,16.9,15.7,15.4,15.9,14.3,15.4,12.7,13,13.9,12.9,12.7,12.3,12.6,13.6,13.2,12.6,14.1,13.6,13.8,14.6,15.8,16.8,15.6,14.6,15.6,16]
,index: 6
},
{
name: 'South East',
visible: false,type: 'line',
data: [10.9,11.5,10.8,10,11.2,12.3,12.6,12,12.1,12.2,12.2,11.5,12.3,12.1,9.5,10.2,9.8,10.1,10.7,11,10.5,10.6,10.6,9.5,10.2,9.6,10.6,12.2,12.5,10.9,11.3,10.5,10.3,10.5]
,index: 7
},
{
name: 'South West',
visible: false,type: 'line',
data: [13.9,14.2,12.6,13.3,14.6,14.5,14.4,13.4,14.1,13.2,12.4,14.3,11.8,12.3,10.5,10.6,11.5,10,10.7,11.4,11,11.3,11.8,11,11.7,10.2,10.7,12.2,11.6,12.3,12.7,13.2,13.3,12]
,index: 8
},
{
name: 'West Midlands',
visible: false,type: 'line',
data: [16.9,16,14.4,14.9,15.5,14.2,13.8,14.7,16.9,14.5,13.5,12.5,12.4,12.6,11.4,12.4,10.9,13.1,13,12.9,12.2,13.3,13.5,13.1,11.5,11.9,11.5,12.6,14.4,14.9,15,15,15.1,13.9]
,index: 9
},
{
name: 'Yorkshire & Humberside',
visible: false,type: 'line',
data: [15.6,16.7,15.4,15.7,16.8,16.2,16.4,16.2,15.2,14.1,13.4,13.7,15.1,13.7,11.7,12.3,12.3,11.2,11.1,12.7,11.2,11.7,12.1,12.6,13.1,12.6,11.4,11.9,14.6,14.1,14.1,13,13.3,13.5]
,index: 10
}
]
}
