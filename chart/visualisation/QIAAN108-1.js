{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do people feel supported to manage their long-term condition(s)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','July 2013 - March 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'In the last 6 months, have patietnshad <br> enough support to help them manage <br> LTCs', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
    data: [31,28.4,40.5,39.7,{y:39.1, color:'#3FCFD5'}]
,index: 4
},
{
name: 'Yes, to some extent',
type: 'column',
    data: [25.3,25.3,23.6,24.3,{y: 24.8, color: '#E59AAA'}]
,index: 3
},
{
name: 'No',
type: 'column',
    data: [13.7,15.5,11.1,11.8,{y:12.0, color: '#B634BB'}]
,index: 2
},
{
name: 'I have not needed such support',
type: 'column',
    data: [27.1,27.3,22.2,21.7,{y:21.5, color: '#CECFCB'}]
,index: 1
},
{
name: 'Don’t know/can’t say',
type: 'column',
    data: [3,3.5,2.7,2.6,{y:2.6, color:'#6FFFF5'}]
,index: 0
}
]
}
