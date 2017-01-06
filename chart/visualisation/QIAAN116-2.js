/* Created by rreed on 05/01/2017 15:02:24 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How involved do people feel in discussions about how their care is working? '},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Yes, definitely','Yes, to some extent','No']
, labels: {
}
},
yAxis: {
title: {text:'Proportion who felt care decisions <br> were made together  with  their <br> service workers', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2014',
type: 'column',
data: [62,30,8]
,index: 1
},
{
name: '2015',
type: 'column',
data: [59,32,8]
,index: 2
},
{
name: '2016',
type: 'column',
data: [60,31,9]
,index: 3
}
]
}
