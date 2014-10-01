/* Created by ianb on 01/10/2014 11:52:24 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to people waiting the longest (over 52 weeks)?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of those referred waiting <br> more than 52 weeks for treatment', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [1.32,1.27,1.27,1.31,1.28,1.31,0.98,0.92,0.88,0.9,0.8,0.76,0.84,0.72,0.71,0.74,0.79,0.52,0.55,0.54,0.61,0.6,0.61,0.58,0.54,0.49,0.52,0.76,0.76,0.77,0.43,0.29,0.25,0.25,0.24,0.21,0.17,0.13,0.13,0.11,0.08,0.06,0.05,0.04,0.04,0.03,0.03,0.02,0.01,0.02,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02]
,index: 1
},
{
name: 'Admitted (adjusted) RTT pathways',
type: 'line',
data: [0.16,0.17,0.17,0.19,0.17,0.14,0.14,0.13,0.1,0.11,0.11,0.1,0.11,0.12,0.13,0.1,0.1,0.1,0.1,0.1,0.1,0.12,0.15,0.15,0.16,0.18,0.22,0.2,0.25,0.25,0.22,0.2,0.2,0.19,0.19,0.18,0.14,0.13,0.15,0.14,0.16,0.16,0.13,0.11,0.09,0.12,0.09,0.13,0.08,0.06,0.07,0.05,0.05,0.06,0.05,0.05,0.04,0.07,0.09,0.09,0.08,0.11,0.06,0.07]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [0.18,0.15,0.15,0.14,0.16,0.2,0.15,0.13,0.12,0.11,0.09,0.11,0.11,0.12,0.09,0.09,0.09,0.08,0.12,0.11,0.12,0.1,0.13,0.12,0.12,0.14,0.12,0.14,0.12,0.12,0.12,0.13,0.13,0.13,0.13,0.12,0.08,0.08,0.07,0.08,0.06,0.06,0.07,0.05,0.04,0.03,0.04,0.03,0.03,0.02,0.03,0.02,0.02,0.02,0.02,0.02,0.01,0.02,0.02,0.02,0.02,0.02,0.01,0.01]
,index: 3
}
]
}
