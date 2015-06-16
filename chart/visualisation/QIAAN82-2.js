/* Created by ianb on 20/03/2015 10:34:29 using v2.5 */
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of calls are resolved without a person needing to go to hospital?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Calls resolved without taking someone <br> to hospital', offset: 87}
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'Calls resolved by telephone advice',
type: 'line',
data: [4.52,4.7,4.68,5.16,5.24,5.26,5.28,5.34,5.62,5.49,5.69,5.68,5.51,5.6,5.96,5.65,5.78,5.84,5.94,5.9,6.57,6.44,6.43,6.47,6.23,5.8,5.49,6.09,5.8,5.68,5.46,5.44,6.48,5.92,6.3,6.46,6.86,6.87,7.32,7.67,7.54,7.72,8.21,8.58,9.86]
,index: 1
},
{
name: 'Patients treated and discharged on scene',
type: 'line',
data: [33.01,32.91,33.91,33.95,33.92,33.4,33.48,34.08,34.79,33.98,34.42,34.84,33.92,34.71,34.75,35.22,35.35,35.02,34.55,34.7,35.99,35.14,35.26,35.89,35.45,35.47,36.07,36.86,36.58,35.89,35.62,35.81,36.72,35.74,35.97,36.09,36.2,36.69,37.16,37.59,37.34,37.06,36.98,36.8,37.86]
,index: 2
}
]
}