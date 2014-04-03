/* Created by EFisher on 26/03/2014 16:38:46 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have breaches of the four hour target changed each quarter?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004/05 Q1','2004/05 Q2','2004/05 Q3','2004/05 Q4','2005/06 Q1','2005/06 Q2','2005/06 Q3','2005/06 Q4','2006/07 Q1','2006/07 Q2','2006/07 Q3','2006/07 Q4','2007/08 Q1','2007/08 Q2','2007/08 Q3','2007/08 Q4','2008/09 Q1','2008/09 Q2','2008/09 Q3','2008/09 Q4','2009/10 Q1','2009/10 Q2','2009/10 Q3','2009/10 Q4','2010/11 Q1','2010/11 Q2','2010/11 Q3','2010/11 Q4','2011/12 Q1','2011/12 Q2','2011/12 Q3','2011/12 Q4','2012/13 Q1','2012/13 Q2','2012/13 Q3','2012/13 Q4','2013/14 Q1','2013/14 Q2','2013/14 Q3']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Percentage of patients waiting more <br> than four hours in major A&E', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Percentage exceeding 4 hours',
type: 'line',
data: [6.87,5.4,4.2,3.57,2.38,1.68,2.44,3.43,2.27,2.1,2.41,3.22,2.4,2.3,3.66,3.54,2.37,1.9,3.57,3.24,2.03,1.87,3.18,3.1,2.35,2.98,5.28,5.17,4.44,4.1,5.51,6.32,5.09,4.61,6.46,8.86,6.56,5.65,6.55]
,index: 1
},
{
name: 'Old target (2%)',
type: 'line',
data: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 2
},
{
name: 'New target (5%)',
type: 'line',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
,index: 3
}
]
}
