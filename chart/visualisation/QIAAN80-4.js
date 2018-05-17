/* Created by JMorris on 09/05/2018 14:37:49 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the median treatment waiting time changed in the last five years?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016','Jan 2017','Feb 2017','Mar 2017','Apr 2017','May 2017','Jun 2017','Jul 2017','Aug 2017','Sep 2017','Oct 2017','Nov 2017','Dec 2017','Jan 2018','Feb 2018']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Median wait (weeks)'}
, max: 12
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Incomplete RTT pathways',
type: 'line',
data: [5.1,5.5,5.6,5.6,5.7,5.6,6.2,6,5.6,5.7,6.3,6.2,5.4,5.5,5.9,6.2,5.8,5.9,6.4,6.2,5.8,5.8,6.5,6.7,5.6,5.6,5.9,6,6,6,6.5,6.5,6.2,6.1,6.7,6.8,5.9,6.4,6.6,6.4,6.5,6.6,7,6.9,6.5,6.5,7.2,7.2,6.2,6.2,6.8,7.1,6.6,6.6,7.1,7.2,6.7,6.6,7.4,7.6,6.6]
,index: 1
},
{
name: 'Admitted (unadjusted) RTT pathways',
type: 'line',
data: [9.4,8.4,8.6,8.8,8.8,8.8,8.8,9.4,9.2,8.9,8.4,9.6,9.7,8.8,8.7,9.3,9.5,9,9.1,9.7,9.5,9.3,8.5,9.9,10.2,9.2,9.1,9.4,9.5,9.2,9.2,9.8,9.7,9.4,8.8,10.2,10.2,9.3,9.6,10,9.8,9.7,9.7,10.5,10.3,10.1,9.3,10.6,10.9,10.1,9.7,10.1,10.3,9.8,9.7,10.4,10.4,10,9.2,10.2,10.6]
,index: 2
},
{
name: 'Non-Admitted RTT pathways',
type: 'line',
data: [3.8,3.9,5.1,4.8,5.2,5,5.2,5.7,5.1,5.1,4.9,5.8,4.7,4.8,5,5.5,5.4,5.2,5.5,6,5.4,5.4,5.1,6.1,5.2,5,5.5,5.5,5.6,5.4,5.6,6.1,5.7,5.7,5.3,6.3,5.4,5.3,5.9,5.8,5.9,5.9,5.9,6.5,6.2,6,5.6,6.7,5.8,5.6,5.6,6.1,5.9,5.8,5.8,6.4,6,5.9,5.6,6.6,5.6]
,index: 3
}
]
}
