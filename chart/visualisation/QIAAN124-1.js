/* Created by EFisher on 26/03/2014 17:23:36 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of adults with learning disabilities live at home?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010-11','2011-12','2012-13']
, labels: {
}
},
yAxis: {
title: {text:'Proportion of adults with learning <br> disabilities who live in their own <br> home or with their family', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Series4',
type: 'column',
data: [59,null,null]
,index: 1
},
{
name: 'Series5',
type: 'column',
data: [null,70,73.5]
,index: 2
}
]
}
