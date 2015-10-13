/* Created by EFisher on 12/10/2015 14:31:42 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of nurses, midwives, and health visitors changed?'},
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
title: {text:'Number of nurses (FTE)'}
, max: 320000
, min: 300000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Qualified nursing, midwifery & health visiting staff',
type: 'line',
data: [307748.8,309930.2,311302.5,310501.1,310990.8,311409.4,311787.4,310805.4,310793.4,310646.9,309835.9,308729.1,309138.9,310646.8,311493.2,310612.3,310989.3,310782.6,310519.4,308789.4,308684.8,308138.2,307242.7,306030.8,306345.8,307825,308599.9,307829.4,308199.1,308100,307947.1,307245.2,306999.1,306278,305577.7,304565.7,305059.7,307544.8,308821.5,307982,308482.9,308802.1,308895,307753.8,307634,307492.4,306934.7,306024.7,307692,310924,312900,312408.9,313302.3,314173.1,314801.6,314142.4,314082.4,313752.5,312872.9,311670,313514.4,316560.8,317842.3,317227,317985.1,318489.7,319013.2,318034.7,317415.1]
,index: 1
}
]
}
