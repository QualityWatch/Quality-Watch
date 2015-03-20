/* Created by ianb on 20/03/2015 10:57:44 using v2.5 */{
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
, labels: {
format: '{value:.2f}' 
}},
series:[
{
name: 'Male',
type: 'column',
data: [591.96,531.18,425.15,422.06,230.95,213.1,198.79,189.6,199.39,225.36,256.88,296.89,334.93,387.55,493.96,748.34,1230.2,2363.92,5319.47]
,index: 1
},
{
name: 'Female',
type: 'column',
data: [503.44,432.42,312.14,177.04,94.33,110.28,101.53,110.77,127.5,153.71,187.67,272.04,374.27,468.92,672.64,1082.62,1972.57,3867.65,8223.29]
,index: 2
}
]
}
