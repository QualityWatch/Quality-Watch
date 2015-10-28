/* Created by EFisher on 26/10/2015 10:09:32 using v2.7 */
{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How has the proportion of children and young people with diabetes receiving recommended care processes changed over time?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['HbA1c','BMI','Blood <br/> pressure','Urinary <br/> Albumin','Cholesterol','Eye <br/> screening','Foot <br/> exam','over age <br/> 12with <br/> all care <br/> processes recorded']
, labels: {
 rotation: 0
, step: 1
}
},
yAxis: {
title: {text:'Proportion if children having specific <br> care processes (%)', offset: 87}
, max: 100
, labels: {
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: '2004/5',
visible: true,type: 'column',
data: [73.2,50.5,44.1,18.7,18.2,17.7,17.4,2]
,index: 1
},
{
name: '2005/6',
visible: false,type: 'column',
data: [77.6,53,40.6,23.3,17.5,15.3,15.4,2.6]
,index: 2
},
{
name: '2006/7',
visible: false,type: 'column',
data: [84.7,60.5,53.3,30.3,22.6,25.2,21.3,3.6]
,index: 3
},
{
name: '2007/8',
visible: false,type: 'column',
data: [89.1,73.2,60.1,34.1,32.1,25.7,23.5,5]
,index: 4
},
{
name: '2008/9',
visible: false,type: 'column',
data: [89.6,66,57.1,32.2,30.5,26.9,23.1,5.2]
,index: 5
},
{
name: '2009/10',
visible: false,type: 'column',
data: [90.1,70.2,58.8,36.5,29.9,25.8,24.5,4.1]
,index: 6
},
{
name: '2010/11',
visible: false,type: 'column',
data: [92.8,75.3,62.7,40.3,34.9,35.8,31.9,5.8]
,index: 7
},
{
name: '2011/12',
visible: false,type: 'column',
data: [89.3,64.7,67.7,40.7,44.4,36.9,34.4,6.7]
,index: 8
},
{
name: '2012/13',
visible: false,type: 'column',
data: [97.6,87.9,77.3,49.5,52.7,49.7,39.5,12.1]
,index: 9
},
{
name: '2013/14',
visible: false,type: 'column',
data: [98.3,94,80.2,48.8,54.2,51.9,45.7,16.1]
,index: 10
}
]
}
