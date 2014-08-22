/* Created by ianb on 22/08/2014 12:40:38 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of inpatient pressure ulcers changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr12','May12','Jun12','Jul12','Aug12','Sep12','Oct12','Nov12','Dec12','Jan13','Feb13','Mar13','Apr13','May13','Jun13','Jul13','Aug13','Sep13','Oct13','Nov13','Dec13','Jan14','Feb14','Mar14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Proportion of patients in an acute <br> setting with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Pressure ulcer, acute setting',
type: 'line',
data: [5.56,5.44,5.48,5.05,4.93,4.62,4.51,4.62,4.56,5.05,5.02,4.87,5.03,4.76,4.55,4.55,4.54,4.31,4.21,4.28,4.38,4.32,4.27,4.14]
,index: 1
}
]
}
