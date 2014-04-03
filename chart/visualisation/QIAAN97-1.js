/* Created by EFisher on 26/03/2014 17:01:29 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have NHS staff sickness rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'NHS National Staff Absence Rate'}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'sickness absence rate',
type: 'line',
data: [4,4,4.1,4.7,4.3,4.2,4.7,4.8,4.6,4.8,4.4,4.2,3.9,3.9,3.9,4,3.8,4.1,4.3,4.4,5,4.7,4.1,3.9,3.7,3.7,3.9,4,3.9,4,4.2,4.4,4.4,4.5,4.5,4.2,4,4.1,3.9,4.1,4,4,4.4,4.5,4.6,4.7,4.3,4.1,4,3.8,3.8,3.9,3.8,3.9]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'sickness absence rate trendline',
data: [[0, 4.3],[53, 4.1]]
}
]
}
