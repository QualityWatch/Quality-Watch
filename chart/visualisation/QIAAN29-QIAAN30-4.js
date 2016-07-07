/* Created by NCODowd on 07/07/2016 12:47:52 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of carers finding it easy to access information by age changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['18-24','25-34','35-44','45-54','55-64','65-74','75-84',85]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of carers who found it <br> easy to find information and advice', offset: 87}
, labels: {
format: '{value:.0f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2009-10',
type: 'column',
data: [6450,6280,6520,6660,7410,7640,7950,7970]
,index: 1
},
{
name: '2012-13',
type: 'column',
data: [6670,5770,6180,6110,6860,7140,7410,7350]
,index: 2
},
{
name: '2014-15',
type: 'column',
data: [6130,5980,5760,5860,6370,6890,7030,7130]
,index: 3
}
]
}
