/* Created by EFisher on 12/10/2015 14:31:46 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of ambulance staff changed over time?'},
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
title: {text:'Number of Ambulance staff (FTEs)'}
, max: 18200
, min: 17000
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Qualified ambulance staff',
type: 'line',
data: [17234.2,17369.2,17497.7,17512.3,17668.7,17759.4,17818.9,17770.1,17727.4,17727.3,17708,17668.7,17685.9,17775.2,17806.8,17803.6,17842.4,17920.9,17896.3,17820.6,17813.5,17797.9,17770.5,17819.2,17855.1,17965.9,18013.1,17983,17964.2,17998.9,17986.1,17921.5,17869.2,17804.6,17769.3,17693.1,17755.3,17910.5,17932.7,17908.9,17917.9,17950,17884.5,17877,17847.9,17742.3,17730.8,17750.2,17814.7,17966.6,17947.2,17923.4,17888.2,17878.3,17824.9,17733.8,17675.4,17640.7,17610.5,17614.6,17700.4,17773.8,17801.1,17786.4,17832.3,17821.7,17918.6,17918.6,17802.4]
,index: 1
}
]
}
