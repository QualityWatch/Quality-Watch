{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How long do patients have to wait to see someone at the GP surgery?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2009/10','2010/11','2011/12','2012/13','Jan - Sept 2013', 'Jul 2013 - Mar 2014']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients who waited <br> more than a certain amount of time <br> after their appointment time ', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: '16 to 30 minutes',
type: 'column',
data: [18.5,18.8,null,null,null]
,index: 2
},
{
name: 'More than 30 minutes',
type: 'column',
data: [5.6,5.5,null,null,null]
,index: 1
},
{
name: 'More than 15 minutes',
type: 'column',
data: [null,null,24.3,25.9,26.3,26.7]
,index: 0
}
]
}