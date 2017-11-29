/* Created by JMorris on 28/11/2017 12:48:05 using v2.7 *//* Created by JMORRIS on 28/11/2017 using v2.7 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does health expenditure per capita vary internationally?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''},
categories: ['United States', 'Switzerland', 'Luxembourg', 'Norway', 'Germany', 'Ireland', 'Sweden', 'Netherlands', 'Austria', 'Denmark', 'Belgium', 'Canada', 'Australia', 'France', 'Japan', 'Iceland', 'United Kingdom', 'Finland', 'OECD AVERAGE', 'New Zealand', 'Italy', 'Spain', 'Slovenia', 'Israel', 'Portugal', 'Korea', 'Czech Republic', 'Greece', 'Slovak Republic', 'Hungary', 'Estonia', 'Chile', 'Poland', 'Latvia', 'Turkey', 'Mexico'],
tickInterval: 1,
labels: {
}
},
yAxis: {
title: {text:''},
max: 10000,
tickInterval: 2000,
labels: {
format: '{value:.5f}' ,
formatter: function() {return '$'+this.value;}}},
series:[
{
name: "Total health expenditure per capita (US$ PPP) 2016 (estimated values)",
type: 'bar',
data: [9892, 7919, 7463, 6647, 5551, 5528, 5488, 5385, 5227, 5205, 4840, 4753, 4708, 4600, 4519, 4376, { y: 4192, color: '#8bbc21'}, 4033, { y: 4003, color: '#c42525'}, 3590, 3391, 3248, 2835, 2822, 2734, 2729, 2544, 2223, 2150, 2101, 1989, 1977, 1798, 1466, 1088, 1080],
  tooltip: {valuePrefix: '$'},
  index: 1
}
]
}