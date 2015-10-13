/* Created by EFisher on 12/10/2015 14:31:44 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have the numbers of health visitors changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 09','Oct 09','Nov 09','Dec 09','Jan 10','Feb 10','Mar 10','Apr 10','May 10','Jun 10','Jul 10','Aug 10','Sep 10','Oct 10','Nov 10','Dec 10','Jan 11','Feb 11','Mar 11','Apr 11','May 11','Jun 11','Jul 11','Aug 11','Sep 11','Oct 11','Nov 11','Dec 11','Jan 12','Feb 12','Mar 12','Apr 12','May 12','Jun 12','Jul 12','Aug 12','Sep 12','Oct 12','Nov 12','Dec 12','Jan 13','Feb 13','Mar 13','Apr 13','May 13','Jun 13','Jul 13','Aug 13','Sep 13','Oct 13','Nov 13','Dec 13','Jan 14','Feb 14','Mar 14','Apr 14','May 14','Jun 14','Jul 14','Aug 14','Sep 14','Oct 14','Nov 14','Dec 14','Jan 15','Feb 15','Mar 15','Apr 15','May 15']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of Health Visitors (FTEs)'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Qualified Health Visitors',
type: 'line',
data: [8284.9,8262,8269.4,8240.3,8197.3,8186.1,8174.7,8106.9,8092.2,8026.8,7965.5,7906.5,8016.7,8098,8143.6,8125.2,8142.2,8113.7,8054.2,7886.3,7851.5,7803.1,7714.4,7677,7941.2,8004.4,8065.1,8065.1,8141.1,8207,8198.9,8208.2,8190,8100.9,8080.3,8067.1,8385.8,8643.7,8712.4,8741.1,8786,8812.5,8812.7,8801.7,8840.1,8817.4,8792.4,8739,9109.4,9341,9503.7,9543.6,9698.4,9837.9,9947.4,9973.9,9969.6,9930.1,9877.8,9816,10166.7,10552.1,10737.6,10783.2,11060.3,11279.5,11495.4,11382.6,11331.2]
,index: 1
},
{
name: 'May 2010 baseline',
type: 'column',
data: [null,null,null,null,null,null,null,null,8092,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]
,index: 1
},
{
name: 'March 2015 target',
type: 'column',
data: [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12292,null,null]
,index: 2
}
]
}
