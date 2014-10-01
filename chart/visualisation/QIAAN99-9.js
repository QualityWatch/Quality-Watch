/* Created by ianb on 01/10/2014 11:57:51 using v2.1 */{
title: {text:'Managerial Staff'},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of managerial staff in the NHS changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Sep 09','Oct 09','Nov 09','Dec 09','Jan 10','Feb 10','Mar 10','Apr 10','May 10','Jun 10','Jul 10','Aug 10','Sep 10','Oct 10','Nov 10','Dec 10','Jan 11','Feb 11','Mar 11','Apr 11','May 11','Jun 11','Jul 11','Aug 11','Sep 11','Oct 11','Nov 11','Dec 11','Jan 12','Feb 12','Mar 12','Apr 12','May 12','Jun 12','Jul 12','Aug 12','Sep 12','Oct 12','Nov 12','Dec 12','Jan 13','Feb 13','Mar 13','Apr 13','May 13','Jun 13','Jul 13','Aug 13','Sep 13','Oct 13','Nov 13','Dec 13','Jan 14','Feb 14','Mar 14','Apr 14','May 14']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Number of Managers (FTE)'}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Managers',
type: 'line',
data: [29741.1,29883.9,30025.2,30164.4,30198,30239.3,30215.3,29603.2,29578.5,29428.8,29089.1,28433.5,28141,27671.8,27475.4,27305.9,27074.1,26825.8,26667.7,26024.8,25940,25796.2,25792,25723,25722.9,25697.8,25670.4,25583.2,25593.3,25500.4,25341.9,24975,24898.6,24868,24800.8,24843,24954.4,24936.5,25011,24950,24699.3,24729,24648.8,23275.4,23395.2,23244.3,23403.6,23396.8,24430.2,24349,24480.7,24486.4,24599.1,24730.9,24859.9,24171.2,24133.2]
,index: 1
},
{
name: 'Senior managers',
type: 'line',
data: [12981.3,13082.6,13215.4,13255.8,13303.8,13363.1,13392.5,12912.1,12688.2,12627.8,12349.3,12111.7,11952.8,11832.6,11816.3,11728.3,11653.2,11609,11571,11304.6,11241.7,11192.2,11024.7,10900.1,10890.4,10817.8,10804.8,10779.9,10696.2,10732.1,10761.4,10667.2,10696.9,10687.3,10716.3,10707,10695.6,10597,10599,10584.8,10652.8,10643.8,10654.9,10409.5,10534.9,10878.7,11016.6,11095,10157.5,10196.7,10233.9,10375.5,10410,10467.3,10516.8,10476.8,10510.8]
,index: 2
}
]
}
