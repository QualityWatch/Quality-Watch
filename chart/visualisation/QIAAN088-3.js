/* Created by ianb on 04/03/2014 10:54:07 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the number of calls resulting in an emergency response changed over time?'},
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
title: {text:'Number of calls resulting in an <br> emergency response', offset: 87}
, labels: {
}},
series:[
{
name: 'Breach in month for Category A (Red1 and 2) calls',
type: 'column',
data: [0,0,0,0,0,0,261891,0,0,261891,0,0,0,261891,0,261891,261891,261891,261891]
,index: 1
},
{
name: 'Red 1',
type: 'line',
data: [10453,10860,11053,11171,11117,11254,13360,11958,10841,12306,11163,10890,10224,11338,11417,10692,11166,10715,12404]
,index: 1
},
{
name: 'Red 2',
type: 'line',
data: [203988,211754,204238,202751,216511,214057,244519,225511,205301,236512,221175,221974,211969,225991,218702,214174,230419,227575,250174]
,index: 2
},
{
name: 'Number of Category A calls resulting in an ambulance arriving at the scene of the incident',
type: 'line',
data: [213373,221893,214531,213229,227030,224718,257070,236884,215693,248295,232057,232280,221154,236479,229128,224220,240958,237663,261891]
,index: 3
}
]
}
