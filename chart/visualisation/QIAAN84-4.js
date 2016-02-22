/* Created by EFisher on 17/02/2016 18:38:53 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed (by the type of care received)?'},
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
title: {text:'Total number of delayed days'}
, max: 110000
, min: 30000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Acute',
type: 'line',
data: [55332,60316,58362,59184,59665,60125,60809,66097,58407,60638,64607,62140,63288,64717,64459,64241,62663,65054,64590,71449,62117,71521,66702,69519,72827,69679,70875,70718,63743,78035,66555,70492,70028,74884,69457,68658,76373,75297,78487,73791,70132,79261,71872,78887,74055,81292,81164,88035,90639,91885,96564,94918,90825,103163,90705,91466,88686,89125,91102,95139,93083,97738,104090,100515,100493]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Acute trendline',
data: [[0, 53626.1],[64, 95846.4]]
},
{
name: 'Non-Acute',
type: 'line',
data: [54586,55539,54884,53907,56801,54221,51577,57033,49657,52726,52468,53377,54009,52477,52419,50464,49433,46880,44942,48287,46365,47810,43646,47681,47267,44585,46006,45451,43909,47681,42625,44666,43269,45666,43527,43293,45964,43567,45365,43141,42497,45028,40973,44174,42206,45487,42954,45868,46974,46382,46363,46031,48200,47229,43648,48924,49344,47990,48436,51866,51984,50000,56004,52676,53567]
,index: 2
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'Non-Acute trendline',
data: [[0, 50874.7],[64, 45656.9]]
}
]
}
