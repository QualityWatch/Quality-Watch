/* Created by ianb on 14/10/2013 11:43:09 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of community pressure ulcers changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
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
title: {text:'Proportion of patients in community <br> settings with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incidence of pressure ulcers: community setting',
type: 'line',
data: [8.8,8.8,8.3,7.5,7.3,6.9,6.5,6,6,6,6.3,5.9,6.3]
,index: 1
}
]
}
