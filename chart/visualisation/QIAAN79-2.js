/* Created by hdorning on 23/08/2017 15:41:13 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times for subsequent cancer treatment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion'}
, max: 100
, min: 90
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Surgery',
visible: true,type: 'line',
data: [94.8,95.1,95.7,97.1,97,97.6,97,97.2,96.7,97.5,97.7,97.6,97.3,97.4,97.5,97.5,97.1,97.7,97.7,97,96.8,96.2,96,95.8,94.9,95,95.8,96.2,95.3,95.3,92.6,95.4,95.4]
,index: 1
},
{
name: 'Surgery target',
visible: false,type: 'line',
data: [94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94]
,index: 2
},
{
name: 'Anti-cancer drug regime',
visible: false,type: 'line',
data: [99.2,99.4,99.5,99.7,99.5,99.7,99.6,99.7,99.6,99.7,99.8,99.8,99.7,99.6,99.8,99.7,99.6,99.7,99.7,99.8,99.6,99.7,99.6,99.6,99.5,99.6,99.6,99.6,99.2,99.6,99.4,99.4,99.5]
,index: 3
},
{
name: 'Drug target',
visible: false,type: 'line',
data: [98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98,98]
,index: 4
},
{
name: 'Radiotherapy',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,97.8,98.2,98.2,98.6,98,97.5,97.9,98.3,98.1,97.9,98.1,97.2,97.1,97.1,97.3,97.9,97.8,97.6,97.6,97.9,97.4,97.8,96.9,97.4,97.1]
,index: 5
},
{
name: 'Radiotherapy target',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94,94]
,index: 6
}
]
}
