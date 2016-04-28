/* Created by NCODowd on 21/04/2016 09:55:32 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the successful treatment rate of opiate drug users changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2010,2011,2012,2013,2014]
, labels: {
}
},
yAxis: {
title: {text:'Proportion of opiate drug users <br> successfully completing treatment', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
showInLegend: false,
type: 'column',
data: [6.6,8.6,8.2,7.8,7.4]
,index: 1
},
{name: 'Error',
     type:'errorbar',
     data: [
          [6.52,6.76],
          [8.49,8.76],
          [8.11,8.38],
          [7.63,7.90],
          [7.25,7.52]
     ]}
]
}