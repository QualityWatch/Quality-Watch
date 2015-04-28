/* Created by ianb on 24/04/2015 16:50:46 using v2.5 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Human Papilloma Virus (HPV) vaccination coverage'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['UK','England','Scotland','Wales','N.Ireland']
, labels: {
}
},
yAxis: {
title: {text:'HPV immunisation uptake in 12-13 <br> year old females', offset: 87}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'At least one dose',
type: 'column',
data: [91.3,91.1,93.6,89.6,91.5]
,index: 1
},
{
name: 'At least two doses',
type: 'column',
data: [89.9,89.8,91.7,87.6,90.8]
,index: 2
},
{
name: 'Three doses',
type: 'column',
data: [85.9,86.7,81.4,77.2,87.2]
,index: 3
}
]
}
