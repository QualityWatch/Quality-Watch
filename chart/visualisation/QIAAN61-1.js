/* Created by ianb on 08/10/2013 13:50:01 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do doctors or nurses talk in front of patients as though they weren\'t there?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2002,2005,2006,2007,2008,2009,2010,2011,2012]
, labels: {
}
},
yAxis: {
title: {text:'Percentage of respondents who stated <br> that the following clinicians talked <br> in front of them as if they weren\'t <br> there', offset: 111}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Nurses',
type: 'line',
data: [19,22,22,22,22,22,22,22,19]
,index: 1
},
{
name: 'Doctors',
type: 'line',
data: [29,28,28,28,28,28,27,26,24]
,index: 2
}
]
}
