/* Created by JMorris on 28/11/2017 12:59:34 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many days in total are patients delayed by the type of care received?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of delayed days'}
, labels: {
format: '{value:.0f}' 
}},
series:[
{
name: 'Acute',
type: 'line',
data: [55332,60316,58362,59184,59665,60125,60809,66097,58407,60638,64607,62140,63288,64717,64459,64241,62663,65054,64590,71449,62117,71521,66702,69519,72827,69679,70875,70718,63743,78035,66555,70492,70028,74884,69457,68658,76373,75297,78487,73791,70132,79261,71872,78887,74055,81292,81164,88035,90639,91885,96564,94918,90825,103163,90705,91466,88686,89125,91102,95266,93109,97738,104090,100364,100311,104012,104253,112856,112890,115500,116691,123877,127038,134256,134207,127672,128001,130477,124558,132774,115539,117067,117115,118256,115742,110055]
,index: 1
},
{
name: 'Non-Acute',
type: 'line',
data: [54586,55539,54884,53907,56801,54221,51577,57033,49657,52726,52468,53377,54009,52477,52419,50464,49433,46880,44942,48287,46365,47810,43646,47681,47267,44585,46006,45451,43909,47681,42625,44666,43269,45666,43527,43293,45964,43567,45365,43141,42497,45028,40973,44174,42206,45487,42954,45868,46974,46382,46363,46031,48200,47229,43648,48924,49344,47990,48436,52110,51984,50000,56040,52791,53697,55455,53802,57026,55128,56794,56431,60701,60813,62314,65888,65534,67444,67034,61932,66867,61406,61137,60927,63632,64323,58247]
,index: 2
}
]
}
