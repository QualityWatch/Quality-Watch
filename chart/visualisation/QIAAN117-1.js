/* Created by NCODowd on 13/09/2016 11:07:22 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportions of patients are followed up within seven days of discharge?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Q1 2010/11','Q2 2010/11','Q3 2010/11','Q4 2010/11','Q1 2011/12','Q2 2011/12','Q3 2011/12','Q4 2011/12','Q1 2012/13','Q2 2012/13','Q3 2012/13','Q4 2012/13','Q1 2013/14','Q2 2013/14','Q3 2013/14','Q4 2013/14','Q1 2014/15','Q2 2014/15','Q3 2014/15','Q4 2014/15','Q1 2015/16','Q2 2015/16','Q3 2015/16','Q4 2015/16','Q1 2016/17']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of patients on CPA who <br> were followed up within 7 days after <br> discharge from psychiatric inpatient <br> care', offset: 111}
, max: 100
, min: 90
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'CPA Patients followed up',
type: 'line',
data: [97.17,97.26,97.39,97.09,96.74,97.25,97.45,97.63,97.49,97.51,97.6,97.33,97.44,97.48,96.71,97.41,96.99,97.28,97.34,97.21,97,96.8,96.91,97.23,96.2]
,index: 1
},
{
name: 'National threshold',
type: 'line',
data: [95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95]
,index: 2
}
]
}
