/* Created by EFisher on 25/02/2014 18:06:20 using v2.0 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How did NHS staff sickness rates vary by trust type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 013 ']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'NHS staff sickness absence rate'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'line',
data: [4.8,4.4,4.2,3.9,3.9,3.9,4,3.8,4.1,4.3,4.4,5,4.7,4.1,3.9,3.7,3.7,3.9,4,3.9,4,4.2,4.4,4.4,4.5,4.5,4.2,4,4.1,3.9,4.1,4,4,4.4,4.5,4.6,4.7,4.3,4.1,4,3.8,3.8,3.9,3.8,3.9]
,index: 1
},
{
name: 'Acute',
type: 'line',
data: [4.6,4.2,4,3.7,3.7,3.7,3.7,3.6,3.8,4,4.1,4.7,4.4,3.8,3.7,3.5,3.5,3.7,3.7,3.7,3.8,4,4.2,4.1,4.2,4.3,4,3.8,3.9,3.7,3.9,3.8,3.8,4.2,4.2,4.3,4.5,4.1,3.9,3.8,3.6,3.6,3.7,3.6,3.7]
,index: 2
},
{
name: 'Ambulance',
type: 'line',
data: [6.3,6,5.8,5.6,5.4,5.3,5.4,5.4,5.4,5.4,5.7,6.9,6.7,5.5,5.3,5.4,5.2,5.3,5.5,5.7,5.6,5.9,6.1,6.4,6.2,6.1,5.7,5.5,5.7,5.6,5.8,5.8,5.8,5.8,6.2,7.1,6.9,6.3,6,5.9,5.7,5.6,5.5,5.6,5.4]
,index: 3
},
{
name: 'Community Provider Trust',
type: 'line',
data: [4.3,4,3.9,3.8,4.2,4.2,4.4,4,4.5,4.9,4.9,5.4,5.1,4.4,4.5,4.1,4.2,4.5,4.4,4.1,4.3,4.6,4.8,4.8,4.9,4.9,4.7,4.4,4.5,4.2,4.5,4.3,4.3,4.9,5,5.1,5.2,4.8,4.5,4.4,4.2,4.3,4.3,4.2,4.3]
,index: 4
},
{
name: 'Mental Health and Learning Disability',
type: 'line',
data: [5.7,5.2,4.9,4.6,4.7,4.7,4.8,4.7,5,5.2,5.2,5.7,5.4,4.8,4.6,4.4,4.4,4.6,4.7,4.7,4.9,5.1,5.3,5.2,5.2,5.2,4.8,4.6,4.8,4.6,4.8,4.7,4.8,5.1,5.3,5.4,5.5,5,4.7,4.7,4.5,4.4,4.5,4.4,4.6]
,index: 5
}
]
}
