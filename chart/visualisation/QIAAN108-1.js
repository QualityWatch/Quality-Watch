/* Created by EFisher on 05/10/2015 14:37:36 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do people feel supported to manage their long-term condition(s)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10', '2010/11', '2011/12', 'Jun-12', 'Dec-12', 'Jun-13', 'Dec-13', 'Jul-14', 'Jan-15', 'Jul-15']
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
    data: [31, 28.4, 40.5,{y:40.5, color:'#3FCFD5'},{y:40.2, color:'#3FCFD5'},{y:39.7, color:'#3FCFD5'},{y:39.4, color:'#3FCFD5'},{y:39.1, color:'#3FCFD5'},{y:38.9, color:'#3FCFD5'},{y:38.6, color:'#3FCFD5'}]
,index: 4
},
{
name: 'Yes, to some extent',
type: 'column',
    data: [25.3, 25.3, 23.6,{y:23.6, color:'#E59AAA'},{y:23.9, color:'#E59AAA'},{y:24.3, color:'#E59AAA'},{y:24.6, color:'#E59AAA'},{y:24.8, color:'#E59AAA'},{y:24.8, color:'#E59AAA'},{y:24.7, color:'#E59AAA'}]
,index: 3
},
{
name: 'No',
type: 'column',
    data: [13.7, 15.5, 11.1,{y:11.1, color:'#B634BB'},{y:11.5, color:'#B634BB'},{y:11.8, color:'#B634BB'},{y:11.8, color:'#B634BB'},{y:12, color:'#B634BB'},{y:12.2, color:'#B634BB'},{y:12.4, color:'#B634BB'}]
,index: 2
},
{
name: 'I have not needed such support',
type: 'column',
    data: [27.1, 27.3, 22.2,{y:22.2, color:'#CECFCB'},{y:21.8, color:'#CECFCB'},{y:21.7, color:'#CECFCB'},{y:21.7, color:'#CECFCB'},{y:21.5, color:'#CECFCB'},{y:21.4, color:'#CECFCB'},{y:21.6, color:'#CECFCB'}]
,index: 1
},
{
name: 'Don’t know/can’t say',
type: 'column',
    data: [3, 3.5, 2.7,{y:2.7, color:'#6FFFF5'},{y:2.6, color:'#6FFFF5'},{y:2.6, color:'#6FFFF5'},{y:2.5, color:'#6FFFF5'},{y:2.6, color:'#6FFFF5'},{y:2.6, color:'#6FFFF5'},{y:2.7, color:'#6FFFF5'}]
,index: 0
}
]
}