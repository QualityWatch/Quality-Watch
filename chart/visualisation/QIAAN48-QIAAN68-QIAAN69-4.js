/* Created by ianb on 01/08/2014 12:33:45 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of outpatient toilets cleanliness changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Very clean ','Fairly clean','Not very clean','Not at all clean']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'How clean did outpatients find their <br> toilets and bathrooms? (Percentage <br> of outpatients)', offset: 99}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2003',
type: 'column',
data: [55,38,5,1]
,index: 1
},
{
name: '2004',
type: 'column',
data: [50,41,7,2]
,index: 2
},
{
name: '2009',
type: 'column',
data: [57,37,5,1]
,index: 3
},
{
name: '2011',
type: 'column',
data: [60,35,4,1]
,index: 4
}
]
}
