/* Created by EFisher on 25/02/2014 18:25:10 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to the proportion of people being treated within 18 weeks?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jun 2008','Jul 2008','Aug 2008','Sep 2008','Oct 2008','Nov 2008','Dec 2008','Jan 2009','Feb 2009','Mar 2009','Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of referrals who have <br> been treated in less than 18 weeks', offset: 87}
, max: 100
, min: 75
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [88.85,89.88,90.26,90.18,90.57,90.65,92.78,92.94,92.77,93.04,93.27,93.72,93.64,93.66,93.59,93.29,93.01,92.78,93.26,92.62,91.93,92.03,92.11,92.91,93.05,93.26,93.21,92.47,92.38,92.01,92.17,90.68,89.8,89.65,90.43,90.69,90.15,90.55,90.37,90.7,91.17,91.04,91.44,91.31,91.19,91.08,91.95,92.61,92.09,92.66,92.7,92.2,92.65,92.71,93.11,92.57,92.18,92.06,91.65,92.08,91.69,92.08,92.22,91.53,91.4,91.04]
,index: 1
},
{
name: 'Incomplete RTT pathways',
visible: false,type: 'line',
data: [77.5,81.11,80.54,82.12,85.04,85.62,85.2,85.49,87.17,87.58,89.64,89.76,90.48,90.34,90.2,90.25,90.37,90.48,89.97,89.65,90.26,91.12,91.32,91.86,91.37,90.85,90.08,90.36,90.25,90.02,88.57,88.35,88.66,89.45,90.45,91.13,91.12,90.53,90.61,90.62,90.88,91.27,91.4,92.21,92.62,93.31,94.05,94.43,94.14,94.04,94.52,94.37,94.77,94.79,94.49,94.34,94.32,94.25,94.47,94.82,94.64,94.45,94.23,94.18,94.18,93.97]
,index: 2
},
{
name: 'Non-admitted RTT pathways',
visible: false,type: 'line',
data: [94.41,95.05,95.35,95.69,96.3,96.49,97.06,97.33,97.32,97.39,97.44,97.78,97.78,97.73,97.71,97.57,97.68,97.74,97.87,97.74,97.81,97.85,97.94,98.19,98.2,98.08,98.03,97.83,97.67,97.57,97.6,97.31,97.22,97.31,97.5,97.7,97.55,97.42,97.28,97.23,97.16,97.04,97.22,97.09,97.13,97.45,97.68,97.92,97.8,97.67,97.66,97.42,97.49,97.54,97.67,97.53,97.51,97.58,97.18,97.49,97.35,97.2,97.17,96.78,96.7,96.51]
,index: 3
},
{
name: 'Series4',
visible: false,type: 'line',
data: [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90]
,index: 4
},
{
name: 'Series5',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 5
},
{
name: 'Incomplete RTT pathways',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92]
,index: 6
}
]
}
