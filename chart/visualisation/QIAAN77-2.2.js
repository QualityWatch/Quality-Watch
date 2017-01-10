/* Created by rreed on 20/12/2016 11:34:27 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does this vary by age and sex?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2011/12','2012/13','2013/14','2014/15','2015/16']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of females still living at <br> home 91 days after discharge', offset: 87}
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
data: [84,82.6,84.3,83.3,84.2]
,index: 1
},
{
name: 'Aged 65 to 74',
type: 'line',
data: [88,86.6,87.3,87.7,87.5]
,index: 2
},
{
name: 'Aged 75 to 84',
type: 'line',
data: [86,85,85.9,85.4,85.8]
,index: 3
},
{
name: 'Aged 85 and over',
type: 'line',
data: [81.2,79.4,82.1,80.2,82.0]
,index: 4
}
]
}
