/* Created by JMorris on 15/02/2018 14:46:02 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of admissions to psychiatric wards are gate kept by CRHT teams?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Q1 2010/11','Q2 2010/11','Q3 2010/11','Q4 2010/11','Q1 2011/12','Q2 2011/12','Q3 2011/12','Q4 2011/12','Q1 2012/13','Q2 2012/13','Q3 2012/13','Q4 2012/13','Q1 2013/14','Q2 2013/14','Q3 2013/14','Q4 2013/14','Q1 2014/15','Q2 2014/15','Q3 2014/15','Q4 2014/15','Q1 2015/16','Q2 2015/16','Q3 2015/16','Q4 2015/16','Q1 2016/17','Q2 2016/17','Q3 2016/17','Q4 2016/17','Q1 2017/18','Q2 2017/18']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of admissions to psychiatric <br> inpatient wards that were gate kept <br> by CRHT teams', offset: 99}
, max: 100
, min: 80
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Gate kept by CRHT teams',
type: 'line',
data: [97,97.4,97.6,97.6,97,97.3,97.7,97.7,98,98.1,98.4,98.7,97.7,98.7,98.6,98.2,98,98.5,97.9,98.1,96.3,97,97.5,98.2,98.1,98.4,98.7,98.8,98.7,98.6]
,index: 1
},
{
name: 'National threshold',
type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 2
}
]
}
