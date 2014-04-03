/* Created by EFisher on 26/03/2014 16:50:52 using v2.1 */{
title: {text:''},
credits: {enabled: false},
exporting: {chartOptions: {
title: {text: 'How have waiting times after an urgent referral changed by cancer type?'},
credits: {enabled: true, text: 'Copyright Nuffield Trust & The Health Foundation', href: 'http://www.qualitywatch.org.uk'}
}},
xAxis: {
title: {text:''}
, categories: ['Acute Leukaemia','Brain/CNS','Breast','Children\'s','Gynaecological','Haematological malignancies','Head & neck','Lower gastrointestinal','Lung','Other','Sarcoma','Skin','Testicular','Upper gastrointestinal','Urological malignancies']
, labels: {
 rotation: -90
, step: 1
}
},
yAxis: {
title: {text:'The proportion of people with an <br> urgent referral who were seen by <br> a specialist within 2 weeks', offset: 99}
, max: 100
, labels: {
format: '{value:.1f}' 
,formatter: function() {return this.value +'%';}}},
tooltip: {valueSuffix: '%'},
series:[
{
name: '2013/14 Q2',
type: 'column',
data: [100,96.5,96,95.5,96,97.5,95.5,94.6,97.3,96,96.7,94.3,97.8,93.8,95.9]
,index: 1
},
{
name: '2013/14 Q3',
type: 'column',
data: [95.8,96.9,96.8,96.1,96.1,97.3,95.9,95.3,97.3,97.1,96.6,95.2,98.2,94,94.8]
,index: 2
}
]
}
