/* Created by ianb on 14/10/2013 11:44:39 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed by the type of care received?'},
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
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'acute',
type: 'line',
data: [55332,60316,58362,59184,59665,60125,60809,66097,58407,60638,64607,62140,63288,64717,64459,64241,62663,65054,64590,71449,62117,71521,66702,69519,72827,69679,70875,70718,63743,78035,66555,70492,70028,74324,69455,68648]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'acute trendline',
data: [[0, 58091.9],[35, 72284.9]]
},
{
name: 'non-acute',
type: 'line',
data: [54586,55539,54884,53907,56801,54221,51577,57033,49657,52726,52468,53377,54009,52477,52419,50464,49433,46880,44942,48287,46365,47810,43646,47681,47267,44585,46006,45451,43909,47655,42685,47694,42966,45909,43631,43635]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'non-acute trendline',
data: [[0, 56073.9],[35, 43141.9]]
}
]
}
