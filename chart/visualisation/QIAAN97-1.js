/* Created by rreed on 25/05/2017 13:34:13 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have NHS staff sickness absence rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Apr 2009','May 2009','Jun 2009','Jul 2009','Aug 2009','Sep 2009','Oct 2009','Nov 2009','Dec 2009','Jan 2010','Feb 2010','Mar 2010','Apr 2010','May 2010','Jun 2010','Jul 2010','Aug 2010','Sep 2010','Oct 2010','Nov 2010','Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014','May 2014','Jun 2014','Jul 2014','Aug 2014','Sep 2014','Oct 2014','Nov 2014','Dec 2014','Jan 2015','Feb 2015','Mar 2015','Apr 2015','May 2015','Jun 2015','Jul 2015','Aug 2015','Sep 2015','Oct 2015','Nov 2015','Dec 2015','Jan 2016','Feb 2016','Mar 2016','Apr 2016','May 2016','Jun 2016','Jul 2016','Aug 2016','Sep 2016','Oct 2016','Nov 2016','Dec 2016']
, labels: {
 rotation: -90
, step: 3
}
},
yAxis: {
title: {text:'Sickness absence rate '}
, min: 3
, labels: {
format: '{value:.2f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: 'England',
type: 'line',
data: [3.95,4.02,4.12,4.66,4.26,4.2,4.71,4.76,4.65,4.81,4.45,4.22,3.91,3.91,3.92,3.98,3.82,4.09,4.31,4.35,4.96,4.66,4.08,3.93,3.73,3.69,3.9,3.97,3.92,4.03,4.25,4.42,4.39,4.46,4.48,4.18,4,4.12,3.93,4.15,4,4.03,4.4,4.49,4.61,4.72,4.33,4.08,3.98,3.79,3.8,3.88,3.81,3.94,4.18,4.24,4.35,4.44,4.31,4.04,3.95,3.85,3.95,4.08,3.99,4.16,4.42,4.48,4.79,4.72,4.42,4.18,3.99,3.9,3.94,3.98,3.92,4,4.24,4.3,4.39,4.49,4.42,4.21,4.01,3.84,3.94,4.04,3.92,3.99,4.3,4.46,4.55]
,index: 1
},
{
type: 'line',
marker: {fillColor: 'none', lineColor: null },
name: 'England trendline',
data: [[0, 4.23],[92, 4.15]]
}
]
}
