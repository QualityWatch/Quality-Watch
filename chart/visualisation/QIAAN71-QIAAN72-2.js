/* Created by NCODowd on 16/11/2016 17:22:21 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have rates of pressure ulcers in the community changed?'},
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
title: {text:'Proportion of patients in community <br> settings with an incidence of pressure <br> ulcer', offset: 99}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Pressure ulcer, community setting',
type: 'line',
data: [8.84,8.8,8.32,7.67,7.54,7.16,6.64,6.08,6.1,5.97,6.35,5.97,6.29,6.21,6.08,5.9,5.73,5.59,5.29,4.97,5.05,5.12,5.22,5.3,4.96,5.23,5.25,5.26,5.2,5.05,4.85,4.55,4.74,4.8,5.14,5.04,4.94,4.75,4.83,4.94,4.73,4.67,4.58,4.59,4.67,4.66,4.63,4.69,4.9,4.96,4.78,4.66]
,index: 1
}
]
}
