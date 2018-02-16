/* Created by JMorris on 15/02/2018 14:44:38 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the rate of venous thromboembolism (VTE) risk assessment changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3','2013/14 Q4','2014/15 Q1','2014/15 Q2','2014/15 Q3','2014/15 Q4','2015/16 Q1','2015/16 Q2','2015/16 Q3','2015/16 Q4','2016/17 Q1','2016/17 Q2','2016/17 Q3','2016/17 Q4']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of adult inpatients who <br> were risk assessed for VTE on admission <br> to hospital', offset: 99}
, max: 100
, min: 30
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Acute providers',
type: 'line',
data: [52.5,68.4,80.8,84.1,88.2,90.7,92.5,93.4,93.8,94.1,94.2,95.4,95.8,95.7,95.9,96.1,96.2,95.9,95.9,96,95.8,95.5,95.5,95.7,95.5,95.6,95.5]
,index: 1
},
{
name: 'Independent sector providers',
type: 'line',
data: [80.2,73.8,80.8,80.2,95.2,94.4,95.1,95.9,97.8,98.1,98.5,98.1,97.9,98.4,98.5,98.5,98.8,98.7,99.1,98.9,99,99,98.1,98.5,97.7,98.2,97.8]
,index: 2
},
{
name: 'PCT providers',
type: 'line',
data: [38.9,50,61.4,90.9,91.1,95.6,94.5,92.7,92.7,93.9,94.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 3
},
{
name: 'All providers of NHS-funded acute care',
type: 'line',
data: [53,68.4,80.8,84.1,88.3,90.8,92.5,93.4,93.9,94.2,94.3,95.5,95.8,95.7,96,96.1,96.2,96,96,96,95.9,95.6,95.5,95.7,95.5,95.6,95.5]
,index: 4
},
{
name: 'Threshold',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 5
}
]
}
