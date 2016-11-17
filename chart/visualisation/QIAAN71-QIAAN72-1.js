/* Created by NCODowd on 16/11/2016 17:22:20 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of inpatient pressure ulcers changed?'},
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
title: {text:'Proportion of patients in an acute <br> setting with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Pressure ulcer, acute setting',
type: 'line',
data: [5.56,5.44,5.48,5.05,4.93,4.62,4.51,4.62,4.56,5.05,5.02,4.87,5.03,4.76,4.55,4.55,4.54,4.31,4.21,4.28,4.37,4.34,4.3,4.16,4.27,4.23,4.3,3.98,4.15,4.18,3.98,4.34,4.03,4.32,4.31,4.13,4.21,4.09,3.9,3.96,3.91,3.79,3.85,3.98,3.99,4.21,4.17,4.23,4.36,4.23,4.08,3.9]
,index: 1
}
]
}
