/* Created by NCODowd on 04/04/2016 08:52:47 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of staff who feel under pressure to attend work while ill changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
categories: ['2009','2010','2011','2012','2013','2014','Question<br>change','2015*','2016*']
, labels: {
}
},
yAxis: {
title: {text:'Un-weighted percentage of staff <br> feeling pressure in last 3 months <br> to attend work when feeling unwell<br>*= weighted score', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
  showInLegend: false,
type: 'column',
data: [21,22,23,27,25,23,null,59,56]
,
}
]
}
