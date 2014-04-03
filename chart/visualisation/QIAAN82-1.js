/* Created by EFisher on 26/03/2014 16:53:06 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of abandoned ambulance calls changed?'},
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
title: {text:'Proportion of calls abandoned before <br> being answered by the ambulance <br> service', offset: 99}
, max: 5
, min: 0
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Proportion of calls abandoned before being answered',
type: 'line',
data: [1.36,0.99,1.42,1.14,1.14,1.25,1.11,0.94,1.14,1.21,1.2,1.16,0.9,1.43,1.01,1.37,2.28,1.74,1.2,1.1,2.26,1.41,1.09,1.31,1.05,1,1.19,1.61]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Proportion of calls abandoned before being answered trendline',
data: [[0, 1.16],[27, 1.4]]
}
]
}
