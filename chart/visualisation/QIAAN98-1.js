/* Created by ianb on 08/10/2013 13:54:03 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the number of mixed-sex accommodation breaches changed?'},
credits: {enabled: true, text: '© Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of MSA breaches '}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'MSA breaches',
type: 'line',
data: [11802,8708,8031,5466,2236,1908,1939,1075,1083,1063,1236,937,907,629,581,503,600,432,314,270,152,182,241,189,314,407,310,330,276,187,198,259]
,index: 1
}
]
}
