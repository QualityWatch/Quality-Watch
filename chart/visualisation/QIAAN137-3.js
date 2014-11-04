/* Created by ianb on 04/11/2014 13:15:55 using v2.2 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'What other antibiotics are most prescribed?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013]
, labels: {
}
},
yAxis: {
title: {text:''}
, labels: {
format: '{value:.1f}' 
}},
legend: {title: {text: 'Click on series name to show or hide'}, borderWidth: 2},series:[
{
name: 'Macrolides',
type: 'line',
data: [4.4,4.2,4.3,4.2,4.4,4.4,4.3,4.6,4.7,5.2,4.9]
,index: 1
},
{
name: 'Tetracyclines',
visible: false,type: 'line',
data: [2.6,2.6,2.6,2.6,2.7,2.9,3.2,3.4,3.6,4.1,4.2]
,index: 2
},
{
name: 'Sulfonamides And Trimethoprim',
visible: false,type: 'line',
data: [2.8,2.9,2.9,3,3.1,3.3,3.5,3.6,3.8,3.9,4]
,index: 3
},
{
name: 'Urinary-Tract Infections',
visible: false,type: 'line',
data: [0.3,0.4,0.4,0.5,0.5,0.7,1,1.2,1.6,1.9,2.1]
,index: 4
},
{
name: 'Metronidazole, Tinidazole & Ornidazole',
visible: false,type: 'line',
data: [1.7,1.7,1.7,1.7,1.7,1.8,1.8,1.9,1.9,1.9,1.9]
,index: 5
},
{
name: 'Cephalosporins',
visible: false,type: 'line',
data: [3.1,3.1,3.2,3.3,3.3,2.9,2.4,2.1,1.7,1.5,1.3]
,index: 6
}
]
}
