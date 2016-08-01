/* Created by NCODowd on 27/07/2016 12:16:50 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Overall, how do patients rate the care they receive (from 2012)? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:'Patient experience: 0 (I had a very poor experience) to 10 (I <br> had a very good experience)', offset: 27}
, categories: [0,1,2,3,4,5,6,7,8,9,10]
, labels: {
}
},
yAxis: {
title: {text:'How do you rate the care you received?(% <br> of inpatients)', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2012',
type: 'column',
data: [1,1,1,2,2,5,6,12,24,20,25]
,index: 1
},
{
name: '2013',
type: 'column',
data: [1,1,1,2,2,5,5,11,23,21,27]
,index: 2
},
{
name: '2014',
type: 'column',
data: [1,1,1,2,2,5,5,11,24,22,27]
,index: 3
},
{
name: '2015',
type: 'column',
data: [1,1,1,2,2,4,5,11,24,22,27]
,index: 4
}
]
}
