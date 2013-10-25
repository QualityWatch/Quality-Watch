/* Created by ianb on 14/10/2013 11:43:22 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of community VTE changed?'},
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
title: {text:'Proportion of patients in a community <br> setting with an incidence of Venous <br> Thromboembolism (VTE)', offset: 99}
, labels: {
format: '{value:.3f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incidence of healthcare-related VTE: community setting',
type: 'line',
data: [0.378,0.402,0.43,0.356,0.372,0.437,0.338,0.389,0.34,0.408,0.341,0.298,0.346]
,index: 1
}
]
}
