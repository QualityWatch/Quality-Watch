/* Created by JMorris on 09/05/2018 14:37:47 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of people starting treatment within 18 weeks of referral changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Proportion of patients starting <br> treatment within 18 weeks of referral', offset: 87}
, max: 100
, min: 70
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Incomplete RTT pathways',
visible: true,type: 'line',
data: [90.3,91.1,91.3,91.9,91.4,90.8,90.1,90.4,90.2,90,88.6,88.3,88.7,89.4,90.5,91.1,91.1,90.5,90.6,90.6,90.9,91.3,91.4,92.2,92.6,93.3,94.1,94.4,94.1,94,94.5,94.4,94.8,94.8,94.5,94.3,94.3,94.2,94.5,94.8,94.6,94.4,94.2,94.2,94.2,94,93.6,93.5,93.4,93.7,93.7,93.7,93.7,93.3,93.1,93.5,93.2,93.3,92.8,92.6,93.1,93.1,93.3,93.5,93.2,92.9,92.6,92.5,92.3,92.4,91.8,92,92.1,91.5,91.6,91.8,91.5,91.3,90.9,90.6,90.4,90.5,89.7,90,90,90.3,89.9,90.4,90.3,89.9,89.4,89.1,89.3,89.5,88.2,88.2,87.9]
,index: 1
},
{
name: 'Admitted RTT pathways',
visible: false,type: 'line',
data: [87.8,88.6,88.4,90.1,89.9,89.5,89.5,88,88.2,88,88.9,86,85.7,86.1,86.9,87.7,86.8,86.9,86.5,86.5,87.2,87.4,88.3,87.3,87.7,88.1,88.6,89.9,88.9,89,89.2,88.1,88.9,89.3,90.4,88.9,88.9,89.2,88.5,89.7,88.9,89,89.1,87.8,88,88,89.1,87.1,87.2,87.1,87.5,88,87.1,86.8,85.3,85.3,86.2,85.1,88.2,85.8,84.6,84.8,85.2,86.5,85.7,85.3,84.9,83.1,83,82.5,83.7,81,80.7,80.7,79.3,80.2,79.2,78.7,79.1,77,76.9,76.8,78.6,76.4,75.5,75.4,75.2,76.6,76.1,76.1,75.8,75,75,75.4,77.2,75.9,74.4]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
visible: false,type: 'line',
data: [97.7,97.8,97.9,98.1,98.1,98,98,97.8,97.6,97.5,97.5,97.2,97.1,97.2,97.4,97.6,97.5,97.3,97.2,97.2,97.1,97,97.1,97,97.1,97.4,97.6,97.8,97.7,97.6,97.6,97.3,97.4,97.4,97.6,97.4,97.4,97.5,97.1,97.4,97.3,97.1,97.1,96.7,96.6,96.5,96.7,96.3,96.2,96.2,96.3,96.4,96.2,95.8,95.4,95.1,95.1,94.7,95.4,94.9,94.6,95.1,95.1,95.5,95.1,94.7,94.5,93.7,93.4,93,93.2,92.5,92.7,92.6,92.1,92.6,92.1,91.3,91.3,90.2,89.7,89.6,90.4,89.7,89.9,90.3,90.5,91,90.7,90.2,89.9,89.5,89.5,89.2,89.8,89,89.2]
,index: 3
},
{
name: 'Admitted target',
visible: false,type: 'line',
data: [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 4
},
{
name: 'Non-admitted target',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 5
},
{
name: 'Incomplete target',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92]
,index: 6
}
]
}
