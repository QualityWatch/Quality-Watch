/* Created by JMorris on 04/12/2017 12:38:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How many people are waiting for treatment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017']
, labels: {
 rotation: -90
, step: 4
}
},
yAxis: {
title: {text:'Total number of patients waiting <br> for treatment (millions)', offset: 87}
, max: 4.5
, min: 1.5
, labels: {
format: '{value:.4f}' 
}},
series:[
{
name: 'Total number of patients waiting for treatment (millions)',
type: 'line',
data: [4.19,4,3.94,3.92,3.85,3.51,3.12,3.06,2.94,2.87,2.74,2.64,2.68,2.63,2.47,2.43,2.35,2.3,2.31,2.36,2.42,2.44,2.48,2.48,2.46,2.43,2.38,2.34,2.37,2.32,2.34,2.42,2.51,2.57,2.57,2.66,2.65,2.59,2.57,2.53,2.41,2.37,2.44,2.46,2.47,2.54,2.55,2.61,2.61,2.6,2.57,2.5,2.39,2.36,2.38,2.41,2.48,2.56,2.64,2.68,2.64,2.64,2.64,2.59,2.57,2.54,2.57,2.66,2.75,2.85,2.88,2.91,2.94,2.9,2.91,2.88,2.88,2.91,2.91,2.91,3.02,3.1,3.14,3.07,3.09,2.99,3.01,2.99,2.93,2.92,2.93,3.01,3.02,3.17,3.2,3.26,3.33,3.31,3.31,3.31,3.3,3.29,3.35,3.5,3.6,3.66,3.63,3.66,3.69,3.7,3.75,3.72,3.65,3.62,3.66,3.73,3.78,3.81,3.83,3.85,3.87,3.83]
,index: 1
}
]
}
