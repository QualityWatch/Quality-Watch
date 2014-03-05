/* Created by ianb on 05/03/2014 16:07:54 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the numbers of health visitors changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['May 2010 baseline','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sept 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sept 2013','Oct 2013','Mar 2015 "target"']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of Health Visitors (FTE) in post'}
, labels: {
}},
series:[
{
name: 'May 2010 baseline',
type: 'column',
data: [8092.21,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'May 2015 target',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12292.21]
,index: 2
},
{
name: 'Health visitor numbers',
type: 'line',
data: [null,8396.02,8383.81,8303.07,8286.84,8283.67,8692.46,8931.53,9000.06,9024.86,9069.48,9112.81,9132.55,9075.92,9148.55,9123.83,9103.36,9066.25,9550.39,9770.32,null]
,index: 1
},
{
name: 'target trend',
type: 'line',
data: [null,9757.73,9830.14,9902.55,9974.97,10047.38,10119.8,10192.21,10264.62,10337.04,10409.45,10481.86,10554.28,10626.69,10699.11,10771.52,10843.93,10916.35,10988.76,11061.17,null]
,index: 2
}
]
}
