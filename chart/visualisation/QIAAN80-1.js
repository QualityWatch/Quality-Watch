/* Created by rreed on 4/19/2017 4:37:10 PM using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to the proportion of people being treated within 18 weeks?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Proportion of referrals who have <br> been treated in less than 18 weeks', offset: 87}
, max: 100
, min: 70
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Incomplete RTT pathways',
visible: true,type: 'line',
data: [89.97,89.65,90.26,91.12,91.32,91.86,91.37,90.85,90.08,90.36,90.25,90.02,88.57,88.35,88.66,89.45,90.45,91.13,91.12,90.53,90.61,90.62,90.88,91.27,91.4,92.21,92.62,93.31,94.05,94.43,94.14,94.04,94.52,94.37,94.77,94.79,94.49,94.34,94.32,94.25,94.47,94.82,94.64,94.45,94.23,94.18,94.17,93.97,93.6,93.47,93.42,93.75,93.75,93.74,93.73,93.31,93.13,93.45,93.2,93.31,92.84,92.57,93.07,93.15,93.34,93.49,93.22,92.87,92.6,92.52,92.34,92.4,91.84,92,92.12,91.48,91.59,91.82,91.53,91.25,90.89,90.59,90.41,90.46,89.7,89.94]
,index: 1
},
{
name: 'Admitted (unadjusted) RTT pathways',
visible: false,type: 'line',
data: [90.32,88.4,87.83,88.58,88.35,90.12,89.92,89.47,89.46,88.04,88.17,88.04,88.87,86.01,85.67,86.09,86.88,87.7,86.81,86.87,86.5,86.48,87.15,87.41,88.3,87.25,87.7,88.05,88.63,89.92,88.86,89,89.17,88.1,88.93,89.29,90.41,88.94,88.94,89.19,88.49,89.69,88.95,89.01,89.14,87.8,88.04,88.02,89.06,87.11,87.21,87.06,87.54,88.04,87.08,86.78,85.27,85.32,86.23,85.07,88.18,85.78,84.62,84.76,85.24,86.47,85.69,85.33,84.94,83.07,82.95,82.48,83.69,80.96,80.69,80.71,79.26,80.21,79.21,78.74,79.11,77.02,76.95,76.81,78.65,76.41]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
visible: false,type: 'line',
data: [97.81,97.69,97.74,97.76,97.87,98.12,98.13,98.01,97.96,97.77,97.61,97.47,97.5,97.2,97.13,97.2,97.41,97.61,97.48,97.34,97.21,97.16,97.09,96.97,97.14,97.03,97.05,97.39,97.62,97.84,97.72,97.57,97.57,97.34,97.38,97.44,97.57,97.44,97.42,97.52,97.1,97.4,97.28,97.12,97.07,96.7,96.63,96.45,96.72,96.28,96.23,96.21,96.28,96.44,96.17,95.81,95.39,95.1,95.09,94.69,95.45,94.94,94.64,95.05,95.13,95.52,95.1,94.68,94.46,93.71,93.45,92.99,93.25,92.49,92.7,92.65,92.06,92.57,92.05,91.27,91.26,90.22,89.67,89.61,90.4,89.67]
,index: 3
},
{
name: 'Admitted target',
visible: false,type: 'line',
data: [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 4
},
{
name: 'Non-admitted target',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 5
},
{
name: 'Incomplete target',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,null,null,null,null,null,null,null]
,index: 6
}
]
}
