/* Created by EFisher on 25/02/2014 18:25:21 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people receiving diagnostic tests within 6 and 13 weeks changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2006','Feb 2006','Mar 2006','Apr 2006','May 2006','Jun 2006','Jul 2006','Aug 2006','Sep 2006','Oct 2006','Nov 2006','Dec 2006','Jan 2007','Feb 2007','Mar 2007','Apr 2007','May 2007','Jun 2007','Jul 2007','Aug 2007','Sep 2007','Oct 2007','Nov 2007','Dec 2007','Jan 2008','Feb 2008','Mar 2008','Apr 2008','May 2008','Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'The proportion of diagnostic tests <br> which happened after 6 weeks and <br> 13 weeks', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '6+ weeks',
type: 'line',
data: [54.85,48.99,48.76,50.55,47.96,46.11,45.95,47.66,45.31,45.31,43.65,46.69,45.08,37.75,34.72,35.94,32.71,31.17,28.96,28.6,24,20.21,16.99,17.03,14.1,7.38,3.14,2.9,2.79,2.37,2.63,2.54,1.58,1.44,1.19,1.43,1.43,0.85,0.59,0.81,0.79,0.8,0.9,0.86,0.69,0.51,0.61,1.12,1.46,0.69,0.73,0.78,0.65,0.65,0.7,1.13,1.05,0.98,1.07,2.01,2.15,1.46,1.88,2.56,2.72,2.1,1.84,2.04,1.66,1.29,1.08,1.42,1.54,0.92,0.69,0.99,0.85,1.26,0.93,1.05,0.8,0.6,0.71,1.1,1.31,0.88,1.1,1.15,0.99,0.91]
,index: 1
},
{
name: '13+ weeks',
type: 'line',
data: [29.27,27.68,25.16,25.4,24.26,24.28,23.12,23.88,23.13,24.81,22.86,23.5,21.57,19.35,15.58,15.26,14.6,14,12.92,11.8,9.56,8.07,6.1,5.03,3.52,1.88,0.86,0.66,0.64,0.47,0.97,0.81,0.6,0.57,0.4,0.27,0.26,0.2,0.06,0.05,0.06,0.06,0.07,0.04,0.03,0.03,0.03,0.04,0.12,0.1,0.05,0.04,0.04,0.04,0.04,0.04,0.08,0.09,0.11,0.13,0.15,0.15,0.15,0.25,0.31,0.3,0.25,0.23,0.2,0.2,0.14,0.14,0.14,0.09,0.04,0.06,0.06,0.11,0.1,0.14,0.1,0.09,0.13,0.16,0.19,0.16,0.13,0.15,0.17,0.15]
,index: 2
}
]
}
