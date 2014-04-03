/* Created by EFisher on 26/03/2014 16:55:44 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of Category A (Red 1 & 2) calls attended within 8 minutes changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013']
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
name: 'Category A (red1 and 2) calls',
type: 'line',
data: [76.9,77,75.5,76.6,77.5,75.7,76,77.1,74.1,77.9,73.9,75.5,76.2,74.8,77.4,77.3,78,75.8,76.4,75.9,70.8,75.6,75.3,73.8,75.7,77.5,76.8,73.7,75.1,73.5,73.3,73,71.7]
,index: 1
},
{
name: 'Catergory A (red1) calls',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,75.6,75.3,75.1,75.1,74.9,73.2,70.4,73.5,74.1,73.4,75.4,77.9,77.3,75.5,77,75.2,74.6,74.2,72.7]
,index: 2
},
{
name: 'Category A (red 2 calls)',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,77.5,77.4,78.1,75.9,76.5,76,70.8,75.8,75.3,73.8,75.7,77.5,76.8,73.6,75,73.4,73.3,73,71.7]
,index: 3
},
{
name: 'National standard',
type: 'line',
data: [75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75,75]
,index: 4
}
]
}
