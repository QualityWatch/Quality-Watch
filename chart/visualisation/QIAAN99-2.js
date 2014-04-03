/* Created by EFisher on 26/03/2014 17:03:16 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of nurses changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 09','Oct 09','Nov 09','Dec 09','Jan 10','Feb 10','Mar 10','Apr 10','May 10','Jun 10','Jul 10','Aug 10','Sep 10','Oct 10','Nov 10','Dec 10','Jan 11','Feb 11','Mar 11','Apr 11','May 11','Jun 11','Jul 11','Aug 11','Sep 11','Oct 11','Nov 11','Dec 11','Jan 12','Feb 12','Mar 12','Apr 12','May 12','Jun 12','Jul 12','Aug 12','Sep 12','Oct 12','Nov 12','Dec 12','Jan 13','Feb 13','Mar 13','Apr 13','May 13','Jun 13','Jul 13','Aug 13','Sep 13','Oct 13']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of qualified nursing full <br> time equivalents (FTEs)', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Qualified nursing staff ',
type: 'line',
data: [307748.8,309930.2,311302.5,310501.1,310990.8,311409.4,311787.4,310805.4,310793.4,310646.9,309835.9,308729.1,309138.9,310646.8,311493.2,310612.3,310989.3,310782.6,310519.4,308789.4,308684.8,308138.2,307242.7,306030.8,306345.8,307825,308599.9,307829.4,308199.1,308100,307947.1,307245.2,306999.1,306278,305577.7,304565.7,305059.7,307544.8,308821.5,307982,308482.9,308802.1,308895,307753.8,307634,307492.4,306934.7,306024.7,307692,310924]
,index: 1
}
]
}
