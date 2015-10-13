/* Created by EFisher on 12/10/2015 14:31:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of category A calls attended within 19 minutes changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Percentage of category A calls attended <br> within 19 minutes ', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'North',
visible: true,type: 'line',
data: [97.4,97.5,97.1,97.3,97.5,96.9,96.6,97.1,96.1,97.5,95.9,96.2,96.7,96.2,96.8,96.7,96.6,95.9,96.1,96.2,94.6,95.8,95.8,96.1,96.8,97.2,97.2,96.4,96.8,96.2,96.5,96,95.8,96.5,96.5,96.4,96.1,95.9,95.4,94.6,95.7,95.5,94.6,94.4,89.9,93,93.7,93.6,94.7,96.3,95.4,94.9]
,index: 1
},
{
name: 'South',
visible: false,type: 'line',
data: [97.3,97.2,96.5,97.5,97.4,96.7,96.7,97.1,96.1,96.8,95.9,96.4,96.9,96.7,96.7,96,96.4,96.3,96.4,96.5,95.2,96,96.2,95.1,96.2,96.8,96.3,95.4,95.9,96.3,96.6,96.2,95.6,96.4,96,96.2,96.3,95.4,95.1,94.7,95.6,95.5,94.9,94.5,92.2,94.2,93.4,94.7,94.7,94.1,93.2,92.6]
,index: 2
},
{
name: 'Midlands & East',
visible: false,type: 'line',
data: [96.1,96.1,95.5,95.6,95.4,95.2,95.3,95.7,94.8,95.7,94.3,95.7,95.7,95.3,95.4,95.3,95,94.5,95.1,94.9,93.1,94.3,94.4,93.3,95.1,95.9,95.6,94.5,95,94.7,94.9,94.7,94.1,95.3,94.3,94.6,95,94.4,94.3,93.4,94.2,94.5,94,94.3,91.2,93.5,94.1,95.1,96,95.7,94.8,93.8]
,index: 3
},
{
name: 'London',
visible: false,type: 'line',
data: [99.3,99.4,99.3,99.4,99.3,99.2,99.2,98.6,99,99.3,99,98.7,98.5,97.7,98.4,98.6,99,98,98,97.9,96.7,98.6,98.5,98.5,98.1,98.5,98.2,97.8,98,97.3,97.1,97.6,97.1,98.3,98.2,98.3,96.5,95.8,94.5,93.4,93.9,90.5,91.5,89.2,84.7,91.3,91.8,92.2,94.2,94.5,93.3,93.5]
,index: 4
},
{
name: 'England',
visible: true,type: 'line',
data: [97.3,97.3,96.8,97.2,97.1,96.7,96.6,96.9,96.1,97,95.9,96.5,96.7,96.3,96.6,96.4,96.5,95.9,96.2,96.1,94.6,95.8,95.9,95.4,96.4,96.9,96.7,95.8,96.2,95.9,96.1,95.9,95.4,96.4,96,96.1,95.8,95.3,94.9,94.1,95,94.4,94,93.6,90.1,93.2,93.5,94.1,95,95.3,94.4,93.8]
,index: 5
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'England trendline',
data: [[0, 97.4],[51, 94]]
},
{
name: '19 minute target',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 6
}
]
}
