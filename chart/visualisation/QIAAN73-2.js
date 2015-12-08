/* Created by EFisher on 03/12/2015 13:07:02 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: '<a href="http://www.nta.nhs.uk/statistics.aspx">Public Health England, National Drug Treatment Monitoring System</a>'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','2013/14']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of service users and <br> their reason for exiting alcohol <br> treatment', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Successful Completion Subtotal',
visible: true,type: 'line',
data: [48,54,57.1,58,58.6]
,index: 1
},
{
name: 'Transferred',
visible: false,type: 'line',
data: [8,8,7.6,8,9.3]
,index: 2
},
{
name: 'Referred On (Old code)',
visible: false,type: 'line',
data: [2,0,0,0,0]
,index: 3
},
{
name: 'Dropped Out/Left',
visible: false,type: 'line',
data: [33,30,28.1,26,26.2]
,index: 4
},
{
name: 'Treatment declined by client',
visible: false,type: 'line',
data: [5,5,4.2,4,3.5]
,index: 5
},
{
name: 'Other',
visible: false,type: 'line',
data: [4,4,3,3,2.4]
,index: 6
}
]
}
