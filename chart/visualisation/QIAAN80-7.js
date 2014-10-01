/* Created by ianb on 01/10/2014 11:52:31 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many people are waiting for treatment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014']
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
data: [4.187,3.998,3.94,3.922,3.854,3.51,3.116,3.057,2.94,2.872,2.743,2.642,2.676,2.634,2.475,2.433,2.346,2.303,2.31,2.36,2.418,2.445,2.483,2.482,2.46,2.429,2.376,2.338,2.365,2.315,2.337,2.421,2.508,2.574,2.569,2.657,2.655,2.591,2.572,2.527,2.411,2.37,2.442,2.455,2.474,2.544,2.551,2.612,2.615,2.597,2.568,2.501,2.385,2.359,2.381,2.414,2.481,2.557,2.635,2.682,2.637,2.641,2.637,2.591,2.565,2.538,2.572,2.661,2.749,2.847,2.879,2.906,2.937,2.903,2.912,2.879,2.88,2.905,2.911,2.911,3.021,3.096,3.062,2.999]
,index: 1
}
]
}
