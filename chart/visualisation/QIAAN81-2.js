/* Created by ianb on 01/10/2014 11:52:43 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long do people wait on average for diagnostic tests?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2006','Feb 2006','Mar 2006','Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Median wait time for diagnostic tests'}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Median',
type: 'line',
data: [4.66,6.54,4.91,6.1,5.65,5.37,5.32,5.62,5.15,5.18,4.84,5.5,4.7,4.22,3.87,4.13,3.8,3.38,3.32,3.39,2.82,2.72,2.42,2.95,1.97,1.88,2.06,1.67,1.85,1.68,1.71,1.86,1.65,1.69,1.62,2.17,1.48,1.59,1.65,1.64,1.86,1.7,1.71,1.85,1.65,1.73,1.7,2.26,1.59,1.72,1.74,1.67,1.83,1.75,1.76,1.94,1.74,1.8,1.8,2.37,1.63,1.8,1.82,2.34,1.88,1.82,1.84,2.01,1.76,1.85,1.8,2.32,1.69,1.76,1.83,1.73,1.81,1.83,1.9,2.01,1.79,1.86,1.8,2.41,1.71,1.83,2.04,1.77,2.02,1.87,1.89,2.06,1.85,1.91,1.84,2.47,1.79,1.93,1.95,2.26,2.1,1.99,2.02]
,index: 1
}
]
}
