/* Created by EFisher on 17/02/2016 18:38:40 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What\'s happening to the proportion of people being treated within 18 weeks?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Proportion of referrals who have <br> been treated in less than 18 weeks', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Incomplete RTT pathways',
visible: true,type: 'line',
data: [90,89.6,90.3,91.1,91.3,91.9,91.4,90.8,90.1,90.4,90.2,90,88.6,88.3,88.7,89.4,90.5,91.1,91.1,90.5,90.6,90.6,90.9,91.3,91.4,92.2,92.6,93.3,94.1,94.4,94.1,94,94.5,94.4,94.8,94.8,94.5,94.3,94.3,94.2,94.5,94.8,94.6,94.4,94.2,94.2,94.2,94,93.6,93.5,93.4,93.7,93.7,93.7,93.7,93.3,93.1,93.5,93.2,93.3,92.8,92.6,93.1,93.1,93.3,93.5,93.2,92.9,92.6,92.5,92.3,92.4,91.8]
,index: 1
},
{
name: 'Admitted (adjusted) RTT pathways',
visible: false,type: 'line',
data: [93.1,92.5,91.8,91.9,92,92.8,92.9,93.1,93.1,92.3,92.2,91.8,92,90.5,89.6,89.5,90.2,90.5,90,90.4,90.2,90.5,91,90.9,91.3,91.2,91.1,91,91.8,92.5,92,92.5,92.6,92.1,92.5,92.6,93,92.5,92.1,92,91.6,92,91.6,92,92.1,91.5,91.4,91,91.4,90.3,89.8,89.3,89.9,90.1,89.4,89.2,87.9,88.2,88.9,87.4,90.2,88.7,86.9,86.7,85.2,86.5,85.7,85.3,84.9,83.1,83,82.5,83.7]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
visible: false,type: 'line',
data: [97.8,97.7,97.7,97.8,97.9,98.1,98.1,98,98,97.8,97.6,97.5,97.5,97.2,97.1,97.2,97.4,97.6,97.5,97.3,97.2,97.2,97.1,97,97.1,97,97.1,97.4,97.6,97.8,97.7,97.6,97.6,97.3,97.4,97.4,97.6,97.4,97.4,97.5,97.1,97.4,97.3,97.1,97.1,96.7,96.6,96.5,96.7,96.3,96.2,96.2,96.3,96.4,96.2,95.8,95.4,95.1,95.1,94.7,95.4,94.9,94.6,95.1,95.1,95.5,95.1,94.7,94.5,93.7,93.4,93,93.2]
,index: 3
},
{
name: 'Admitted target',
visible: false,type: 'line',
data: [90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,null,null,null,null,null,null]
,index: 4
},
{
name: 'Non-admitted target',
visible: false,type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,null,null,null,null,null,null]
,index: 5
},
{
name: 'Incomplete target',
visible: false,type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92]
,index: 6
}
]
}
