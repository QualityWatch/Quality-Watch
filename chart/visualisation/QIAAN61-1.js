/* Created by NCODowd on 07/07/2016 12:49:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do doctors or nurses talk in front of patients as though they aren\'t there?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015]
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
data: [22,22,22,22,23,22,22,19,19,19,18]
,index: 1
},
{
name: 'Doctors',
type: 'line',
data: [29,28,28,28,28,28,27,24,24,24,22]
,index: 2
}
]
}
