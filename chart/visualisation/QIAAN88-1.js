/* Created by ianb on 08/10/2013 13:53:06 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of category A calls attended within 8 minutes changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
title: {text:'Proportion of Category A calls responded <br> to within 8 minutes', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Category A calls',
type: 'line',
data: [76.9,77,75.5,76.6,77.5,75.7,76,77.1,74.1,77.9,73.9,75.5,76.2,74.8,77.4,77.3,78,75.8,76.4,75.9,70.8,75.6,75.3,73.8,76.6,77.5,76.7,73.6]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Category A calls trendline',
data: [[0, 76.6],[27, 75.3]]
},
{
name: 'National target',
type: 'line',
data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75]
,index: 2
}
]
}
