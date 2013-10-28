/* Created by ianb on 14/10/2013 11:45:35 using v0.9 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have conception rates changed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011]
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Number of conceptions in under 18s <br> in England per 1,000 women in age <br> group', offset: 99}
, labels: {
}},
series:[
{
name: 'England',
type: 'line',
data: [46.6,44.8,43.6,42.5,42.8,42.1,41.6,41.4,40.6,41.4,39.7,37.1,34.2,30.7]
,index: 1
}
]
}
