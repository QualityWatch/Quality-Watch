/* Created by ianb on 16/12/2014 10:53:41 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the rate of mixed-sex accommodation breaches changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Dec 2010','Jan 2011','Feb 2011','Mar 2011','Apr 2011','May 2011','Jun 2011','Jul 2011','Aug 2011','Sep 2011','Oct 2011','Nov 2011','Dec 2011','Jan 2012','Feb 2012','Mar 2012','Apr 2012','May 2012','Jun 2012','Jul 2012','Aug 2012','Sep 2012','Oct 2012','Nov 2012','Dec 2012','Jan 2013','Feb 2013','Mar 2013','Apr 2013','May 2013','Jun 2013','Jul 2013','Aug 2013','Sep 2013','Oct 2013','Nov 2013','Dec 2013','Jan 2014','Feb 2014','Mar 2014','Apr 2014']
, labels: {
 rotation: -90
, step: 2
}
},
yAxis: {
title: {text:'Mixed sex accommodation breaches <br> per 1000 finished consultant episode <br> ', offset: 99}
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Breach rate',
type: 'line',
data: [8.41,6.44,5.99,3.57,1.6,1.36,1.33,0.73,0.78,0.73,0.84,0.63,0.65,0.44,0.43,0.33,0.44,0.3,0.21,0.19,0.11,0.13,0.17,0.13,0.22,0.27,0.21,0.21,0.22,0.13,0.15,0.15,0.13,0.11,0.12,0.16,0.17,0.23,0.2,0.12,0.13]
,index: 1
}
]
}
