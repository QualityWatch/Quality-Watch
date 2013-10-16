/* Created by ianb on 14/10/2013 11:43:15 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of inpatient VTE changed?'},
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
title: {text:'Proportion of patients in an acute <br> setting with an incidence of Venous <br> Thromboembolism (VTE)', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Incidence of healthcare-related VTE: acute setting',
type: 'line',
data: [1.47,1.46,1.52,1.17,1.37,1.11,1.13,1.03,0.96,0.93,0.92,0.94,0.87]
,index: 1
}
]
}
