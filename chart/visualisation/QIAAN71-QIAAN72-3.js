/* Created by ianb on 22/08/2014 12:40:39 using v2.1 */{
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
title: {text:'Proportion of patients in an acute <br> setting with an incidence of Venous <br> Thromboembolism (VTE)', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'VTE, acute setting',
type: 'line',
data: [1.47,1.45,1.51,1.17,1.33,1.12,1.19,1.07,0.94,0.95,0.96,0.91,0.83,0.78,0.78,0.74,0.67,0.65,0.68,0.63,0.57,0.67,0.64,0.75]
,index: 1
}
]
}
