/* Created by rreed on 4/19/2017 4:41:55 PM using v2.7 */
{
title: {text:''},
credits: {enabled: false},
legend: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Pertussis vaccine coverage for pregnant women'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Pertussis vaccine coverage for pregnant <br> women in England', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series1',
type: 'line',
data: [43.7,52,54.5,59.4,59.6,57.2,52.6,50,49.8,55.7,56.4,56.4,58.1,61.5,60.8,60.7,59.7,58.9,52.7,53.6,53.7,53.5,55.6,55.6,58,60.6,62.3,59.2,58.7,56.3,55.6,55.2,55.1,55.6,56.6,57.7,59.3,61.6,61.4,59.7,59.4,60.7,64.6,69.6,69,70,70.1,71.4,73.8,null,76.2]
,index: 1
}
]
}
