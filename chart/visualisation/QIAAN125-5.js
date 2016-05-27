/* Created by NCODowd on 24/05/2016 16:32:06 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How does the expenditure on long term support differ by setting and age?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Residential','Home Care (Community)','Nursing','Direct Payments (Community)','Supported Living (Community)','Other long term care (Community)','Supported Accommodation']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Gross current expenditure on long <br> term support for adults; by support <br> setting and age (in thousands)', offset: 99}
, labels: {
format: '{value:.1f}' 
,formatter: function() {return '$'+this.value;}}},
series:[
{
name: '18-64',
type: 'column',
data: [2171973,689248,231858,944167,1067272,793850,342548]
,index: 1
},
{
name: '65+',
type: 'column',
data: [3030832,1378384,1348472,426487,188710,317262,96788]
,index: 2
}
]
}
