/* Created by EFisher on 25/02/2014 18:26:53 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Is the number of calls responsible for the standard breach in the month?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of trusts '}
, max: 14
, labels: {
}},
series:[
{
name: 'meeting the 8 minute target for responding to category A calls
',
type: 'column',
data: [11,11,12,10,11,9,2,8,6,4,8,10,9,4,5,5,5,3,5]
,index: 1
},
{
name: 'breaching the 8 minute target for responding to category A calls
',
type: 'column',
data: [1,1,0,2,1,3,10,4,5,7,3,1,2,7,6,6,6,8,6]
,index: 2
},
{
name: 'National breach',
type: 'scatter',
data: [[41244,13],[41334,13],[41456,13],[41518,13],[41548,13],[41579,13],[41609,13]]
,index: 1
}
]
}
