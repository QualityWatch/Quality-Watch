/* Created by ianb on 14/10/2013 11:43:02 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of inpatient pressure ulcers changed?'},
credits: {enabled: true, text: '&copy; Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of patients in an acute <br> setting with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incidence of pressure ulcers: acute setting',
type: 'line',
data: [5.6,5.5,5.6,5.1,5,4.6,4.5,4.7,4.6,5.1,5.1,4.9,5.1]
,index: 1
}
]
}
