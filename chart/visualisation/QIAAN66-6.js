/* Created by ianb on 27/04/2015 18:07:30 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Pertussis vaccine coverage for pregnant women'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014']
, labels: {
 rotation: -90
, step: 1
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
data: [43.7,52,54.5,59.4,59.6,57.2,52.6,50,49.8,55.7,56.4,56.4,58.1,61.5,60.8,60.7,59.7,58.9,52.7,53.6,53.7,53.5,55.6,55.6,58,60.6,62.3]
,index: 1
}
]
}
