/* Created by JMorris on 15/02/2018 14:40:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Did people feel they were treated with respect and dignity?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,'Question change',2014,2015,2016,2017]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Did people feel their NHS healthcare <br> or social care worker (2010-13) <br> or organisation (2014 on)  treated <br> them with dignity and respect', offset: 111}
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
data: [88,87,87,86,null,74,72.3,72.8,72]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [10,11,11,11,null,19.4,20.3,19.5,20.5]
,index: 1
},
{
name: 'No',
type: 'column',
data: [2,2,2,2,null,6.6,7.4,7.7,7.5]
,index: 0
}
]
}
