/* Created by ianb on 27/06/2014 16:14:50 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waits to be admitted from A&E changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Nov 2010','Nov 2010','Nov 2010','Nov 2010','Dec 2010','Dec 2010','Dec 2010','Dec 2010','Jan 2011','Jan 2011','Jan 2011','Jan 2011','Jan 2011','Feb 2011','Feb 2011','Feb 2011','Feb 2011','Mar 2011','Mar 2011','Mar 2011','Mar 2011','Apr 2011','Apr 2011','Apr 2011','Apr 2011','May 2011','May 2011','May 2011','May 2011','May 2011','Jun 2011','Jun 2011','Jun 2011','Jun 2011','Jul 2011','Jul 2011','Jul 2011','Jul 2011','Jul 2011','Aug 2011','Aug 2011','Aug 2011','Aug 2011','Sep 2011','Sep 2011','Sep 2011','Sep 2011','Oct 2011','Oct 2011','Oct 2011','Oct 2011','Oct 2011','Nov 2011','Nov 2011','Nov 2011','Nov 2011','Dec 2011','Dec 2011','Dec 2011','Dec 2011','Jan 2012','Jan 2012','Jan 2012','Jan 2012','Jan 2012','Feb 2012','Feb 2012','Feb 2012','Feb 2012','Mar 2012','Mar 2012','Mar 2012','Mar 2012','Apr 2012','Apr 2012','Apr 2012','Apr 2012','Apr 2012','May 2012','May 2012','May 2012','May 2012','Jun 2012','Jun 2012','Jun 2012','Jun 2012','Jul 2012','Jul 2012','Jul 2012','Jul 2012','Jul 2012','Aug 2012','Aug 2012','Aug 2012','Aug 2012','Sep 2012','Sep 2012','Sep 2012','Sep 2012','Sep 2012','Oct 2012','Oct 2012','Oct 2012','Oct 2012','Nov 2012','Nov 2012','Nov 2012','Nov 2012','Dec 2012','Dec 2012','Dec 2012','Dec 2012','Dec 2012','Jan 2013','Jan 2013','Jan 2013','Jan 2013','Feb 2013','Feb 2013','Feb 2013','Feb 2013','Mar 2013','Mar 2013','Mar 2013','Mar 2013','Mar 2013','Apr 2013','Apr 2013','Apr 2013','Apr 2013','May 2013','May 2013','May 2013','May 2013','Jun 2013','Jun 2013','Jun 2013','Jun 2013','Jun 2013','Jul 2013','Jul 2013','Jul 2013','Jul 2013','Aug 2013','Aug 2013','Aug 2013','Aug 2013','Sep 2013','Sep 2013','Sep 2013','Sep 2013','Sep 2013','Oct 2013','Oct 2013','Oct 2013','Oct 2013','Nov 2013','Nov 2013','Nov 2013','Nov 2013','Dec 2013','Dec 2013','Dec 2013','Dec 2013','Dec 2013','Jan 2014','Jan 2014','Jan 2014','Jan 2014','Feb 2014','Feb 2014','Feb 2014','Feb 2014','Mar 2014','Mar 2014','Mar 2014','Mar 2014','Mar 2014','Apr 2014','Apr 2014','Apr 2014','Jan 2014','May 2014','May 2014']
, labels: {
 rotation: -90
, step: 6
}
},
yAxis: {
title: {text:'Proportion of patients not placed <br> in a bed in a ward within four hours <br> of a decision to admit ', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '% patients waiting >4 hours following DTA',
type: 'line',
data: [1.8,1.6,1.4,1.7,2.2,3.3,3.3,2.4,4.1,5.1,3,1.8,1.7,1.9,2.3,2.2,1.5,1.6,1.9,2,2,2.2,2.2,1.7,1.6,1.4,2,1.6,1.5,1.7,1.8,1.8,1.8,1.6,1.6,1.6,1.2,1,1.3,1.5,1.1,1,1,1.6,2,1.8,1.6,2.1,2.3,2.2,1.7,2.1,2.7,1.9,1.7,2.1,2.2,2.8,3.1,2,2.1,4.4,3.2,2.8,2.9,2.6,3.6,4.4,4,3.5,2.4,1.8,2.1,1.9,1.9,3.2,2.5,2.1,1.7,2,2,2.2,1.7,1.9,2.1,2,1.9,1.8,1.5,1.5,1.6,1.5,1.7,1.9,1.7,1.6,1.8,2.2,2,2.7,2.7,2.5,2.6,2.2,2.2,2.8,2.7,2.6,2.9,3.7,4.1,3.8,2.9,5.8,4.7,3.2,4.3,4.8,4.3,4.5,4.5,5.8,6.1,5.8,5.4,4,6.8,7.1,5.4,3.5,2.1,2.3,2.3,2.2,2.1,2.1,2,2.4,1.4,1.7,2,2,2.6,2.3,2.3,2.2,2.5,2.9,3.1,2.3,3.5,3.6,3.4,3,3.2,3.3,2.1,2.5,2.5,3.1,2.9,3.5,3.7,3.3,2.1,5,5.1,3.9,3.1,4.1,3.8,5.1,5.2,3.8,4.5,3.9,2.6,3,2.9,4.5,3.3,2.2,3.5,3.8]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: '% patients waiting >4 hours following DTA trendline',
data: [[0, 1.7],[183, 3.7]]
}
]
}
