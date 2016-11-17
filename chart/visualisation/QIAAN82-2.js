/* Created by NCODowd on 16/11/2016 17:22:30 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What proportion of calls are resolved without a person needing to go to hospital?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016']
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
data: [4.52,4.7,4.68,5.16,5.24,5.26,5.28,5.34,5.62,5.49,5.69,5.68,5.51,5.6,5.96,5.65,5.78,5.84,5.94,5.9,6.57,6.44,6.43,6.47,6.23,5.8,5.49,6.09,5.8,5.68,5.46,5.44,6.48,5.92,6.3,6.46,6.89,6.89,7.35,7.69,7.57,7.76,8.25,8.6,9.87,8.72,8.85,8.92,10.04,10.12,10.27,10.38,10.43,10.07,10.33,10.33,10.36,10.21,9.67,10.24,8.77,9.38,9.47,10.1,9.57,9.4]
,index: 1
},
{
name: 'Patients treated and discharged on scene',
type: 'line',
data: [33.01,32.91,33.91,33.95,33.92,33.4,33.48,34.08,34.79,33.98,34.42,34.84,33.92,34.71,34.75,35.22,35.35,35.02,34.55,34.7,35.99,35.14,35.26,35.89,35.45,35.47,36.07,36.86,36.58,35.89,35.62,35.81,36.72,35.74,35.97,36.09,36.19,36.65,37.17,37.52,37.3,37.01,36.94,36.76,37.82,37.18,36.56,36.27,36.99,37.36,37.67,38.13,38.22,37.41,37.39,37.43,38.34,38.54,38.69,38.65,37.96,37.97,38.32,38.63,38.72,38.3]
,index: 2
}
]
}
