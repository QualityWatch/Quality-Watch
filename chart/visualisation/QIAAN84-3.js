/* Created by EFisher on 17/02/2016 18:38:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many patients are affected by delayed transfers (by the type of care they received)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015']
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
data: [2559,2647,2513,2352,1995,2563,2460,2290,2144,2273,2318,2350,2320,2340,2337,2402,2026,2474,2363,2400,2355,2311,2556,2377,2405,2492,2530,2383,2040,2545,2505,2518,2538,2599,2356,2461,2556,2729,2675,2678,2235,2683,2763,2815,2671,2898,2869,3006,3096,3291,3364,3380,2854,3570,3342,3215,3012,3242,3311,3176,3423,3476,3430,3671,3166]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Acute trendline',
data: [[0, 2074.1],[64, 3263.9]]
},
{
name: 'Non-Acute',
type: 'line',
data: [2381,2357,2075,2057,1866,2034,1944,1880,1766,1783,1819,1878,1824,1825,1813,1763,1591,1620,1644,1628,1599,1546,1530,1654,1556,1610,1585,1511,1408,1643,1502,1535,1508,1585,1532,1500,1528,1502,1472,1522,1414,1538,1513,1512,1536,1618,1494,1606,1608,1669,1566,1683,1621,1651,1600,1733,1727,1730,1685,1705,1746,1771,1898,1912,1843]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Acute trendline',
data: [[0, 1830.8],[64, 1554.9]]
}
]
}
