/* Created by ianb on 07/10/2013 13:28:08 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have perceptions of outpatient department cleanliness changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
title: {text:'How clean did outpatients find the <br> outpatient department? (Percentage <br> of outpatients)', offset: 99}
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
data: [60,38,2,0]
,index: 1
},
{
name: '2004',
type: 'column',
data: [53,43,3,0]
,index: 2
},
{
name: '2009',
type: 'column',
data: [61,37,2,0]
,index: 3
},
{
name: '2011',
type: 'column',
data: [65,33,1,0]
,index: 4
}
]
}

