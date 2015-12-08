/* Created by EFisher on 08/12/2015 16:50:46 using v2.7 */
/* Created by EFisher on 03/12/2015 13:04:48 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How strongly do seasons influence breaches?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['April','May','June','July','August','September','October','November','December','January','February','March']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'Percentage of patients from arrival <br> either admitted, transferred or <br> discharged within 4 hours (type <br> 1)', offset: 111}
, max: 100
, min: 80
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '2010/11',
visible: true,type: 'line',
data: [null, null, null, null, 97.13, 96.49, 96.01, 95.88, 92.37, 93.65, 95.60, 95.26]
,index: 1
},
{
name: '2011/12',
visible: false,type: 'line',
data: [95.30, 95.61, 95.65, 96.38, 96.09, 95.31, 94.88, 94.87, 93.71, 93.58, 92.48, 94.80]
,index: 2
},
{
name: '2012/13',
visible: false,type: 'line',
data: [94.48, 95.17, 95.06, 95.57, 95.51, 95.05, 94.40, 94.08, 92.02, 91.87, 91.44, 90.25]
,index: 3
},
{
name: '2013/14',
visible: false,type: 'line',
data: [90.10, 94.83, 95.36, 94.98, 94.34, 93.64, 93.48, 93.88, 92.91, 92.73, 91.89, 93.37]
,index: 4
},
{
name: '2014/15',
visible: false,type: 'line',
data: [92.79, 92.19, 92.83, 92.74, 92.65, 91.97, 90.63, 90.24, 84.78, 86.55, 87.76, 88.92]
,index: 5
},
{
name: '2015/16',
visible: false,type: 'line',
data: [89.80, 91.42, 92.26, 92.52, 91.41, 90.15, null, null, null, null, null, null]
,index: 6
}
]
}
