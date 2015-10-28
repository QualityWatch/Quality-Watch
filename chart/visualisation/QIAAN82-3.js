/* Created by EFisher on 26/10/2015 10:06:38 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of ambulance calls re-contact 999 within 24 hours?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Proportion of calls with re-contact <br> via 999 within 24 hours', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Calls with telephone advice',
type: 'line',
data: [15.05,13.86,14.61,12.63,12.2,12.69,11.91,11.28,12.93,14.04,15.14,12.81,13.56,13.94,13.86,13.57,12.86,12.82,12.87,12.07,12.8,13.29,12.09,12.8,11.7,10.91,9.59,9.24,9.48,9.95,10.04,9.91,8.61,9.03,8.85,8.59,8.61,7.97,8.03,8.51,7.44,7.01,6.83,8.06,8.29,7.54,7.65,7.92,6.9,7.05,7.37,7.01]
,index: 1
},
{
name: 'Patients treated and discharged on scene',
type: 'line',
data: [4.89,4.68,5.01,4.83,5.68,5.5,5.42,5.35,5.79,5.78,5.96,5.67,6.03,6.06,6.17,5.81,6.13,6.21,6.12,6.05,6.46,6.4,6.29,6.44,6.26,5.77,5.5,5.41,5.5,5.47,5.33,5.55,5.46,5.68,5.65,5.45,5.15,5.2,5.21,5.34,5.4,5.41,5.43,5.51,5.85,5.84,5.75,5.58,5.26,5.11,5.48,5.24]
,index: 2
}
]
}
