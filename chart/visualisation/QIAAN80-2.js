/* Created by NCODowd on 07/07/2016 12:50:16 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many people are waiting for treatment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Number of people waiting for treatment <br> (millions)', offset: 87}
, labels: {
format: '{value:.3f}' 
}},
series:[
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [2365316,2315060,2337098,2420525,2508495,2573895,2569098,2656614,2654900,2590970,2571819,2526792,2411293,2369585,2441735,2455424,2473680,2544162,2550720,2611906,2614998,2597388,2567505,2500701,2385147,2358616,2381172,2413969,2480664,2556698,2635475,2681884,2636514,2641049,2636826,2590737,2565126,2537530,2571993,2661165,2748808,2847373,2879204,2906489,2936981,2903316,2912243,2879129,2880156,2905331,2911205,2911442,3020111,3096929,3136096,3070250,3090525,2991237,3005906,2990258,2928414,2924045,2928213,3006877,3022512,3172627,3197125,3260044,3327055,3305892,3314102,3302932,3295934,3291099,3345912,3503513,3603305]
,index: 1
}
]
}
