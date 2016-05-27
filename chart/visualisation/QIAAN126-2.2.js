/* Created by NCODowd on 23/05/2016 17:55:35 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What are the trends in publicly funded adult social care staff numbers?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2012,2013,2014,2015]
, labels: {
}
},
yAxis: {
title: {text:'Percentage change from 2011 basline <br> in nubers of whole time equivalent', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Direct care',
type: 'line',
data: [-5.7,-15.2,-21.3,-30.8]
,index: 1
},
{
name: 'Manager, Supervisor',
type: 'line',
data: [-4.3,-11.1,-17.9,-21.3]
,index: 2
},
{
name: 'Professional',
type: 'line',
data: [1.7,3.4,-2.3,-1.7]
,index: 3
},
{
name: 'Other',
type: 'line',
data: [-6.1,-12.3,-16,-17.9]
,index: 4
}
]
}
