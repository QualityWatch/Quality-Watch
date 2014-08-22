/* Created by ianb on 22/08/2014 12:40:39 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of community VTE changed?'},
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
title: {text:'Proportion of patients in a community <br> setting with an incidence of Venous <br> Thromboembolism (VTE)', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'VTE, community setting',
type: 'line',
data: [0.38,0.41,0.44,0.34,0.37,0.47,0.33,0.39,0.34,0.4,0.32,0.29,0.33,0.33,0.3,0.31,0.28,0.23,0.26,0.22,0.28,0.25,0.3,0.31]
,index: 1
}
]
}
