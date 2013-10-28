/* Created by ianb on 14/10/2013 11:45:14 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of category A calls attended within 19 minutes changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of Category A calls responded <br> within 19 minutes', offset: 87}
, min: 94
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Category A calls',
type: 'line',
data: [97.3,97.3,96.8,97.2,97.1,96.7,96.6,96.9,96.1,97,95.9,96.5,96.7,96.3,96.6,96.4,96.5,95.9,96.2,96.1,94.6,95.8,95.9,95.4,96.3,96.9,96.6,95.7]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Category A calls trendline',
data: [[0, 97.1],[27, 95.8]]
},
{
name: 'National target',
type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 2
}
]
}
