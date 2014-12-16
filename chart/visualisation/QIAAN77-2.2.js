{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does this vary by age and sex?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14']
, labels: {
}
},
yAxis: {
title: {text:'Percentage of wmoen still living <br> at home 91 days after discharge', offset: 87}
, max: 90
, min: 70
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Total Aged 65 and over',
type: 'line',
data: [84,82.6,84.3]
,index: 1
},
{
name: 'Aged 65 to 74',
type: 'line',
data: [88,86.6,87.3]
,index: 2
},
{
name: 'Aged 75 to 84',
type: 'line',
data: [86,85,85.9]
,index: 3
},
{
name: 'Aged 85 and over',
type: 'line',
data: [81.2,79.4,82.1]
,index: 4
}
]
}