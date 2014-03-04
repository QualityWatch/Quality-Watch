/* Created by EFisher on 25/02/2014 18:19:22 using v2.0 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How do admissions for falls vary by deprivation?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Least deprived','2nd decile','3rd decile','4th decile','5th decile','6th decile','7th decile','8th decile','9th decile','Most deprived']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'2011/12 monthly rate of admissions <br> per 100,000 people (standardised <br> for age and sex)', offset: 99}
, labels: {
format: '{value:.1f}' 
}},
series:[
{
name: '2011/12',
type: 'column',
data: [1346.3,1443.6,1515.2,1515.2,1607.7,1660.3,1783.7,1929.6,2028.5,2218.9]
}
]
}
