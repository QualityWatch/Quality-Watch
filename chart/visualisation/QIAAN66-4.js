/* Created by ianb on 27/04/2015 18:07:21 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Rotavirus vaccination coverage in babies'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of babies immunised by <br> 25 weeks of age', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'One dose',
type: 'line',
data: [34.9,64,65.9,66.8,91.5,91.6,92.4,93,92.9,93.2,93.3,93.3]
,index: 1
},
{
name: 'Two doses',
type: 'line',
data: [29.6,56.4,58.8,59.7,86,86.5,87.5,87.9,87.7,88.3,88.4,88.1]
,index: 2
}
]
}
