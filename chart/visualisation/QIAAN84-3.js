/* Created by EFisher on 24/01/2014 17:01:14 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many patients are affected by delayed transfers by the type of care received?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of Patients with a Delayed <br> Transfer of Care', offset: 87}
, min: 1000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Acute',
type: 'line',
data: [2559,2647,2513,2352,1995,2563,2460,2290,2144,2273,2318,2350,2320,2340,2337,2402,2026,2474,2363,2400,2355,2311,2556,2377,2405,2492,2530,2383,2040,2545,2505,2518,2538,2592,2356,2461]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Acute trendline',
data: [[0, 2344.8],[35, 2433]]
},
{
name: 'Non-Acute',
type: 'line',
data: [2381,2357,2075,2057,1866,2034,1944,1880,1766,1783,1819,1878,1824,1825,1813,1763,1591,1620,1644,1628,1599,1546,1530,1654,1556,1610,1585,1511,1408,1643,1504,1534,1505,1608,1539,1516]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Acute trendline',
data: [[0, 2089],[35, 1415.9]]
}
]
}
