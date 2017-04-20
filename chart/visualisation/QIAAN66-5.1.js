/* Created by ianb on 24/04/2015 16:50:46 using v2.5 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Human Papilloma Virus (HPV) vaccination coverage in the UK, 2015/16'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['UK','England','Scotland','Wales','N.Ireland']
, labels: {rotation:-90
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
data: [90.6,90.2,93.3,90.4,92.4]
,index: 1
},
{
name: 'At least two doses',
type: 'column',
data: [85.3,85.1,86.5,83.1,90.7]
,index: 2
},
]
}
