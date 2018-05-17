/* Created by JMorris on 09/05/2018 14:45:39 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has childhood vaccination coverage in England changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2006/07','2007/08','2008/09','2009/10','2010/11','2011/12','2012/13','2013/14','2014/15','2015/16','2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of children vaccinated <br> in England by their first or second <br> birthday', offset: 99}
, max: 100
, min: 80
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib) 1st birthday',
visible: true,type: 'line',
data: [91.1,91.3,92,93.6,94.2,94.7,94.7,94.3,94.2,93.6,93.4]
,index: 1
},
{
name: 'Diphtheria, Tetanus, Polio, Pertussis, Hib (DTaP/IPV/Hib) 2nd birthday',
visible: false,type: 'line',
data: [93.4,93.6,93.9,95.3,96,96.1,96.3,96.1,95.7,95.2,95.1]
,index: 2
},
{
name: 'Pneumococcal Disease (PCV)',
visible: false,type: 'line',
data: [null,83.7,91.3,92.9,93.6,94.2,94.4,94.1,93.9,93.5,93.5]
,index: 3
},
{
name: 'Pneumococcal Disease (PCV) booster',
visible: false,type: 'line',
data: [null,null,81.5,87.6,89.3,91.5,92.5,92.4,92.2,91.5,91.5]
,index: 4
},
{
name: 'Measles, Mumps, Rubella (MMR)',
visible: false,type: 'line',
data: [85.2,84.6,84.9,88.2,89.1,91.2,92.3,92.7,92.3,91.9,91.6]
,index: 5
},
{
name: 'Hib/MenC booster',
visible: false,type: 'line',
data: [null,null,85.4,90,91.6,92.3,92.7,92.5,92.1,91.6,91.5]
,index: 6
},
{
name: 'WHO target',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95]
,index: 7
}
]
}
