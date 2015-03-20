/* Created by ianb on 20/03/2015 10:57:24 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have admissions for falls changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Monthly rate of admissions per 100,000 <br> people 65 and over (standardised <br> for age and sex', offset: 99}
, labels: {
}},
series:[
{
name: 'DSR',
type: 'line',
data: [103.35,111.18,108.78,108.88,111.84,106.68,111.66,113.53,123.01,117.66,100.08,110.16,112.43,115.98,108.68,111.3,118.69,114.16,114.97,112.9,125.06,114.64,110.51,112.8,109.92,116.15,114.93,116.94,117.97,118.27,124.56,118.53,142.04,128.42,117.88,121.06,124.18,128.35,129.25,126.16,130.94,135.83,136.96,132.45,190.89,156.48,121.4,128.92,132.9,135.67,131.04,131.09,137.71,136.07,141.98,139.9,183.54,135.7,120.69,131.87,134.67,138.17,134.72,135.38,138.87,136.37,141.64,137.36,160.08,138.61,134.68,132.69,126.86,136.91,132.37,137.88,139.57,139.89,139.55,137.39,156.86,146.45,122.78,135.27,129.95,139.97,137.78,145.37,143.4,138.07,141.29,148.51,156.4]
,index: 1
},
{
name: 'Trend (pre-Austerity)',
type: 'line',
data: [103.64,104.36,105.08,105.8,106.52,107.24,107.96,108.68,109.4,110.12,110.84,111.56,112.28,113,113.72,114.45,115.17,115.89,116.61,117.33,118.05,118.77,119.49,120.21,120.93,121.65,122.37,123.09,123.81,124.53,125.26,125.98,126.7,127.42,128.14,128.86,129.58,130.3,131.02,131.74,132.46,133.18,133.9,134.62,135.34,136.07,136.79,137.51,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'Trend (post-Austerity)',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,136.27,136.39,136.51,136.64,136.76,136.88,137.01,137.13,137.25,137.38,137.5,137.62,137.75,137.87,137.99,138.11,138.24,138.36,138.48,138.61,138.73,138.85,138.98,139.1,139.22,139.35,139.47,139.59,139.71,139.84,139.96,140.08,140.21,140.33,140.45,140.58,140.7,140.82,140.95,141.07,141.19,141.31,141.44,141.56,141.68]
,index: 3
}
]
}
