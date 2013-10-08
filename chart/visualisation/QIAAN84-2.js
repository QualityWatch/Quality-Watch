﻿/* Created by ianb on 08/10/2013 13:52:30 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed and how has this changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
title: {text:'Total number of delayed days'}
, max: 130000
, min: 100000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'total',
type: 'line',
data: [109918,115855,113246,113091,116466,114346,112386,123130,108064,113364,117075,115517,117297,117194,116878,114705,112096,111934,109532,119736,108482,119331,110348,117200,120094,114264,116881,116169,107652,125690,109240,118186,112994,120233,113086,112283]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'total trendline',
data: [[0, 114165.8],[35, 115426.8]]
}
]
}
