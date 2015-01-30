/* Created by ianb on 30/01/2015 15:42:02 using v2.3 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'Do STEMI patients have swift access to the recommended treatment?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['2004-5','2005-6','2006-7','2007-8','2008-9','2009-10','2010-11','2011-12','2012-13','2013-14']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients with STEMI <br> receiving primary PCI within 90 <br> minutes of hospital arrival at the <br> heart attack centre', offset: 111}
, labels: {
}},
series:[
{
name: 'Series1',
type: 'column',
data: [52.2,61.7,72.3,79.2,84.1,88.1,89.4,91.5,91.6,92.1]
,index: 1
}
]
}
