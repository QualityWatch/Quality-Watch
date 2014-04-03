/* Created by EFisher on 26/03/2014 17:03:28 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of community nurses changed?'},
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
title: {text:'Number of full time equivalents <br> community nurses', offset: 87}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Community Services',
type: 'line',
data: [48107.5,48246.9,48461.3,48365.8,48503.7,48506.2,48591.5,48150.1,48068.3,48079.9,48075.6,47936.9,47779,47673.4,47785,47719.4,47826.8,47667.8,47683.5,46891.8,46809.4,46608.7,46343.4,46229.7,46399.1,46410.8,46476.6,46279.1,46422.8,46430.2,46414.5,46415.6,46315,46063.8,45986.1,45831.4,46035.3,46027.8,46160.8,46000.8,45966.2,46131.3,46192.2,45578.2,45540.9,45514.6,45393.7,45271.6,45715.9,45942.9]
,index: 1
}
]
}
