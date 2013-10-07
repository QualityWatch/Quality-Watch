/* Created by ianb on 07/10/2013 13:30:13 using v0.9 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the perceptions of people feeling involved in their inpatient care changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2005','2006','2007','2008','2009','2010','2011','2012']
, labels: {
}
},
yAxis: {
title: {text:'Were you involved as much as you <br> liked to be in decisions about your <br> care and treatment? (Percentage <br> of inpatients)', offset: 111}
, max: 100
, min: 0
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
plotOptions: {column: {stacking: 'normal',}},
series:[
{
name: 'Yes, definitely',
type: 'column',
data: [53,52,51,52,52,52,52,55]
,index: 2
},
{
name: 'Yes, to some extent',
type: 'column',
data: [37,37,38,37,37,37,37,35]
,index: 1
},
{
name: 'No',
type: 'column',
data: [10,11,11,10,11,11,11,10]
,index: 0
}
]
}

