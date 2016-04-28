/* Created by NCODowd on 27/04/2016 10:33:27 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Rotavirus vaccination coverage in babies'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of babies immunised by <br> 25 weeks of age', offset: 87}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'One dose',
type: 'line',
data: [3490,6400,6590,6680,9149,9157,9239,9304,9294,9317,9326,9332,9329,9316,9349,9325,9350,9307,9308,9368,9343,9362,9380,9390,9390,9360,9380,9380]
,index: 1
},
{
name: 'Two doses',
type: 'line',
data: [2960,5640,5880,5970,8599,8650,8751,8793,8774,8829,8836,8816,8827,8837,8835,8792,8838,8815,8841,8887,8879,8901,8940,8900,8900,8870,8880,8860]
,index: 2
}
]
}
