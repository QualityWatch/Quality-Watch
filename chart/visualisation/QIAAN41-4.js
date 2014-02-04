/* Created by EFisher on 24/01/2014 16:54:18 using v2.0 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do admissions for falls vary by age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Age 0','Age 01-04','Age 05-09','Age 10-14','Age 15-19','Age 20-24','Age 25-29','Age 30-34','Age 35-39','Age 40-44','Age 45-49','Age 50-54','Age 55-59','Age 60-64','Age 65-69','Age 70-74','Age 75-79','Age 80-84','Age 85+']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Monthly rate of admissions per 100,000 <br> people (standardised for age and <br> sex)', offset: 99}
, max: 8500
, min: 0
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: 'Male',
type: 'column',
data: [666.4,624.8,531.5,527.4,278.8,249.4,227.8,205.4,218.7,244.4,258.9,295.4,337.9,402.6,511.9,731,1225.1,2326.3,5265.8]
,index: 1
},
{
name: 'Female',
type: 'column',
data: [609.9,491.8,389.6,209.8,100.1,111.4,107.3,113.6,138.1,156,188.6,269.7,359.4,481.4,668.7,1114.4,2092.1,3878.5,8219.1]
,index: 2
}
]
}
