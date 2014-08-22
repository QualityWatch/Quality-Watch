/* Created by ianb on 22/08/2014 12:40:38 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of pressure ulcers in the community changed?'},
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
title: {text:'Proportion of patients in community <br> settings with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Pressure ulcer, community setting',
type: 'line',
data: [8.84,8.8,8.32,7.67,7.54,7.16,6.64,6.08,6.1,5.97,6.35,5.97,6.29,6.21,6.08,5.9,5.73,5.59,5.29,4.97,5.05,5.12,5.2,5.29]
,index: 1
}
]
}
