/* Created by NCODowd on 16/11/2016 17:22:21 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of inpatient VTE changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016']
, labels: {
 rotation: -90
, step: 2
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
data: [1.47,1.45,1.51,1.17,1.33,1.12,1.19,1.07,0.94,0.95,0.96,0.91,0.83,0.78,0.78,0.74,0.67,0.65,0.68,0.63,0.57,0.67,0.65,0.75,0.67,0.6,0.64,0.6,0.64,0.58,0.6,0.62,0.45,0.56,0.56,0.72,0.61,0.6,0.54,0.56,0.59,0.53,0.54,0.53,0.55,0.54,0.53,0.55,0.58,0.53,0.58,0.58]
,index: 1
}
]
}
