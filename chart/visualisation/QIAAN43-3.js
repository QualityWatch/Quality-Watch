/* Created by ianb on 27/06/2014 16:16:17 using v2.1 */
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have regional employment gaps changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07Q2','2006/07Q3','2006/07Q4','2007/08Q1','2007/08Q2','2007/08Q3','2007/08Q4','2008/09Q1','2008/09Q2','2008/09Q3','2008/09Q4','2009/10Q1','2009/10Q2','2009/10Q3','2009/10Q4','2010/11Q1','2010/11Q2','2010/11Q3','2010/11Q4','2011/12Q1','2011/12Q2','2011/12Q3','2011/12Q4','2012/13Q1','2012/13Q2','2012/13Q3','2012/13Q4','2013/14Q1','2013/14Q2','2013/14Q3']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Difference in employment rate of <br> general population compared to people <br> with long term conditions', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'East Midlands',
type: 'line',
data: [13.1,13.5,15.5,17.5,15.6,15.2,14.5,14.1,14,13.9,12.5,12.8,13.1,13.7,10.4,11.5,12.2,11.3,10.9,11.7,11.3,10.5,12,11.6,12,11.1,10.9,11.5,12.1,12.1]
,index: 1
},
{
name: 'Eastern',
visible: false,type: 'line',
data: [12.6,12.9,13.2,13.1,12.8,13.2,12.9,12.3,13.1,12.5,11.6,12.2,12.3,11.3,9.2,10,10.3,9.6,7.8,9.1,8.6,10.1,10.5,9.9,9.3,10.6,10.3,11.4,11.4,13.4]
,index: 2
},
{
name: 'London',
visible: false,type: 'line',
data: [17.1,17.7,17.4,16.7,15.8,15.7,16.7,16.4,16.8,16.3,16.1,14.9,16.9,14.4,12.8,12.3,12.7,12.8,12.7,12.9,11.9,13,13,13.2,13.3,12.6,11.9,13.1,13.5,13.9]
,index: 3
},
{
name: 'Merseyside',
visible: false,type: 'line',
data: [21.1,19.2,16.7,18.3,16.6,20.1,18.2,19.2,19.9,15.9,15.3,15.6,16.2,16.6,14.2,13.4,14.5,12.8,13.5,12,10.5,12.3,16.7,18.1,18.3,17,18.2,21.2,21.4,20.8]
,index: 4
},
{
name: 'North East',
visible: false,type: 'line',
data: [18.2,18.2,18.2,16.6,18,19.5,18.5,19.1,16.7,14.9,13.8,14.4,14,14.6,12,12.9,13,13.2,12.9,12.8,14,14.3,13.2,14,15.7,13.5,13.8,13.6,16.2,15.3]
,index: 5
},
{
name: 'North West',
visible: false,type: 'line',
data: [19,17.7,16.2,18.4,17.5,16.6,17,17.2,16.8,15.8,15.4,15.9,14.3,15.4,12.6,13,13.8,12.8,12.7,12.3,12.6,13.6,13.2,12.6,14.1,13.6,13.9,14.6,15.8,16.8]
,index: 6
},
{
name: 'South East',
visible: false,type: 'line',
data: [10.8,11.6,10.8,10,11.2,12.3,12.6,12,12.1,12.3,12.2,11.5,12.3,12.1,9.5,10.2,9.8,10.1,10.7,11,10.5,10.5,10.6,9.5,10.2,9.6,10.6,12.2,12.6,10.8]
,index: 7
},
{
name: 'South West',
visible: false,type: 'line',
data: [13.9,14.2,12.6,13.3,14.6,14.5,14.4,13.4,14,13.3,12.4,14.4,11.8,12.3,10.5,10.6,11.5,10,10.7,11.4,11,11.3,11.7,11.1,11.6,10.2,10.7,12.2,11.6,12.3]
,index: 8
},
{
name: 'West Midlands',
visible: false,type: 'line',
data: [16.9,16.1,14.4,15,15.5,14.2,13.8,14.7,16.8,14.5,13.5,12.5,12.4,12.6,11.3,12.4,10.9,13.1,13,12.9,12.2,13.4,13.5,13,11.5,11.9,11.4,12.6,14.3,14.9]
,index: 9
},
{
name: 'Yorkshire & Humberside',
visible: false,type: 'line',
data: [15.6,16.7,15.4,15.7,16.8,16.2,16.3,16.2,15.1,14.1,13.4,13.6,15,13.6,11.7,12.3,12.4,11.2,11.1,12.7,11.2,11.7,12,12.6,13.1,12.6,11.4,11.9,14.6,14.2]
,index: 10
},
{
name: 'England',
visible: false,type: 'line',
data: [15.2,15.3,14.6,14.9,15.1,15.1,15.2,14.9,15.1,14.2,13.6,13.6,13.7,13.4,11.2,11.6,11.8,11.6,11.4,11.9,11.4,11.9,12.3,12,12.3,11.8,11.8,12.8,13.7,13.9]
,index: 11
}
]
}